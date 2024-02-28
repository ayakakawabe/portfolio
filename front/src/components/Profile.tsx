import React from "react";

const Profile:React.FC=()=>{
    const name:string="Ayaka Kawabe";
    const github_name:string="ayakakawabe";
    const qiita_name:string="ayakaintheclouds";
    const x_name:string="ak_intheclouds";

    return(
        <section id="profile">
            <div className="container px-5 py-10 mx-auto flex flex-col bg-white">
                <div className="lg:w-4/6 mx-auto">
                    <div className="flex flex-col sm:flex-row my-2">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center">
                                <img src="./icon/home_icon.svg" className=" w-20 h-20 rounded-full border-2 border-purple-200" />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{name}</h2>
                                <div className="w-12 h-1 bg-purple-400 rounded mt-2 mb-6"></div>
                                <ul className="flex w-4/5 justify-between sm:w-auto sm:flex-col sm:text-left">
                                    <li className="my-1">
                                        <a href={`https://github.com/${github_name}`} className="flex  items-center hover:text-gray-900">
                                                <img src="./icon/github_icon.svg" className="h-5 mr-1 inline"/>
                                                <span>Github</span>
                                        </a>
                                    </li>
                                    <li className="my-1">
                                        <a href={`https://qiita.com/${qiita_name}`} className="flex  items-center hover:text-gray-900">
                                                <img src="./icon/qiita_icon.png" className="h-5 mr-1 inline"/>
                                                <span>Qiita</span>
                                        </a>
                                    </li>
                                    <li className="my-1">
                                        <a href={`https://twitter.com/${x_name}`} className="flex  items-center hover:text-gray-900">
                                                <img src="./icon/x_icon.svg" className="h-4 w-5 mr-1 inline"/>
                                                <span>X(Twitter)</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left flex flex-col justify-center">
                            <div>
                                <p className="leading-relaxed text-lg my-2 before:content-['🌏'] before:mr-2">From Kyoto, Japan.</p>
                                <p className="leading-relaxed text-lg my-2 before:content-['💻'] before:mr-2" >Studying Programming & Data Science at Doshisha University.</p>
                                <p className="leading-relaxed text-lg my-2 before:content-['🎓'] before:mr-2">Conducting research on social robot and avatar at a lab.</p>
                                <p className="leading-relaxed text-lg my-2 before:content-['📖'] before:mr-2">Currently learning Linux & English.</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    )
};
export default Profile;