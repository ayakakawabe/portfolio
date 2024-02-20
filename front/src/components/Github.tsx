import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import { Endpoints } from "@octokit/types";

interface AccountInfoType{
    name:string,
    avatarUrl:string,
    repos:number,
    following:number,
    followers:number
}

interface RepoType{
    fullName:string,
    description:string,
    languages:Array<string>,
    url:string,
    updatedDate:string
}

type AccountInfoResponseType=Endpoints["GET /users/{username}"]["response"];
type ReposResponseType=Endpoints["GET /users/{username}/repos"]["response"];

const acconutName:string="ayakakawabe";
const repoList:Array<string>=["TaRO","chatgpt-line-bot-for-experiment","portfolio"];

const GitHub_AUTH:string=import.meta.env.VITE_GITHUB_AUTH;
const octokit=new Octokit({
    auth: GitHub_AUTH
});


const getAccountInfo= async(acconutName:string):Promise<AccountInfoResponseType>=>{
  const response= await octokit.request("GET /users/{username}",{
    username:acconutName,
    headers:{
        'X-GitHub-Api-Version': '2022-11-28',
        accept:"application/vnd.github+json",
        "user-agent": "ayakakawabe_portfolio"
    }
  })
    if(response.status!=200){
        throw new Error(`HTTP error (get account infomation). Status:${response.status}`);
    }
  return response;  
};

const getAllRepos= async(acconutName:string):Promise<ReposResponseType>=>{
    const response= await octokit.request("GET /users/{username}/repos",{
        username:acconutName,
        type:"all",
        headers:{
            accept:"application/vnd.github+json",
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    if(response.status!=200){
        throw new Error(`HTTP error (get repos). Status:${response.status}`);
    }
    return response;
};

const GithubRepo:React.FC=()=>{
    const [accountInfo,setAccountInfo]=useState<AccountInfoType>();    
    const [repos,setRepos]=useState<Array<RepoType>>([]);

    useEffect(()=>{
        (async()=>{
            const allAccountInfo= await getAccountInfo(acconutName);
            setAccountInfo({name:acconutName,avatarUrl:allAccountInfo.data.avatar_url,repos:allAccountInfo.data.public_repos,following:allAccountInfo.data.following,followers:allAccountInfo.data.followers});
        })();

        (async()=>{
            const allRepos=await getAllRepos(acconutName);
            allRepos.data.forEach((repo)=>{
                if(repoList.includes(repo.name)){
                    const langurages_url:string=repo.languages_url;
                    console.log(langurages_url);                    
                }
            })
            // allRepos.forEach((repo)=>{
            //     if(repoList.includes(repo.name)){
            //         console.log(repo)
            //         setRepos(repos=>[...repos,{name:repo.name,language:[repo.language],description:repo.description,url:repo.html_url}]);
            //     }
            // });
        })();
    },[]);

    return(
        <div>
            <h1>Github</h1>
            <div>
                <img src={accountInfo?.avatarUrl}></img>
                <p>{accountInfo?.name}</p>
                <p>{accountInfo?.repos}</p>
                <p>{accountInfo?.following}</p>
                <p>{accountInfo?.followers}</p>                
            </div>
            <div>
                {repos && 
                repos.map((repo,index)=>{
                    return (
                        <div key={index}>
                            <p>{repo.name}</p>
                            <p>{repo.description}</p>
                            <p>{repo.language}</p>
                        </div>
                        )
                })}
            </div>
        </div>
    )
}
export default GithubRepo;