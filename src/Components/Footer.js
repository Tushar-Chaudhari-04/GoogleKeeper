import React from "react";

const year=new Date().getFullYear();

function Footer(){
    return <footer>
        <p className="footer">Copyright &#169; {year}</p>
    </footer>;
}

export default Footer;