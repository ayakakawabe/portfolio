import React from "react";
import { normalSkilliconURL } from "../Controller";

const SkillSet:React.FC=()=>{
    return(
        <section id="skillset">
            <div className="container px-5 py-8 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto flex  flex-col items-center">
                    <h1 className="text-2xl font-medium title-font text-gray-900">Skill Set</h1>
                    <div className="flex justify-center">
                        <div className="w-16 h-1 rounded-full bg-purple-400 inline-flex mt-1 mb-8"></div>
                    </div>
                    <div>
                        <a href="https://skillicons.dev">
                            <img src={`${normalSkilliconURL}&theme=light&perline=8`}/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default SkillSet;