function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">K72</div>

      <button className="menuButton" aria-label="Menu">
        <span className="menuLine"></span>
        <span className="menuLine"></span>
      </button>
    </nav>
  );
}

export default Navbar;