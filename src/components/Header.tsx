import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// import { FaArrowRight } from "react-icons/fa";
function Header() {
  return (
    <header className="header">
      <Link to={"/"} className="logo">
        <FaChevronLeft />
        Emerson
        <FaChevronRight />
      </Link>
      <div>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/about"}>Sobre Mim</Link>
      </div>
    </header>
  );
}

export default Header;
