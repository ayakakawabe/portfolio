import React, { useEffect, useState } from "react";
import * as QiitaAPIs from "../../api/QiitaAPIs";
import QiitaProfileCard from "./QiitaProfileCard";
import QiitaArticleCard from "./QiitaArticleCard";

interface QiitaAccountInfoType{
    name:string,
    avatarUrl:string,
    articles:number,
    following:number,
    followers:number,
    url:string
}

interface QiitaArticleType{
    likes:number,
    stocks:number,
    tags:any[],
    title:string,
    updatedDate:string,
    url:string,
    pv:number|null
}

const qiita_name:string="ayakaintheclouds"

const Qiita:React.FC=()=>{
    const [accountInfo,setAccountInfo]=useState<QiitaAccountInfoType>();
    const [articles,setArticles]=useState<Array<QiitaArticleType>>([]);

    useEffect(()=>{
        (async()=>{
            const allAccountInfo= await QiitaAPIs.getAccountInfo(qiita_name);
            setAccountInfo({name:allAccountInfo.id,avatarUrl:allAccountInfo.profile_image_url,articles:allAccountInfo.items_count,followers:allAccountInfo.followers_count,following:allAccountInfo.followees_count,url:"https://qiita.com/"+allAccountInfo.id});
        })();

        (async()=>{
            const allArticles=await QiitaAPIs.getAllArticles();
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
                <QiitaProfileCard accountInfo={accountInfo} />
            </div>
            <div className="flex items-center justify-center my-4">
                <h2 className="font-medium title-font text-gray-900 text-lg">Articles</h2>
            </div>
            <div className="flex flex-wrap -m-4">
                {articles.map((article,index)=>{
                    return (
                        <div key={index} className="w-full xl:w-1/3 md:w-1/2 p-4">
                            <QiitaArticleCard article={article} />
                        </div>
                    )
                })}
            </div>
            </div>
            </div>
        </section >
    )
};
export default Qiita;