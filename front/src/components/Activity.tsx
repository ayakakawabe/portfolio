import React from "react";
import { hackathonsData } from "../Controller";

const Activities:React.FC=()=>{
    return(
        <section id="activity">
            <div className="container px-5 py-10 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto w-full flex  flex-col items-center">
            <h1 className="text-2xl font-medium title-font text-gray-900">Activities</h1>
            <div className="flex justify-center">
                <div className="w-16 h-1 rounded-full bg-purple-400 inline-flex mt-1 mb-8"></div>
            </div>
            <h2 className="font-medium title-font mb-4 text-gray-900 text-lg">Hackathon</h2>
            <div className="overflow-scroll border rounded-lg w-full">
                <table className="min-w-full divide-y divide-neutral-200">
                    <thead className="bg-neutral-100">
                        <tr className="text-neutral-500">
                            <th className="px-5 py-3 text-xs font-medium text-left uppercase">year</th>
                            <th className="px-5 py-3 text-xs font-medium text-left uppercase">month</th>
                            <th className="px-5 py-3 text-xs font-medium text-left uppercase">title</th>
                            <th className="px-5 py-3 text-xs font-medium text-left uppercase">remarks</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                        {hackathonsData.map((hackathonData,index)=>{
                            const evenRowBgColor:string="bg-neutral-50";
                            return (
                                <tr key={index} className={index%2!=0?evenRowBgColor:undefined}>
                                    <td className="px-5 py-4 text-sm whitespace-nowrap">{hackathonData.year}</td>
                                    <td className="px-5 py-4 text-sm whitespace-nowrap">{hackathonData.month}</td>
                                    <td className="px-5 py-4 text-sm whitespace-nowrap">{hackathonData.title}</td>
                                    <td className="px-5 py-4 text-sm whitespace-nowrap">
                                        <ul className="list-disc">
                                            {hackathonData.remarks.map((remarksData,index)=>{
                                                return (
                                                    <li key={index}>{remarksData}</li>
                                                )
                                            })}
                                        </ul>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            </div>
            </div>
        </section>
    )
};
export default Activities;