import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <div className="nav-bar">
                <Router>
                    <Link to="/intro"><button className="nav-buttons" href="#intro">Intro</button></Link>
                    <Link to="/blog"><button className="nav-buttons" href="#blog">Blog</button></Link>
                    <Link to="/resume"><button className="nav-buttons" href="#resume">Resume</button></Link>
                    <Link to="/projects"><button className="nav-disabled" href="#projects">Projects</button></Link>
                </Router>
            </div>
        </div>
    );
}

export default NavBar;