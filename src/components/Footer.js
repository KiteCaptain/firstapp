import React from "react"
import logo1 from "../images/logo1.png"

const Footer = () => {
    return(
        <footer className="mt-5">
            <section className="d-flex flex-row">
            <div className="col-lg-3">
                <img className="footer-image" src={logo1} alt="logo"/>
            </div >
            <div className="col-lg-9 d-flex flex-row">
                <div className="col-lg-3">
                    <h3>Navigation</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                
                <div className="col-lg-3">
                        <h3>Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                        <h3>Social Media Links</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                    </div>
            </div>
            </section>
            <section>
                <p>&copy;2023 Little Lemon</p>
            </section>
        </footer>
    )
}

export default Footer;