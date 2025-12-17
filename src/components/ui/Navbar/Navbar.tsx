import React from "react";
import styles from "./Navbar.module.css";
import { Container, Nav, Navbar as NavBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link, Links } from "react-router";

interface INavbarProps {
  parentStyle?: React.CSSProperties;
}

const Navbar: React.FC<INavbarProps> = ({ parentStyle }) => {
  return (
    <div className={styles.Navbar} style={parentStyle} data-testid="Navbar">
      <NavBar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/" className="navbar-brand">🏠</Link>
          <Nav className="me-auto">
            <Link to="/thumbnail" className="nav-link">Thumbnail</Link>
            <Link to="/editor" className="nav-link">Nouveau</Link>
            <Link to="/editor/1" className="nav-link">Modif du 1</Link>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
