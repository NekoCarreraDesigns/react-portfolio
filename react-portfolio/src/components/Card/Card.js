import React from "react";
import "./Card.css"

function Card(props) {
    return (
        <div className="card text-center justify-content-center" >
            <div className="card-body">
                <img src="..." alt="app-pic"></img>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="card-body">
                <img src="..." alt="app-pic" ></img>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="card-body">
                <img src="..." alt="app=pic"></img>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    )
}

export default Card;