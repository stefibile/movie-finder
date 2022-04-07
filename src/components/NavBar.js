import { Link } from "react-router-dom";
import "../styles/navBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movie">Movies</Link>
        </li>
        <li>
          <Link to="/tv">Tv</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
