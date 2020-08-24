import React from "react";
import "./Card.css"

function Card(props) {
    return (
        <div>
            <ul className="list-inline">
                <li>
                    <img id="weather-dash" className="img-fluid" src="/WeatherDash.png" alt="palm-trees" />
                    <div className="media-body">
                        <h3 id="signage" className="mt-0 mb-1">Weather Dashboard</h3>
                        <p id="menu"> Weather dashboard lets you view the weather for any city you want to search, want to know how the
                        weather is at moms house, or in your home town, maybe you plan on traveliing and don't want to forget to pack
                        a
                        jacket or forget your flip flops, the app uses the Open Weather API, and jQuery to function
    </p>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://nekocarreradesigns.github.io/weather-dashboard/">Whew it's a scorcher!</a></button>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://github.com/NekoCarreraDesigns/weather-dashboard">Check Out The Code!</a></button>
                    </div>
                </li>

            </ul>
        </div>

    )
}

export default Card;