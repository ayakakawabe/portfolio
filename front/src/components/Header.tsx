import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header:React.FC= ()=>{
    return (
        <header>
            <AnchorLink href="#profile">profile</AnchorLink>
            <AnchorLink href="#skillset">skill set</AnchorLink>
            <AnchorLink href="#certification">certifications</AnchorLink>
            <AnchorLink href="#activity">activities</AnchorLink>
            <AnchorLink href="#github">github</AnchorLink>
            <AnchorLink href="#qiita">giita</AnchorLink>
        </header>
    )
}

export default Header;