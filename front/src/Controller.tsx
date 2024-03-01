// User name controller
export type titleName=string;
export const titleName:titleName="Ayaka Kawabe";

// Skill icon controller
export type normalSkilliconURL=string;
export const normalSkilliconURL:normalSkilliconURL="https://skillicons.dev/icons?i=python,r,javascript,typescript,c,react,vue,tailwind,fastapi,flask,selenium,docker,postgres,github,githubactions";

// Certifications controller
interface CertificationType{
    year:number,
    month:number,
    name:string
}
export type certificationsData=Array<CertificationType>
export const certificationsData:certificationsData=[
    {year:2023,month:4,name:"ITパスポート"},
    {year:2023,month:8,name:"基本情報技術者試験"},
    {year:2023,month:12,name:"応用情報技術者試験"}
]

// Activities controller
// Hackathon controller
interface HackathonType{
    year:number,
    month:number,
    title:string,
    remarks:Array<string>
}
export type hackathonsData=Array<HackathonType>
export const hackathonsData:hackathonsData=[
    {year:2023,month:10,title:"技育CAMPマンスリーハッカソン vol.10",remarks:["企業賞","旅行場所の提案 & アバターと一緒に旅行ができるWebアプリケーション"]},
    {year:2023,month:12,title:"Mercoin Hackathon 2023",remarks:["審査員特別賞","夢をかなえたい若者の『熱意』とその夢を応援したい人の『気持ち』を繋ぐ「ユメルカリ」"]},
    {year:2023,month:12,title:"技育CAMPアドバンス",remarks:["技育CAMPマンスリーハッカソン（vol.10）の継続開発"]}
]

// Github controller
export type githubName=string;
export const githubName:githubName="ayakakawabe";
export type githubRepoList=Array<string>;
export const githubRepoList:githubRepoList=["TaRO","chatgpt-line-bot-for-experiment","portfolio"];

// Qiita controller
export type qiitaName=string;
export const qiitaName:qiitaName="ayakaintheclouds";

// X controller
export type xName=string;
export const xName:xName="ak_intheclouds";


