import { Link } from "react-router-dom";
import { company, navLinks } from "../data/site";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row">
            <div className="footer-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
              <div className="footer-widget about-widget">
                <div className="footer-logo">
                  <figure className="image">
                    <Link to="/">
                      <img src="/images/footer-logo.png" alt="Phronesis West Africa LTD" />
                    </Link>
                  </figure>
                </div>
                <div className="widget-content">
                  <div className="text">
                    At Phronesis West Africa LTD it is our intention to provide our respected
                    clients with exactly what they need. This way we contribute to the success of
                    their facility and project uptime with high productivity.
                  </div>
                  <ul className="social-icon-colored">
                    <li className="google">
                      <a href="#" aria-label="Google Plus">
                        <i className="fab fa-google-plus-g" />
                      </a>
                    </li>
                    <li className="facebook">
                      <a href="#" aria-label="Facebook">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#" aria-label="Twitter">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget links-widget">
                <h2 className="widget-title">Quick links</h2>
                <div className="widget-content">
                  <ul className="list">
                    {navLinks.slice(1).map((link) => (
                      <li key={link.href}>
                        <Link to={link.href}>{link.label}</Link>
                      </li>
                    ))}
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget contact-widget">
                <h2 className="widget-title">Contact Info</h2>
                <div className="widget-content">
                  <div className="text">Get in touch with us today</div>
                  <ul className="contact-list">
                    <li>{company.footerAddress}</li>
                    <li>
                      <a href={`tel:${company.phonePrimary.replace(/\s/g, "")}`}>
                        {company.phonePrimary} (Primary)
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${company.phoneSecondary.replace(/\s/g, "")}`}>
                        {company.phoneSecondary} (International)
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${company.email}`}>{company.email}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="bottom-column col-md-6 col-sm-12">
              <div className="copyright-text">
                <Link to="/">{company.name}</Link> © 2026 All Right Reserved
              </div>
            </div>
            <div className="bottom-column col-md-6 col-sm-12">
              <ul className="footer-links clearfix">
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
