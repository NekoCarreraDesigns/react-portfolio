import React from "react";
import "./Body.css";

function Body() {
    return (
        <div className="sea-and-sand" >
            <p className="intro" >Hello My name is Nicholas C. Maas, I am a graduate of the University of Denver Coding Boot Camp. I am a Full Stack Web Developer, I love to design, and enjoy the front-end because of my art background. However I do enjoy the Back end as well</p>
            <img className="sunset-surf" alt="sunset-surfer" src="https://images.unsplash.com/photo-1475615787683-f1a161b002b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
            <img className="aerial" alt="aerial-san-diego" src="https://images.unsplash.com/photo-1544632795-2e45e65a8ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
            <img className="nicholas" alt="handsome-gentleman" src="/Nicholas1.jpeg"></img>
        </div>

    )
}

export default Body;