import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "../data/site";

type ServiceCardProps = {
  service: Service;
  columnClass?: string;
};

export default function ServiceCard({ service, columnClass = "col-lg-6 col-md-6 col-sm-12" }: ServiceCardProps) {
  return (
    <article className={`service-block ${columnClass}`}>
      <div className="inner-box">
        <div className="image-box">
          <figure className="image">
            <Link to={service.path} aria-label={service.title}>
              <img src={service.image} alt="" />
            </Link>
          </figure>
        </div>
        <div className="lower-content">
          <span className="icon flaticon-robot-arm" />
          <h3>
            <Link to={service.path}>{service.title}</Link>
          </h3>
          <div className="text">{service.summary}</div>
          <div className="link-box">
            <Link to={service.path}>
              Read More <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
