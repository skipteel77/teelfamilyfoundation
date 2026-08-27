import { Link } from 'react-router-dom';

// Every hash target is a section of the home page, so these links always resolve
// through the root path; ScrollToTop moves to the section once the route lands.
export default function HashLink({ hash, children, ...rest }) {
  return <Link to={`/${hash}`} {...rest}>{children}</Link>;
}
