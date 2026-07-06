import { FormEvent, useState } from "react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { company, offices } from "../data/site";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [formState, setFormState] = useState(initialFormState);
  const [status, setStatus] = useState("");

  function toTelHref(phone: string) {
    return `tel:${phone.replace(/[^\d+]/g, "")}`;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(formState.subject || "Website enquiry");
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\n\n${formState.message}`,
    );

    setStatus("Opening your email app with the completed message.");
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We are happy to discuss your project and answer any question."
        image="/images/background/13.jpg"
      />

      <section className="contact-info-section">
        <div className="auto-container">
          <SectionHeading
            eyebrow="Contact Info"
            title="We are Happy to Discuss Your Project and Answer any Question"
          />

          {offices.map((office) => (
            <div className="contact-info-inline" key={office.title}>
              <div className="contact-info-inline-item">
                <h6>{office.title}:</h6>
                <div className="text">{office.address}</div>
              </div>

              <div className="contact-info-inline-item">
                <h6>Phone:</h6>
                <div className="text">
                  {office.phones.map((phone, index) => (
                    <span key={phone}>
                      {index > 0 ? " | " : ""}
                      <a href={toTelHref(phone)}>{phone}</a>
                    </span>
                  ))}
                </div>
              </div>

              <div className="contact-info-inline-item">
                <h6>Email:</h6>
                <div className="text">
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-page-section">
        <div className="auto-container">
          <div className="outer-box">
            <SectionHeading eyebrow="Send Message" title="Drop Us A Message" />
            <div className="contact-form dark">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                    />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input
                      required
                      type="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                    />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input
                      required
                      type="tel"
                      placeholder="Phone"
                      value={formState.phone}
                      onChange={(event) => setFormState({ ...formState, phone: event.target.value })}
                    />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <input
                      required
                      type="text"
                      placeholder="Subject"
                      value={formState.subject}
                      onChange={(event) =>
                        setFormState({ ...formState, subject: event.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <textarea
                      required
                      placeholder="Your Message"
                      value={formState.message}
                      onChange={(event) =>
                        setFormState({ ...formState, message: event.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <button className="theme-btn btn-style-one" type="submit">
                      Send Message
                    </button>
                  </div>
                  {status ? <div className="form-status col-lg-12">{status}</div> : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="map-outer">
          <iframe
            title="Phronesis West Africa head office map"
            src="https://www.google.com/maps?q=Plot%202050%20Green%20Estate%2C%20Amuwo%20Odofin&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
