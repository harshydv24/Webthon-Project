import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <img src="/images/logo.png" alt="K72 Logo" className="logo" />

        <button
          className="menuButton"
          aria-label="Menu"
          onClick={() => setMenuOpen(true)}
        >
          <span className="menuLine"></span>
          <span className="menuLine"></span>
        </button>
      </nav>

      {/* Full-screen menu overlay */}
      <div className={`menuOverlay ${menuOpen ? "menuOpen" : ""}`}>
        <div className="menuHeader">
          <div className="menuHeaderLeft">
            <img src="/images/logo.png" alt="K72 Logo" className="logo" />
            <div className="menuLang">
              <span className="menuLangActive">EN</span>
              <span className="menuLangDivider">/</span>
              <span>FR</span>
            </div>
          </div>
          <button
            className="menuCloseButton"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <line x1="10" y1="10" x2="46" y2="46" stroke="#fff" strokeWidth="1.5" />
              <line x1="46" y1="10" x2="10" y2="46" stroke="#fff" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        <nav className="menuNav">
          <a href="#work" className="menuNavItem" onClick={() => setMenuOpen(false)}>
            <span className="menuNavLabel">WORK</span>
            <span className="menuNavHover">
              <span className="menuNavMarquee">
                <span>SEE EVERYTHING&nbsp;—&nbsp;SEE EVERYTHING&nbsp;—&nbsp;SEE EVERYTHING&nbsp;—&nbsp;SEE EVERYTHING&nbsp;—&nbsp;</span>
                <span>SEE EVERYTHING&nbsp;—&nbsp;SEE EVERYTHING&nbsp;—&nbsp;SEE EVERYTHING&nbsp;—&nbsp;SEE EVERYTHING&nbsp;—&nbsp;</span>
              </span>
            </span>
          </a>
          <a href="#agency" className="menuNavItem" onClick={() => setMenuOpen(false)}>
            <span className="menuNavLabel">AGENCY</span>
            <span className="menuNavHover">
              <span className="menuNavMarquee">
                <span>KNOW US&nbsp;—&nbsp;KNOW US&nbsp;—&nbsp;KNOW US&nbsp;—&nbsp;KNOW US&nbsp;—&nbsp;KNOW US&nbsp;—&nbsp;KNOW US&nbsp;—&nbsp;</span>
                <span>KNOW US&nbsp;—&nbsp;KNOW US&nbsp;—&nbsp;KNOW US&nbsp;—&nbsp;KNOW US&nbsp;—&nbsp;KNOW US&nbsp;—&nbsp;KNOW US&nbsp;—&nbsp;</span>
              </span>
            </span>
          </a>
          <a href="#contact" className="menuNavItem" onClick={() => setMenuOpen(false)}>
            <span className="menuNavLabel">CONTACT</span>
            <span className="menuNavHover">
              <span className="menuNavMarquee">
                <span>SEND US A FAX&nbsp;—&nbsp;SEND US A FAX&nbsp;—&nbsp;SEND US A FAX&nbsp;—&nbsp;SEND US A FAX&nbsp;—&nbsp;</span>
                <span>SEND US A FAX&nbsp;—&nbsp;SEND US A FAX&nbsp;—&nbsp;SEND US A FAX&nbsp;—&nbsp;SEND US A FAX&nbsp;—&nbsp;</span>
              </span>
            </span>
          </a>
          <a href="#blog" className="menuNavItem" onClick={() => setMenuOpen(false)}>
            <span className="menuNavLabel">BLOG</span>
            <span className="menuNavHover">
              <span className="menuNavMarquee">
                <span>READ ARTICLES&nbsp;—&nbsp;READ ARTICLES&nbsp;—&nbsp;READ ARTICLES&nbsp;—&nbsp;READ ARTICLES&nbsp;—&nbsp;</span>
                <span>READ ARTICLES&nbsp;—&nbsp;READ ARTICLES&nbsp;—&nbsp;READ ARTICLES&nbsp;—&nbsp;READ ARTICLES&nbsp;—&nbsp;</span>
              </span>
            </span>
          </a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;