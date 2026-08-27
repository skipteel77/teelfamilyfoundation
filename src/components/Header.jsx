import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import HashLink from './HashLink';

const nav = [
  ['Our Focus', '#focus'],
  ['Grants', '#grants'],
  ['Impact', '#impact'],
  ['Contact', '#contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={close} aria-label="Teel Family Foundation home">
        <img src="/assets/teel-family-logo.png" alt="Teel Family Foundation" />
      </Link>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={26}/> : <Menu size={26}/>} 
      </button>
      <nav className={open ? 'nav open' : 'nav'}>
        <Link to="/mission" onClick={close}>Our Mission</Link>
        {nav.map(([label, hash]) => <HashLink key={label} hash={hash} onClick={close}>{label}</HashLink>)}
        <HashLink className="button button-green nav-cta" hash="#partner" onClick={close}>Get Involved</HashLink>
      </nav>
    </header>
  );
}
