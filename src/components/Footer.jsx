import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer">


                <div className="social-link">

                    <a href="#" className="link-1"><i className="fa-brands fa-instagram fa-2x" style={{ color: "white" }} ></i></a>
                    <a href="#" className="link-2"><i className="fa-brands fa-tiktok fa-2x" style={{ color: "white" }}></i></a>
                    <a href="#" className="link-3"><i className="fa-brands fa-facebook-square fa-2x" style={{ color: "white" }}></i></a>
                    <a href="#" className="link-4"><i className="fa-brands fa-spotify fa-2x" style={{ color: "white" }}></i></a>
                    <a href="#" className="link-5"><i className="fa-brands fa-youtube-square fa-2x" style={{ color: "white" }}></i></a>
                </div>
                <div className="content-footer">

                    <ul className="row1" >
                        <li><p className="p1">Contact Us</p></li>
                        <li><p className="p2" >About Us</p></li>
                        <li><p className="p3">Terms of service</p></li>
                        <li><p className="p4">privacy policy</p></li>
                    </ul>

                </div>
                <div className="copyright">(c) 2022 Applause Creators, Inc. All rights reserved.</div>


            </footer>
        </div>
    )
}

export default Footer