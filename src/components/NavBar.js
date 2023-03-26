import { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const [activeLink, setActiveSLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", onScroll);
    return window.removeEventListener("scroll", onScroll);
  });

  const onUpdateActiveLink = (value) => {
    setActiveSLink(value);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="" alt="Logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                (activeLink = "home" ? "active-navbar-link" : "navbar-link")
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#Skills"
              className={
                (activeLink = "skills" ? "active-navbar-link" : "navbar-link")
              }
              onClick={() => onUpdateActiveLink("skils")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#Projects"
              className={
                (activeLink = "projects" ? "active-navbar-link" : "navbar-link")
              }
              onClick={() => onUpdateActiveLink("projects")}
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
                <a href="https://">
                  <img src="" alt="LinkedeIn" />
                </a>
                <a href="https://">
                  <img src="" alt="GitHub" />
                </a>
                <a href="https://">
                  <img src="" alt="Instageam" />
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

// From ChatGPT

// import { Navbar, Container } from "react-bootstrap";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">
//           <img src="" alt="Logo.png" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//           <span className="navbar-toggler-icon sr-only"></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="#home">Home</Nav.Link>
//             <Nav.Link as={Link} to="#Skills">Skills</Nav.Link>
//             <Nav.Link as={Link} to="#Projects">Projects</Nav.Link>
//             <Nav.Link className="nav-link-social" href="https://">
//               <img src="" alt="LinkedeIn" />
//             </Nav.Link>
//             <Nav.Link className="nav-link-social" href="https://">
//               <img src="" alt="GitHub" />
//             </Nav.Link>
//             <Nav.Link className="nav-link-social" href="https://">
//               <img src="" alt="Instagram" />
//             </Nav.Link>
//             <Nav.Link as={Link} to="#connect">
//               <span>Lets Connect</span>
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;
