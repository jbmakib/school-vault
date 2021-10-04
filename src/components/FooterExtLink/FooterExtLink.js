import React from "react";

// our footer has external links. so that i create a component and took props and showed it to UI
const FooterExtLink = ({ link, children }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="d-block text-decoration-none text-white"
        >
            &#8599; {children}
        </a>
    );
};

export default FooterExtLink;
