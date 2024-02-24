import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header:React.FC= ()=>{
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="./" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="/home_icon.svg" className="w-12 h-12 text-white rounded-full"></img>
                    <span className="ml-3 text-xl">ayaka</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <AnchorLink href="#profile" className="mr-5 hover:text-gray-900">Profile</AnchorLink>
                    <AnchorLink href="#activity" className="mr-5 hover:text-gray-900">Activities</AnchorLink>
                    <AnchorLink href="#github" className="mr-5 hover:text-gray-900">Github</AnchorLink>
                    <AnchorLink href="#qiita" className="mr-5 hover:text-gray-900">Qiita</AnchorLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;