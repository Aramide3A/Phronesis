import { useState } from "react";
import { NavLink } from "react-router-dom";
import { company, navLinks, services } from "../data/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const closeMenu = () => {
    setIsOpen(false);
    setIsSearchOpen(false);
  };

  const searchResults = services.filter((service) =>
    `${service.title} ${service.summary}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <header className="main-header header-style-three">
      <div className="header-top">
        <div className="auto-container">
          <div className="clearfix">
            <div className="top-left">
              <ul className="social-links">
                <li>
                  <a href="#" aria-label="Facebook">
                    <span className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter">
                    <span className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Google Plus">
                    <span className="fab fa-google-plus-g" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="top-right">
              <button
                className="search-box-btn react-search-button"
                type="button"
                aria-label="Search"
                aria-expanded={isSearchOpen}
                onClick={() => setIsSearchOpen((value) => !value)}
              >
                <span className="flaticon-search-2" />
              </button>
              <ul className="info-list">
                <li>
                  <i className="flaticon-clock-circular-outline" /> {company.hours}
                </li>
                <li>
                  <i className="flaticon-envelope-of-white-paper" />
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header-upper">
        <div className="inner-container">
          <div className="auto-container clearfix">
            <div className="logo-outer">
              <div className="logo">
                <NavLink to="/" onClick={closeMenu}>
                  <img src="/images/logo-2.png" alt="Phronesis West Africa LTD" />
                </NavLink>
              </div>
            </div>

            <div className="nav-outer clearfix">
              <button
                className="mobile-nav-toggler react-mobile-toggler"
                type="button"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                onClick={() => setIsOpen((value) => !value)}
              >
                <span className={isOpen ? "icon flaticon-cancel" : "icon flaticon-menu-1"} />
              </button>

              <nav className="main-menu navbar-expand-md navbar-light" aria-label="Primary navigation">
                <div className={`navbar-collapse clearfix ${isOpen ? "show" : ""}`}>
                  <ul className="navigation clearfix">
                    {navLinks.map((link) =>
                      link.href === "/services" ? (
                        <li className="dropdown" key={link.href}>
                          <NavLink to={link.href} onClick={closeMenu}>
                            {link.label}
                          </NavLink>
                          <ul>
                            {services.map((service) => (
                              <li key={service.slug}>
                                <NavLink to={service.path} onClick={closeMenu}>
                                  {service.title}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={link.href}>
                          <NavLink to={link.href} onClick={closeMenu}>
                            {link.label}
                          </NavLink>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </nav>

              <div className="outer-box clearfix" />
            </div>
          </div>
        </div>
      </div>

      {isSearchOpen ? (
        <div className="legacy-search-panel">
          <div className="auto-container">
            <div className="search-panel">
              <div className="form-container">
                <div className="form-group">
                  <input
                    autoFocus
                    type="search"
                    placeholder="Search services"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <button className="search-btn" type="button" aria-label="Search">
                    <span className="fa fa-search" />
                  </button>
                </div>
              </div>
              <div className="legacy-search-results">
                {(query ? searchResults : services).map((service) => (
                  <NavLink key={service.slug} to={service.path} onClick={closeMenu}>
                    {service.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
