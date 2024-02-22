import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import { Endpoints } from "@octokit/types";
import GitHubCalendar from "react-github-calendar";

interface AccountInfoType{
    name:string,
    avatarUrl:string,
    repos:number,
    following:number,
    followers:number
}

interface RepoType{
    fullName:string,
    description:string|null,
    languages:{[key: string]: number},
    url:string,
    updatedDate:string|null|undefined
}

type AccountInfoResponseType=Endpoints["GET /users/{username}"]["response"];
type ReposResponseType=Endpoints["GET /users/{username}/repos"]["response"];
type RepoLanguagesType=Endpoints["GET /repos/{owner}/{repo}/languages"]["response"];

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
  });
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
            'X-GitHub-Api-Version': '2022-11-28',
            "user-agent": "ayakakawabe_portfolio"
        }
    });
    if(response.status!=200){
        throw new Error(`HTTP error (get repos). Status:${response.status}`);
    }
    return response;
};

const getRepoLanguages=async(owner:string,repo:string):Promise<RepoLanguagesType>=>{
    const response=await octokit.request("GET /repos/{owner}/{repo}/languages",{
        owner:owner,
        repo:repo,
        headers:{
            accept:"application/vnd.github+json",
            'X-GitHub-Api-Version': '2022-11-28',
            "user-agent": "ayakakawabe_portfolio"
        }
    });
    if(response.status!=200){
        throw new Error(`HTTP error (get repo languages). Status:${response.status}`);
    }
    return response;
}

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
            allRepos.data.map((repo):void=>{
                if(repoList.includes(repo.name)){
                    const owner=repo.owner.login;
                    const repoName=repo.name;
                    (async()=>{
                        const languages=await getRepoLanguages(owner,repoName);
                        setRepos(repos=>[...repos,{fullName:repo.full_name,description:repo.description,url:repo.html_url,updatedDate:repo.pushed_at?.substring(0,repo.pushed_at.indexOf("T")),languages:languages.data}]);
                    })();                
                };
            });
        })();
    },[]);

    return(
        <div>
            <h1>Github</h1>
            <div>
                <img src={accountInfo?.avatarUrl}></img>
                <p>name:{accountInfo?.name}</p>
                <p>repos:{accountInfo?.repos}</p>
                <p>followers:{accountInfo?.followers}</p> 
                <p>following:{accountInfo?.following}</p>               
            </div>
            <div>
            <GitHubCalendar username="ayakakawabe"/>
            </div>
            <div>
                {repos && 
                repos.map((repo,index)=>{
                    return (
                        <div key={index}>
                            <p>{repo.fullName}</p>
                            <p>{repo.updatedDate}</p>
                            <p>{repo.description}</p>
                            <ul>
                            {Object.keys(repo.languages).map((language,index)=>{return(
                                    <li key={index}>{language}</li>
                            )})}
                            </ul>
                        </div>
                        )
                })}
            </div>
        </div>
    )
}
export default GithubRepo;