import React from "react";
import { Link } from 'react-router-dom';

function Footer(props){
    return(
        <div className="footer text-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/announcements">Announcements</Link></li>
                            <li><Link to="/posts">Posts</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address className="text-light">
                            Nila Gardens, Pampady, Thiruvilwamala<br/>
                            Thrissur, Kerala, India<br/>
                            PIN: 680 588 <br/>
                        <i className="fa fa-phone fa-lg"></i>: +9199 1234 5678<br />
		                <i className="fa fa-fax fa-lg"></i>: +9199 8765 4321<br />
		                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:mca@ncerc">
                         mca@ncerc.in</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://www.twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2022 TEAM MCA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;