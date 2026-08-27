import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // 'instant' opts out of the page's smooth scrolling, which would otherwise
    // animate across the whole document when arriving from another route.
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}
