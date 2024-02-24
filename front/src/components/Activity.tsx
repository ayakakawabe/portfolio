import React from "react";

const Activity:React.FC=()=>{
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
                        <tr className="ext-neutral-800">
                            <td className="px-5 py-4 text-sm whitespace-nowrap">2023</td>
                            <td className="px-5 py-4 text-sm whitespace-nowrap">10</td>
                            <td className="px-5 py-4 text-sm whitespace-nowrap">技育CAMPマンスリーハッカソン vol.10</td>
                            <td className="px-5 py-4 text-sm whitespace-nowrap">
                                <ul className="list-disc">
                                    <li>企業賞</li>
                                    <li>旅行場所の提案 & アバターと一緒に旅行ができるWebアプリケーション</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="ext-neutral-800 bg-neutral-50">
                            <td className="px-5 py-4 text-sm whitespace-nowrap">2023</td>
                            <td className="px-5 py-4 text-sm whitespace-nowrap">12</td>
                            <td className="px-5 py-4 text-sm whitespace-nowrap">Mercoin Hackathon 2023</td>
                            <td className="px-5 py-4 text-sm whitespace-nowrap">
                                <ul className="list-disc">
                                    <li>審査員特別賞</li>
                                    <li>夢をかなえたい若者の『熱意』とその夢を応援したい人の『気持ち』を繋ぐ「ユメルカリ」</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="ext-neutral-800">
                            <td className="px-5 py-4 text-sm whitespace-nowrap">2023</td>
                            <td className="px-5 py-4 text-sm whitespace-nowrap">12</td>
                            <td className="px-5 py-4 text-sm whitespace-nowrap">技育CAMPアドバンス</td>
                            <td className="px-5 py-4 text-sm whitespace-nowrap">
                                <ul className="list-disc">
                                    <li>技育CAMPマンスリーハッカソン（vol.10）の継続開発</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            </div>
        </section>
    )
};
export default Activity;