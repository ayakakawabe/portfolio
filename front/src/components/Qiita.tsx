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
            sortedAllArticles.slice(0,6).map((article):void=>{
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
            <div className="flex items-center justify-center my-4">
                <h2 className="font-medium title-font text-gray-900 text-lg">Articles</h2>
            </div>
            <div className="flex flex-wrap -m-4">
                {articles.map((article,index)=>{
                    return (
                        <div key={index} className="w-full xl:w-1/3 md:w-1/2 p-4">
                            <a href={article.url} className="hover:cursor-pointer">
                                <div className="border border-gray-200 p-5 rounded-lg h-full flex flex-col justify-between">
                                    <div>
                                    <p>{article.updatedDate}</p>
                                    <h3 className="text-lg text-gray-900 font-medium title-font mb-2">{article.title}</h3>
                                    </div>
                                    <div>
                                    <div className="flex flex-wrap">
                                        {article.tags.map((tag,index)=>{
                                            return (
                                                <span key={index} className="bg-transparent text-gray-500 border border-gray-500 text-xs font-semibold px-2.5 py-0.5 rounded-full m-px">{tag.name}</span>
                                            )
                                        })}
                                    </div>
                                    <div className="flex justify-end pt-2">
                                        <span className="inline-flex items-center leading-none text-sm px-2 py-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="w-4 h-4 mr-1" viewBox="0 0 512 512">
                                                <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
                                                <path d="M256 360a16 16 0 01-9-2.78c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5.31-31.06 25.22-56.33 55.53-56.33 20.4 0 35 10.63 44.1 20.41a6 6 0 008.72 0c9.11-9.78 23.7-20.41 44.1-20.41 30.31 0 55.22 25.27 55.53 56.33.28 27.1-9.31 52.13-29.3 76.5-9.38 11.44-26.4 29.73-65.7 56.41A16 16 0 01256 360z" fill="currentColor"/>
                                            </svg>
                                            {article.likes}
                                        </span>
                                        <span className="inline-flex items-center leading-none text-sm px-2 py-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 512 512">
                                                <path d="M80 152v256a40.12 40.12 0 0040 40h272a40.12 40.12 0 0040-40V152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                                                <rect x="48" y="64" width="416" height="80" rx="28" ry="28" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/>
                                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M320 304l-64 64-64-64M256 345.89V224"/>
                                            </svg>
                                            {article.stocks}
                                        </span>
                                        <span className="inline-flex items-center leading-none text-sm px-2 py-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 512 512">
                                                <path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                                                <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
                                            </svg>
                                            {article.pv}
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
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