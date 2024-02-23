import React from "react";

const Profile:React.FC=()=>{
    return(
        <section id="profile" className="text-gray-600 body-font">
            <div className="container px-5 py-14 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="flex flex-col items-center text-center justify-center">
                                <img src="/home_icon.svg" />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Ayaka</h2>
                                <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                                <ul>
                                    <li className="mb-1">
                                        <a href="https://github.com/ayakakawabe">
                                            <div className="flex items-center">
                                                <img src="/github_icon.svg" className="h-5 mr-1"/>
                                                <p>Github</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="https://qiita.com/ayakaintheclouds">
                                            <div className="flex items-center">
                                                <img src="/qiita_icon.png" className="h-5 mr-1"/>
                                                <p>Qiita</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="https://twitter.com/ak_intheclouds">
                                            <div className="flex items-center">
                                                <img src="/x_icon.svg" className="h-4 w-5 mr-1"/>
                                                <p>X(Twitter)</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left flex flex-col justify-center">
                            <div>
                            <p className="leading-relaxed text-lg my-2 before:content-['🌏'] before:mr-2">From Kyoto, Japan.</p>
                            <p className="leading-relaxed text-lg my-2 before:content-['💻'] before:mr-2" >Studying Programming & Data Science at Doshisha University.</p>
                            <p className="leading-relaxed text-lg my-2 before:content-['🎓'] before:mr-2">Conducting research on robot and avatar at a lab.</p>
                            <p className="leading-relaxed text-lg my-2 before:content-['📖'] before:mr-2">Currently learning about Linux and English.</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    )
};
export default Profile;