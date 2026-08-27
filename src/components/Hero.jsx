import { Link } from 'react-router-dom';
import HashLink from './HashLink';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <h1>Investing in the <span className="green">Arts.</span><br/>Strengthening <span className="orange">Communities.</span></h1>
        <div className="color-rule" aria-hidden="true"><span/><span/><span/><span/></div>
        <p className="hero-body">The Teel Family Foundation supports the performing arts and K–12 education, expanding opportunity for historically disadvantaged students and communities.</p>
        <div className="hero-actions">
          <Link className="button button-green" to="/mission">Our Mission</Link>
          <HashLink className="button button-outline" hash="#grants">View Grants</HashLink>
        </div>
      </div>
      <div className="hero-art" aria-label="Hands lifting colorful scarves against the sky">
        <img src="/assets/hero-scarves.jpg" alt="Hands lifting colorful scarves in the colors of the Teel Family Foundation logo"/>
      </div>
    </section>
  );
}
