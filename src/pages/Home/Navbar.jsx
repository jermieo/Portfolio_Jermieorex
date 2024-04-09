import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img
          className="navbar--img"
          src="..\src\assets\logoipsum-247.svg"
          alt="Logoipsum"
        />
      </div>
      <div className="navbar--items">
        <ul>
          <li>
            <Link
              activeClass="navbar--active-content"
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active-content"
              to="MySkills"
              className="navbar--content"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active-content"
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active-content"
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
        </ul>
      </div>
      <div style={{ marginRight: "20px" }}>
        <Link
          activeClass="navbar--active-content"
          to="Contact"
          className="btn btn-outline-primary"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
