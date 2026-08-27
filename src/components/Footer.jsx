import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import HashLink from './HashLink';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-brand">
        <img src="/assets/teel-family-logo.png" alt="Teel Family Foundation"/>
        <p>Supporting the performing arts and K–12 education to build stronger communities and brighter futures.</p>
      </div>
      <div><h4>Explore</h4><Link to="/mission">Our Mission</Link><HashLink hash="#focus">Our Focus</HashLink><HashLink hash="#grants">Grants</HashLink><HashLink hash="#impact">Impact</HashLink></div>
      <div><h4>Get Involved</h4><HashLink hash="#partner">Apply for a Grant</HashLink><HashLink hash="#partner">Ways to Give</HashLink><HashLink hash="#partner">Partner With Us</HashLink><HashLink hash="#contact">Contact</HashLink></div>
      <div className="contact">
        <h4>Contact</h4>
        <a href="mailto:info@teelfamilyfoundation.org"><Mail size={16}/> info@teelfamilyfoundation.org</a>
        <a href="tel:+15551234567"><Phone size={16}/> (555) 123-4567</a>
        <span><MapPin size={16}/> New York, NY</span>
      </div>
      <div className="footer-bottom"><span>© 2026 Teel Family Foundation. All rights reserved.</span><span><a href="#">Privacy Policy</a> · <a href="#">Terms of Use</a></span></div>
    </footer>
  );
}
