import React from "react";

const FooterExtLink = ({ link, children }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="d-block text-decoration-none text-white"
        >
            {children}
        </a>
    );
};

export default FooterExtLink;
