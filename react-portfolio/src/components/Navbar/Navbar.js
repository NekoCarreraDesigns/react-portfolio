import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg nav">
            <i className=" icon fas fa-laptop-code"><a className="navbar-brand" href="#">Neko Carrera Designs</a></i>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">Compass
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse col-12" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;