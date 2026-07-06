import { Link } from "react-router-dom";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;
};

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="page-title" style={{ backgroundImage: `url(${image})` }}>
      <div className="auto-container">
        <div className="inner-container clearfix">
          <div className="title-box">
            <h1>{title}</h1>
            {subtitle ? <span className="title">{subtitle}</span> : null}
          </div>
          <ul className="bread-crumb clearfix">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
