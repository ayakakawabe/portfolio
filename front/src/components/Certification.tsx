import React from "react";

const Certification:React.FC=()=>{
    return(
        <section id="certification">
            <div className="container px-5 py-8 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto w-full flex  flex-col items-center">
            <h1 className="font-medium title-font text-gray-900 text-lg">Certifications</h1>
            <div className="flex justify-center">
                <div className="w-16 h-1 rounded-full bg-purple-400 inline-flex mt-1 mb-6"></div>
            </div>
            <div className="overflow-scroll border rounded-lg w-full">
                <table className="min-w-full divide-y divide-neutral-200">
                    <thead className="bg-neutral-100">
                        <tr className="text-neutral-500">
                            <th className="px-5 py-3 text-xs font-medium text-left uppercase">year</th>
                            <th className="px-5 py-3 text-xs font-medium text-left uppercase">month</th>
                            <th className="px-5 py-3 text-xs font-medium text-left uppercase">name</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                        <tr className="ext-neutral-800">
                            <td className="px-5 py-4 text-sm whitespace-nowrap">2023</td>
                            <td className="px-5 py-4 text-sm whitespace-nowrap">4</td>
                            <td className="px-5 py-4 text-sm whitespace-nowrap">ITパスポート</td>
                        </tr>
                        <tr className="ext-neutral-800 bg-neutral-50">
                            <td className="px-5 py-4 text-sm whitespace-nowrap">2023</td>
                            <td className="px-5 py-4 text-sm whitespace-nowrap">8</td>
                            <td className="px-5 py-4 text-sm whitespace-nowrap">基本情報技術者試験</td>
                        </tr>
                        <tr className="ext-neutral-800">
                            <td className="px-5 py-4 text-sm whitespace-nowrap">2023</td>
                            <td className="px-5 py-4 text-sm whitespace-nowrap">12</td>
                            <td className="px-5 py-4 text-sm whitespace-nowrap">応用情報技術者試験</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            </div>
        </section>
    )
};
export default Certification;