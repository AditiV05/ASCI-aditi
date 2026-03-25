import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // NEW: Track dropdown state for "Committees"
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    // Also close the dropdown if open
    setDropdownOpen(false);
  };

  // Toggle the "Committees" dropdown
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeMobileMenu();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // Reset scroll and close menu when route changes
    window.scrollTo(0, 0);
    closeMobileMenu();
  }, [location]);

  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      <nav className="nav-container">
        <NavLink to="/" className="logo">
          ASCI-2025
        </NavLink>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div
            className={`icon-container ${isMobileMenuOpen ? "move-left" : ""}`}
          >
            <span
              className={`menu-icon ${
                isMobileMenuOpen ? "cross-icon" : "hamburger-icon"
              }`}
            />
          </div>
        </button>

        {/* Semi-transparent overlay when mobile menu is open */}
        {isMobileMenuOpen && (
          <div className="menu-overlay" onClick={closeMobileMenu} />
        )}

        {/* Nav Links */}
        <ul
          className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <li>
            <NavLink to="/" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/authors" onClick={closeMobileMenu}>
              Author
            </NavLink>
          </li>
          <li>
            <NavLink to="/speakers" onClick={closeMobileMenu}>
              Speakers
            </NavLink>
          </li>
          <li>
            <NavLink to="/workshop" onClick={closeMobileMenu}>
              Workshop
            </NavLink>
          </li>

          {/* Committees Dropdown */}
          <li className="dropdown">
            <span
              className="dropdown-title"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
            >
              Committees
            </span>
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/techCommittees" onClick={closeMobileMenu}>
                  Meet Our Tech Committee
                </NavLink>
              </li>
              <li>
                <NavLink to="/committees" onClick={closeMobileMenu}>
                  Meet Our Committee
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/sponsorships" onClick={closeMobileMenu}>
              Sponsorships
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
