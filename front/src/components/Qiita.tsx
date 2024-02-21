import React from "react";
import type { Qiita as QiitaType } from "./../types/qiita";

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
    (async()=>{
        const allAccountInfo= await getAccountInfo();
        console.log(allAccountInfo);
    })();
    return(
        <div>
            <h1>Qiita</h1>
        </div>
    )
};
export default QiitaArt;