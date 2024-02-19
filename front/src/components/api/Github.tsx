import { useState,useEffect } from "react";

//リポジトリ数、フォロワー数を取得
//引数がリポジトリ名で、リポジトリ名、説明、URL、言語を取得

interface RepoDataType{
    name:string,
    description:string,
    language:Array<String>,
    url:string
}

export const GithubRepoData=(repo:string):RepoDataType=>{
    const [repoData,setRepoData]=useState<RepoDataType>({name:"",description:"",language:[],url:""});
    
    const fetchRepoData=(repo:string)=>{
        fetch("https://api.github.com/repos/ayakakawabe/"+repo)
            .then(response=>{
                if(!response.ok){
                    throw new Error(`HTTP error. Status:${response.status}`);
                }
                return response.json();
            })
            .then((data)=>{
                setRepoData({name:repo,description:data.description,language:[data.language],url:data.html_url})
            })
            .catch(
                console.error
            );
    }

    useEffect(()=>{
        fetchRepoData(repo);
    },[])
    
    return repoData;
};