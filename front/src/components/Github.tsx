import React from "react";
import { GithubRepoData } from "./api/Github";

const GithubRepo:React.FC=()=>{
    const repo=GithubRepoData("chatgpt-line-bot-for-experiment")
    console.log(repo)
    return(
        <div>
            <h1>Github</h1>
            <p>{repo.name}</p>
        </div>
    )
};
export default GithubRepo;