import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <nav className="hamburger-menu">
        <div className="logo">PrepPal</div>
        <div onClick={handleClick} className="hamburger">
          =
        </div>
      </nav>
      {menuOpen && (
        <section className="pages">
          <div>
            <span onClick={handleClick}>X</span>

            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </section>
      )}

      <nav className="navbar">
        <div>PrepPal</div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
