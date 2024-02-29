import type { Qiita as QiitaType } from "../types/qiita";

const QIITA_AUTH:string=import.meta.env.VITE_QIITA_AUTH;

export const getAccountInfo=async(accountName:string):Promise<QiitaType.Entities.AuthenticatedUser>=>{
    const response= await fetch(`https://qiita.com/api/v2/users/${accountName}`,{
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

export const getAllArticles=async():Promise<Array<QiitaType.Entities.Item>>=>{
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
