import React from "react"
import GithubLanguageColors from "../../data/github_language/colors.json";

interface RepoType{
    fullName:string,
    description:string|null,
    languages:{[key: string]: number},
    url:string,
    updatedDate:string|null|undefined
}

interface GithubLanguageColorType{
    color:string|null,
    url:string
}

interface GithubLanguageColorsType{
    [key:string]:GithubLanguageColorType
}

const searchGithubLanguageColor=(language:string):string=>{
    const nullColor:string="#ededed";
    const allGithubLanguageColors:GithubLanguageColorsType=GithubLanguageColors;
    return allGithubLanguageColors[language].color ?? nullColor;
}

const GithubRepoCard:React.FC<{repo:RepoType}>=({repo})=>{
    return (
        <a href={repo.url} className="hover:cursor-pointer">
            <div className="border border-gray-200 p-6 rounded-lg h-full flex flex-col justify-between shadow md:hadow-md">
                <div>
                    <p>{repo.updatedDate}</p>
                    <h3 className="text-lg text-gray-900 font-medium title-font mb-2">{repo.fullName}</h3>
                </div>
                <p className="mb-2">{repo.description}</p>
                <div className="flex flex-wrap">
                {Object.keys(repo.languages).map((language,index)=>{return(
                        <span key={index} style={{color:searchGithubLanguageColor(language),borderColor:searchGithubLanguageColor(language)}} className="bg-transparent border border-gray-500 text-xs font-semibold px-2.5 py-0.5 rounded-full m-px">{language}</span>
                )})}
                </div>
            </div>
        </a>
    )
}

export default GithubRepoCard;