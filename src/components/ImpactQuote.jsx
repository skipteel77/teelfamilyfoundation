export default function ImpactQuote() {
  return (
    <section className="impact-feature">
      <div className="impact-feature__inner">
        <div className="impact-feature__content">
          <div className="section-kicker">
            <span>Impact in Their Words</span>
            <span className="section-kicker__line" />
          </div>

          <blockquote className="impact-feature__quote">
            <span className="quote-mark">“</span>
            <p>
              Because of your support, thousands of students—many from
              communities historically underrepresented in the arts—experienced
              theatre that reflects their lives and expands their sense of
              possibility.
            </p>
          </blockquote>

          <div className="impact-feature__byline">
            <div className="impact-feature__attribution">
              <div className="impact-feature__accent" />

              <div>
                <strong>Jennifer Ryen</strong>
                <span>Chief Philanthropy Officer</span>
                <span>Oregon Shakespeare Festival</span>
              </div>
            </div>

            <img
              className="impact-feature__logo"
              src="/assets/osf-og-Photoroom.png"
              alt="Oregon Shakespeare Festival"
            />
          </div>
        </div>

        <div className="impact-feature__image">
          {/*
              Replace this with whichever image you want to use.
              If you already have an OSF-related image in /public/assets,
              update the filename here.
            */}
          <img src="/assets/OSF.webp" alt="Oregon Shakespeare Festival" />
        </div>
      </div>
    </section>
  );
}
