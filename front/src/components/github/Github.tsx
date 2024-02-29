import React, { useEffect, useState } from "react";
import { githubName,githubRepoList } from "../../Controller";
import * as githubAPIs from "../../api/GithubAPIs";
import GithubPrfileCard from "./GithubProfileCard";
import GitHubCalendar from "react-github-calendar";
import GithubRepoCard from "./GithubRepoCard";

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

const Github:React.FC=()=>{
    const [accountInfo,setAccountInfo]=useState<AccountInfoType>();    
    const [repos,setRepos]=useState<Array<RepoType>>([]);

    useEffect(()=>{
        (async()=>{
            const allAccountInfo= await githubAPIs.getAccountInfo(githubName);
            setAccountInfo({name:githubName,avatarUrl:allAccountInfo.data.avatar_url,repos:allAccountInfo.data.public_repos,following:allAccountInfo.data.following,followers:allAccountInfo.data.followers});
        })();

        (async()=>{
            const allRepos=await githubAPIs.getAllRepos(githubName);
            allRepos.data.map((repo):void=>{
                if(githubRepoList.includes(repo.name)){
                    const owner=repo.owner.login;
                    const repoName=repo.name;
                    (async()=>{
                        const languages=await githubAPIs.getRepoLanguages(owner,repoName);
                        setRepos(repos=>[...repos,{fullName:repo.full_name,description:repo.description,url:repo.html_url,updatedDate:repo.pushed_at?.substring(0,repo.pushed_at.indexOf("T")),languages:languages.data}]);
                    })();                
                }
            });
        })();
    },[]);

    return(
        <section id="github">
            <div className="container px-5 py-10 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto w-full flex flex-col items-center">
                    <h1 className="text-2xl font-medium title-font text-gray-900">Github</h1>
                    <div className="flex justify-center">
                        <div className="w-16 h-1 rounded-full bg-purple-400 inline-flex mt-1 mb-8"></div>
                    </div>
                    <div className="w-full md:w-3/4 pb-4">
                        <GithubPrfileCard accountInfo={accountInfo} />
                    </div>
                        <GitHubCalendar username={githubName} fontSize={16} throwOnError style={{width:"100%",overflow:"scroll", marginTop:"10px",marginBottom:"10px"}}/>
                    <div>
                        <div className="flex items-center justify-center my-4">
                            <h2 className="font-medium title-font text-gray-900 text-lg">Repositories</h2>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {repos && 
                            repos.map((repo,index)=>{
                                return (
                                    <div key={index} className="w-full xl:w-1/3 md:w-1/2 p-4">
                                        <GithubRepoCard repo={repo} />
                                    </div>
                                    )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Github;