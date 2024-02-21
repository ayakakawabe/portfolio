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

const QIITA_AUTH:string=import.meta.env.VITE_QIITA_AUTH;

const getAccountInfo=async():Promise<QiitaType.Entities.User>=>{
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

const QiitaArt:React.FC=()=>{
    const [accountInfo,setAccountInfo]=useState<QiitaAccountInfoType>();
    useEffect(()=>{
        (async()=>{
            const allAccountInfo= await getAccountInfo();
            setAccountInfo({name:allAccountInfo.id,avatarUrl:allAccountInfo.profile_image_url,articles:allAccountInfo.items_count,followers:allAccountInfo.followers_count,following:allAccountInfo.followees_count,url:"https://qiita.com/"+allAccountInfo.id});
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