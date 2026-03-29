import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      {/* Logo */}
      <div className="left">
        <h2>Vaishnavi</h2>
      </div>

      {/* Hamburger */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Links */}
      <div className={open ? "right active" : "right"}>
        <a href="#hero" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        <a href="/Vaishnavi_Resume.pdf" target="_blank">Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;