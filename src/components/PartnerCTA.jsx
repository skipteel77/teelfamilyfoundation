import HashLink from './HashLink';

export default function PartnerCTA() {
  return (
    <section className="partner" id="partner">
      <img src="/assets/partner-hands.png" alt="Four interlocking hands in a circle in the Teel Family Foundation logo colors"/>
      <h2>Together, we can create more opportunity and inspire lasting change.</h2>
      <HashLink className="button button-green" hash="#contact">Partner With Us</HashLink>
    </section>
  );
}
