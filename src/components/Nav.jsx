import React from 'react'

function Nav() {
    return (
        <div className="nav">
            <div className="logo">
                <img src="./clap.png" alt="" width="50px" /><h4>applause</h4>
            </div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Help</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sign In</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sign Up With Zoom</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav