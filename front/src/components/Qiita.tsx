import React, { useEffect, useState } from "react";
import type { Qiita as QiitaType } from "./../types/qiita";

interface QiitaAccountInfoType{
    name:string,
    avatarUrl:string,
    articles:number,
    following:number,
    followers:number,
    url:string
}

interface QiitaArticlesType{
    likes:number,
    stocks:number,
    tags:any[],
    title:string,
    updatedDate:string,
    url:string,
    pv:number|null
}

const QIITA_AUTH:string=import.meta.env.VITE_QIITA_AUTH;

const getAccountInfo=async():Promise<QiitaType.Entities.AuthenticatedUser>=>{
    const response= await fetch("https://qiita.com/api/v2/users/ayakaintheclouds",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+QIITA_AUTH
        }
    })
    if(!response.ok){
        throw new Error(`HTTP error (get account infomation). Status:${response.status}`);
    }
    const data=response.json();
    return data;
}

const getAllArticles=async():Promise<Array<QiitaType.Entities.Item>>=>{
    const response= await fetch("https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=100",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+QIITA_AUTH
        }
    })
    if(!response.ok){
        throw new Error(`HTTP error (get articles). Status:${response.status}`);
    }
    const data=response.json();
    return data;
};

const QiitaArt:React.FC=()=>{
    const [accountInfo,setAccountInfo]=useState<QiitaAccountInfoType>();
    const [articles,setArticles]=useState<Array<QiitaArticlesType>>([]);

    useEffect(()=>{
        (async()=>{
            const allAccountInfo= await getAccountInfo();
            setAccountInfo({name:allAccountInfo.id,avatarUrl:allAccountInfo.profile_image_url,articles:allAccountInfo.items_count,followers:allAccountInfo.followers_count,following:allAccountInfo.followees_count,url:"https://qiita.com/"+allAccountInfo.id});
        })();

        (async()=>{
            const allArticles=await getAllArticles();
            const sortedAllArticles=allArticles.sort((a,b)=>{
                return (a.likes_count,b.likes_count)?1:-1;
            });
            sortedAllArticles.slice(0,4).map((article):void=>{
                setArticles(articles=>[...articles,{likes:article.likes_count,stocks:article.stocks_count,tags:article.tags,title:article.title,updatedDate:article.updated_at.substring(0,article.updated_at.indexOf("T")),url:article.url,pv:article.page_views_count}]);
            });
        })();
    },[]);
    return(
        <section id="qiita">
            <div className="container px-5 py-10 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto flex  flex-col items-center">
            <h1 className="text-2xl font-medium title-font text-gray-900">Qiita</h1>
            <div className="flex justify-center">
                <div className="w-16 h-1 rounded-full bg-purple-400 inline-flex mt-1 mb-8"></div>
            </div>
            <div className="w-full  md:w-3/4 pb-4">
                <div className="h-full flex md:flex-row flex-col items-center justify-evenly border-gray-200 border p-2 md:p-4 rounded-lg">
                    <div className="flex items-center mx-4">
                        <a href={accountInfo?.url} className="hover:cursor-pointer">
                            <img src={accountInfo?.avatarUrl} className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"></img>
                        </a>
                        <a href={accountInfo?.url} className="hover:cursor-pointer">
                            <p className="my-auto font-medium text-gray-900">@{accountInfo?.name}</p>
                        </a>
                    </div>
                    <div className="flex flex-wrap justify-around md:justify-between text-center">
                        <div className="pt-2 px-4 md:p-4 w-1/4 flex flex-col items-center">
                            <p className="font-medium text-xl text-gray-900">{accountInfo?.articles}</p>
                            <p className="leading-relaxed">articles</p>
                        </div>
                        <div className="pt-2 px-4 md:p-4 w-1/4 flex flex-col items-center">
                            <p className="font-medium text-xl text-gray-900">{accountInfo?.followers}</p>
                            <p className="leading-relaxed">followers</p>
                        </div>
                        <div className="pt-2 px-4 md:p-4 w-1/4 flex flex-col items-center">
                            <p className="font-medium text-xl text-gray-900">{accountInfo?.following}</p>
                            <p className="leading-relaxed">following</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {articles.map((article,index)=>{
                    return (
                        <div key={index}>
                            <p>title:{article.title}</p>
                            <p>updated:{article.updatedDate}</p>
                            <ul>
                                {article.tags.map((tag,index)=>{
                                    return (
                                        <li key={index}>{tag.name}</li>
                                    )
                                })}
                            </ul>
                            <p>likes:{article.likes}</p>
                            <p>stocks:{article.stocks}</p>
                            <p>pv:{article.pv}</p>
                        </div>
                    )
                })}
            </div>
            </div>
            </div>
        </section >
    )
};
export default QiitaArt;