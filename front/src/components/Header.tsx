import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header:React.FC= ()=>{
    return (
        <header className="sticky top-0 bg-white shadow">
            <div className="container mx-auto flex flex-wrap p-2 md:p-5 flex-col md:flex-row items-center">
                <a href="./" className="flex title-font font-medium items-center text-gray-800 mb-1 md:mb-0">
                    <img src="./icon/home_icon.svg" className="w-12 h-12 rounded-full border-2 border-purple-200"></img>
                    <span className="ml-3 text-xl">Home</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                    <AnchorLink href="#profile" offset={()=>70} className="mx-2 hover:text-gray-900 bg-gray-100 border-0 px-3 focus:outline-none hover:bg-purple-100 rounded text-base mt-2 md:mt-0">Profile</AnchorLink>
                    <AnchorLink href="#activity" offset={()=>100} className="mx-2 hover:text-gray-900 bg-gray-100 border-0 px-3 focus:outline-none hover:bg-purple-100 rounded text-base mt-2 md:mt-0">Activities</AnchorLink>
                    <AnchorLink href="#github" offset={()=>100} className="mx-2 hover:text-gray-900 bg-gray-100 border-0 px-3 focus:outline-none hover:bg-purple-100 rounded text-base mt-2 md:mt-0">Github</AnchorLink>
                    <AnchorLink href="#qiita" offset={()=>100} className="mx-2 hover:text-gray-900 bg-gray-100 border-0 px-3 focus:outline-none hover:bg-purple-100 rounded text-base mt-2 md:mt-0">Qiita</AnchorLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;