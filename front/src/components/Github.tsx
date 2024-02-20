import React, { useEffect, useState } from "react";

interface RepoType{
    name:string,
    description:string,
    language:Array<string>,
    url:string
}

const fetchAllRepos= async():Promise<Array<object>>=>{
    const response= await fetch("https://api.github.com/users/ayakakawabe/repos");
    if(!response.ok){
        throw new Error(`HTTP error. Status:${response.status}`);
    }
    const data=response.json()
    return data;
};

const GithubRepo:React.FC=()=>{

    const repoList:Array<string>=["chatgpt-line-bot-for-experiment","portfolio"];
    
    const [repos,setRepos]=useState<Array<RepoType>>([]);
    useEffect(()=>{
        (async()=>{
            const allRepos=await fetchAllRepos();
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