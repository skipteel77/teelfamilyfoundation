import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-brand">
        <img src="/assets/teel-family-logo.png" alt="Teel Family Foundation"/>
        <p>Supporting the performing arts and K–12 education to build stronger communities and brighter futures.</p>
      </div>
      <div><h4>Explore</h4><a href="#about">About Us</a><a href="#focus">Our Focus</a><a href="#grants">Grants</a><a href="#impact">Impact</a><a href="#news">News</a></div>
      <div><h4>Get Involved</h4><a href="#partner">Apply for a Grant</a><a href="#partner">Ways to Give</a><a href="#partner">Partner With Us</a><a href="#contact">Contact</a></div>
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
