import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const nav = [
  ['About', '#about'],
  ['Our Focus', '#focus'],
  ['Grants', '#grants'],
  ['Impact', '#impact'],
  ['News', '#news'],
  ['Contact', '#contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Teel Family Foundation home">
        <img src="/assets/teel-family-logo.png" alt="Teel Family Foundation" />
      </a>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={26}/> : <Menu size={26}/>} 
      </button>
      <nav className={open ? 'nav open' : 'nav'}>
        {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="button button-green nav-cta" href="#partner" onClick={() => setOpen(false)}>Get Involved</a>
      </nav>
    </header>
  );
}
