import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <a href="#home" className="logo">Sul<span>man.</span></a>
            <div 
                className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
                id="mobile-menu"
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`} id="nav-list">
                <li><a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a></li>
                <li><a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                <li><a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</a></li>
                {/* <li><a href="#portfolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>Portfolio</a></li> */}
                <li><a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
            <a href="/Sulman_CV.pdf" download className="down-btn">Download CV</a>
        </nav>
    );
}

export default Navbar