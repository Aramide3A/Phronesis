import { Link } from "react-router-dom";

type LegacyServiceCardProps = {
  title: string;
  image: string;
  href: string;
  text: string;
  columnClass?: string;
};

export default function LegacyServiceCard({
  title,
  image,
  href,
  text,
  columnClass = "col-lg-6 col-md-6 col-sm-12",
}: LegacyServiceCardProps) {
  return (
    <div className={`service-block ${columnClass}`}>
      <div className="inner-box">
        <div className="image-box">
          <figure className="image">
            <Link to={href}>
              <img src={image} alt="" />
            </Link>
          </figure>
        </div>
        <div className="lower-content">
          <span className="icon flaticon-robot-arm" />
          <h3>
            <Link to={href}>{title}</Link>
          </h3>
          <div className="text">{text}</div>
          <div className="link-box">
            <Link to={href}>Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
