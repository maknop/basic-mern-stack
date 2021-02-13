function NavBar() {
    return (
        <div>
            <div className="nav-bar">
                <button className="nav-buttons" href="#intro">Intro</button>
                <button className="nav-buttons" href="#blog">Blog</button>
                <button className="nav-buttons" href="#resume">Resume</button>
                <button className="nav-disabled" href="#projects">Projects</button>
            </div>
        </div>
    );
}

export default NavBar;