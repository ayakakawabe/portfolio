import React from "react"

export interface qiitaProfileDataType{
    name:string,
    avatarUrl:string,
    articles:number,
    following:number,
    followers:number,
    url:string
}

export const QiitaProfileCard:React.FC<{accountInfo:qiitaProfileDataType|undefined}>=({accountInfo})=>{
    return (
        <div className="h-full flex md:flex-row flex-col items-center justify-evenly border-gray-200 border p-2 md:p-4 rounded-lg">
            <div className="flex items-center mx-4">
                <a href={accountInfo?.url} className="hover:cursor-pointer">
                    <img src={accountInfo?.avatarUrl} className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"></img>
                </a>
                <a href={accountInfo?.url} className="hover:cursor-pointer">
                    <p className="my-auto font-medium text-gray-900">@{accountInfo?.name}</p>
                </a>
            </div>
            <div className="flex flex-wrap justify-around md:justify-between text-center">
                <div className="pt-2 px-4 md:p-4 w-1/4 flex flex-col items-center">
                    <p className="font-medium text-xl text-gray-900">{accountInfo?.articles}</p>
                    <p className="leading-relaxed">articles</p>
                </div>
                <div className="pt-2 px-4 md:p-4 w-1/4 flex flex-col items-center">
                    <p className="font-medium text-xl text-gray-900">{accountInfo?.followers}</p>
                    <p className="leading-relaxed">followers</p>
                </div>
                <div className="pt-2 px-4 md:p-4 w-1/4 flex flex-col items-center">
                    <p className="font-medium text-xl text-gray-900">{accountInfo?.following}</p>
                    <p className="leading-relaxed">following</p>
                </div>
            </div>
        </div>
    )
}
