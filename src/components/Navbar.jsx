import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="left">
        <h2>Vaishnavi</h2>
      </div>

      <div className="right">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar