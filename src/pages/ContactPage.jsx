export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-container contact-hero__inner">
          <div className="contact-hero__content">
            <div className="contact-eyebrow">
              <span>Contact Us</span>
              <span className="contact-eyebrow__line" />
            </div>

            <h1>We’d love to hear from you.</h1>

            <p className="contact-hero__lead">
              Whether you would like to learn more about the Teel Family
              Foundation or get in touch about our work, please use the form
              below to send us a message.
            </p>
          </div>

          <div className="contact-hero__accent" aria-hidden="true">
            <span className="contact-shape contact-shape--green" />
            <span className="contact-shape contact-shape--orange" />
            <span className="contact-shape contact-shape--teal" />
            <span className="contact-shape contact-shape--gold" />
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container contact-main__grid">
          <aside className="contact-info">
            <div className="contact-eyebrow">
              <span>Get in Touch</span>
              <span className="contact-eyebrow__line" />
            </div>

            <h2>Start a conversation</h2>

            <p>
              We welcome inquiries about the foundation, our areas of focus, and
              the organizations we support.
            </p>

            <div className="contact-info__email">
              <span className="contact-info__label">Email</span>

              {/*
                  Replace this with your foundation's actual info address
                  if it is different.
                */}
              <a href="mailto:info@teelfamilyfoundation.org">
                info@teelfamilyfoundation.org
              </a>
            </div>

            <p className="contact-info__note">
              Please note that submitting an inquiry does not constitute a grant
              application or guarantee consideration for funding.
            </p>
          </aside>

          <div className="contact-form-card">
            <div className="contact-form-card__header">
              <h2>Send us a message</h2>
              <p>
                Complete the form and a member of the foundation will receive
                your message.
              </p>
            </div>

            <div className="google-form-wrapper">
              <iframe
                title="Contact the Teel Family Foundation"
                src="https://docs.google.com/forms/d/e/1FAIpQLSeW5yQTAd7TOwhKKNS0eJj2E32Ou50nq5GS0mSJzCOMYqROSQ/viewform?embedded=true"
                className="google-form"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-footer-message">
        <div className="contact-container contact-footer-message__inner">
          <div>
            <span className="contact-footer-message__kicker">
              Teel Family Foundation
            </span>

            <h2>
              Supporting opportunity, creativity,
              <br />
              and stronger communities.
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}
