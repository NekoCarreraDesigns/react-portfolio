import React from "react";
import "./Footer.css";

function Footer(props) {
    return (
        <footer className="text-center fixed-bottom footer">
            <div className="card-footer">
                <small className="text-red mx-auto">
                    &copy; 2020 • All Rights Reserved
          </small>
            </div>
        </footer>
    )
}

export default Footer;  