import { Octokit } from "@octokit/core";
import { Endpoints } from "@octokit/types";

type AccountInfoResponseType=Endpoints["GET /users/{username}"]["response"];
type ReposResponseType=Endpoints["GET /users/{username}/repos"]["response"];
type RepoLanguagesType=Endpoints["GET /repos/{owner}/{repo}/languages"]["response"];

const GitHub_AUTH:string=import.meta.env.VITE_GITHUB_AUTH;
const octokit=new Octokit({
    auth: GitHub_AUTH
});

export const getAccountInfo= async(acconutName:string):Promise<AccountInfoResponseType>=>{
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

export const getAllRepos= async(acconutName:string):Promise<ReposResponseType>=>{
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

export const getRepoLanguages=async(owner:string,repo:string):Promise<RepoLanguagesType>=>{
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