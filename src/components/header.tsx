import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";
function Header() {
  return (
    <header className="header">
      <Link to={"/"} className="logo">
        Emerson
      </Link>
      <div>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </header>
  );
}

export default Header;
