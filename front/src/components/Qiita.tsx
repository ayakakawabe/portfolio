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
    const [articles,setArticles]=useState<QiitaArticlesType>();

    useEffect(()=>{
        (async()=>{
            const allAccountInfo= await getAccountInfo();
            setAccountInfo({name:allAccountInfo.id,avatarUrl:allAccountInfo.profile_image_url,articles:allAccountInfo.items_count,followers:allAccountInfo.followers_count,following:allAccountInfo.followees_count,url:"https://qiita.com/"+allAccountInfo.id});
        })();

        (async()=>{
            const allArticles=await getAllArticles();
            console.log(allArticles);
            const sortedAllArticles=allArticles.sort((a,b)=>{
                return (a.likes_count,b.likes_count)?1:-1;
            });
            console.log(sortedAllArticles);
        })();
    },[]);
    return(
        <div>
            <h1>Qiita</h1>
            <div>
                <img src={accountInfo?.avatarUrl}></img>
                <p>name:{accountInfo?.name}</p>
                <p>articles:{accountInfo?.articles}</p>
                <p>followers:{accountInfo?.followers}</p>
                <p>following:{accountInfo?.following}</p>
            </div>
        </div>
    )
};
export default QiitaArt;