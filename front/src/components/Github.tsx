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
    name:string,
    description:string,
    language:Array<string>,
    url:string
}

type FetchAccountInfoResponse=Endpoints["GET /users/{username}"]["response"]

const acconutName:string="ayakakawabe";
const repoList:Array<string>=["chatgpt-line-bot-for-experiment","portfolio"];

const GitHub_AUTH:string=import.meta.env.VITE_GITHUB_AUTH;
const octokit=new Octokit({
    auth: GitHub_AUTH
});


const fetchAccountInfo= async(acconutName:string):Promise<FetchAccountInfoResponse>=>{
  const response= await octokit.request("GET /users/{username}",{
    username:acconutName,
    headers:{
        'X-GitHub-Api-Version': '2022-11-28',
        accept:"application/vnd.github+json",
        "user-agent": "ayakakawabe_portfolio"
    }
  })
    if(response.status!=200){
        throw new Error(`HTTP error (fetch repos ). Status:${response.status}`);
    }
  return response;  
};

const fetchAllRepos= async(acconutName:string):Promise<Array<object>>=>{
    const response= await fetch(`https://api.github.com/users/${acconutName}/repos`);
    if(!response.ok){
        throw new Error(`HTTP error (fetch repos ). Status:${response.status}`);
    }
    const data=response.json()
    return data;
};

const GithubRepo:React.FC=()=>{
    const [accountInfo,setAccountInfo]=useState<AccountInfoType>();    
    const [repos,setRepos]=useState<Array<RepoType>>([]);

    useEffect(()=>{
        (async()=>{
            const allAccountInfo= await fetchAccountInfo(acconutName);
            setAccountInfo({name:acconutName,avatarUrl:allAccountInfo.data.avatar_url,repos:allAccountInfo.data.public_repos,following:allAccountInfo.data.following,followers:allAccountInfo.data.followers});
        })();

        (async()=>{
            const allRepos=await fetchAllRepos(acconutName);
            allRepos.forEach((repo)=>{
                if(repoList.includes(repo.name)){
                    console.log(repo)
                    setRepos(repos=>[...repos,{name:repo.name,language:[repo.language],description:repo.description,url:repo.html_url}]);
                }
            });
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