import { Link, NavLink } from "react-router-dom";
import { company, services } from "../data/site";

export default function ContactPanel() {
  return (
    <aside className="sidebar services-sidebar">
      <div className="sidebar-widget categories">
        <div className="sidebar-title">
          <h3>Our Services</h3>
        </div>
        <ul className="category-list">
          {services.map((service) => (
            <li key={service.slug}>
              <NavLink to={service.path}>{service.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-widget brochure">
        <div className="brochure-box">
          <h6>
            Need Help<span>?</span>
          </h6>
          <p>Get in touch with us today.</p>
          <ul className="info-box">
            <li>
              <span className="icon fa fa-envelope" />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <span className="icon fa fa-phone" />
              <a href={`tel:${company.phonePrimary.replace(/\s/g, "")}`}>
                {company.phonePrimary} - Primary
              </a>
            </li>
            <li>
              <span className="icon fa fa-phone" />
              <a href={`tel:${company.phoneSecondary.replace(/\s/g, "")}`}>
                {company.phoneSecondary} - International
              </a>
            </li>
          </ul>
          <Link className="theme-btn btn-style-one" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </aside>
  );
}
