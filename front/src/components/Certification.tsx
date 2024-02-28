import React from "react";

const Certification:React.FC=()=>{
    interface CertificationType{
        year:number,
        month:number,
        name:string
    }
    const certifications:Array<CertificationType>=[
        {year:2023,month:4,name:"ITパスポート"},
        {year:2023,month:8,name:"基本情報技術者試験"},
        {year:2023,month:12,name:"応用情報技術者試験"}
    ]

    return(
        <section id="certification">
            <div className="container px-5 py-10 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto w-full flex  flex-col items-center">
            <h1 className="text-2xl font-medium title-font text-gray-900">Certifications</h1>
            <div className="flex justify-center">
                <div className="w-16 h-1 rounded-full bg-purple-400 inline-flex mt-1 mb-8"></div>
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
                        {certifications.map((certificationData,index)=>{
                            const evenRowBgColor:string="bg-neutral-50";
                            return (
                                <tr key={index} className={index%2!=0?evenRowBgColor:undefined}>
                                    <td className="px-5 py-4 text-sm whitespace-nowrap">{certificationData.year}</td>
                                    <td className="px-5 py-4 text-sm whitespace-nowrap">{certificationData.month}</td>
                                    <td className="px-5 py-4 text-sm whitespace-nowrap">{certificationData.name}</td>
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
export default Certification;