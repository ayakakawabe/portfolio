import React from "react"

export interface qiitaArticleType{
    likes:number,
    stocks:number,
    tags:any[],
    title:string,
    updatedDate:string,
    url:string,
    pv:number|null
}

export const QiitaArticleCard:React.FC<{article:qiitaArticleType|undefined}>=({article})=>{
    return (
        <a href={article?.url} className="hover:cursor-pointer">
            <div className="border border-gray-200 p-5 rounded-lg h-full flex flex-col justify-between shadow md:hadow-md">
                <div>
                <p>{article?.updatedDate}</p>
                <h3 className="text-lg text-gray-900 font-medium title-font mb-2">{article?.title}</h3>
                </div>
                <div>
                <div className="flex flex-wrap">
                    {article?.tags.map((tag,index)=>{
                        return (
                            <span key={index} className="bg-gray-100 text-gray-900 text-xs px-2.5 py-0.5 rounded-full m-px">{tag.name}</span>
                        )
                    })}
                </div>
                <div className="flex justify-end pt-2">
                    <span className="inline-flex items-center leading-none text-sm px-2 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="w-4 h-4 mr-1" viewBox="0 0 512 512">
                            <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
                            <path d="M256 360a16 16 0 01-9-2.78c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5.31-31.06 25.22-56.33 55.53-56.33 20.4 0 35 10.63 44.1 20.41a6 6 0 008.72 0c9.11-9.78 23.7-20.41 44.1-20.41 30.31 0 55.22 25.27 55.53 56.33.28 27.1-9.31 52.13-29.3 76.5-9.38 11.44-26.4 29.73-65.7 56.41A16 16 0 01256 360z" fill="currentColor"/>
                        </svg>
                        {article?.likes}
                    </span>
                    <span className="inline-flex items-center leading-none text-sm px-2 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 512 512">
                            <path d="M80 152v256a40.12 40.12 0 0040 40h272a40.12 40.12 0 0040-40V152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                            <rect x="48" y="64" width="416" height="80" rx="28" ry="28" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/>
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M320 304l-64 64-64-64M256 345.89V224"/>
                        </svg>
                        {article?.stocks}
                    </span>
                    <span className="inline-flex items-center leading-none text-sm px-2 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 512 512">
                            <path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                            <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
                        </svg>
                        {article?.pv}
                    </span>
                    </div>
                </div>
            </div>
        </a>
    )
}