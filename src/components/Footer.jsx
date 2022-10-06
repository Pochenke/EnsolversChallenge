import React from "react";

const Footer = () => {
    const anio = new Date().getFullYear();
    return (
        <footer>
            <p>Lucas Aquino {anio}</p>
        </footer>
    )
}

export default Footer;