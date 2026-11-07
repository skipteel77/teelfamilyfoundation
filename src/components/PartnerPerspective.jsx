export default function PartnerPerspective() {
  return (
    <section className="partner-perspective section">
      <div className="partner-perspective__inner">
        <h2 className="eyebrow partner-perspective__header">
          A Partner’s Perspective
        </h2>

        <p className="partner-perspective__body">
          The organizations we support are doing extraordinary work in their
          communities. Their words remind us why access, representation, and
          opportunity in the arts and education matter so deeply.
        </p>

        <div className="partner-perspective__quote">
          <span className="partner-perspective__mark">“</span>

          <blockquote>
            Your belief in the transformative power of the arts and your
            dedication to fostering diversity and inclusivity inspire us to work
            tirelessly toward our goals.
          </blockquote>

          <div className="partner-perspective__person">
            <div className="partner-perspective__attribution">
              <div className="partner-perspective__line" />

              <div>
                <strong>Stephanie Hickling Beckman</strong>
                <span>Managing Artistic Director</span>
                <span>Different Strokes! Performing Arts Collective</span>
              </div>
            </div>

            <img
              className="partner-perspective__logo"
              src="/assets/dspac.png"
              alt="Different Strokes! Performing Arts Collective"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
