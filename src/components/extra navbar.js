import { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
// import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "Home" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#Skills"
              className={
                activeLink === "Skills" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#Projects"
              className={
                activeLink === "Projects" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Projects")}
            >
              Projects
            </Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <span className="navbar-text">
              <div className="social-icon">
                <a href={navIcon1}>
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href={navIcon2}>
                  <img src={navIcon2} alt="GitHub" />
                </a>
                <a href={navIcon3}>
                  <img src={navIcon3} alt="Instagram" />
                </a>
              </div>
            </span>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Lets Connect</span>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
