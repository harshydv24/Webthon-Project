import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>K72</div>

      <div className="navLinks">
        <a href="/work" className="navLink">WORK</a>
        <a href="/agency" className="navLink">AGENCY</a>
      </div>

      <button className="menuButton" aria-label="Menu">
        <span className="menuLine"></span>
        <span className="menuLine"></span>
      </button>
    </nav>
  );
}

export default Navbar;