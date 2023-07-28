import React from "react";
import food_pic from "../images/food-pic.jpg"
import { Link } from "react-router-dom";


const Landing = () => {
    return(
        <div>
            <section className="d-flex flex-row align-items-center">
            <div className="col-lg-7">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                <Link to="/Booking"><button aria-label="On Click" className="btn btn-warning">Reserve Table</button></Link>
            </div>
            <div className="col-lg-5 ">
                <img className="img-fluid landing-pic" src={food_pic} alt="food"/>
            </div>
            </section>
        </div>
    )
}

export default Landing;