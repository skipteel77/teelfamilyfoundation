import { ArrowRight } from 'lucide-react';
import { grants, totalGranted } from '../data/grants';

const money = (n) => new Intl.NumberFormat('en-US', { style:'currency', currency:'USD', minimumFractionDigits:2 }).format(n);

export default function Grants() {
  return (
    <section className="grants section" id="grants">
      <div className="grants-intro">
        <p className="eyebrow orange">Recent Grants</p>
        <h2>Investing in Organizations That Create Lasting Impact</h2>
        <p>We are proud to partner with incredible organizations doing meaningful work in the arts and in education.</p>
        <a className="text-link" href="#grants">View All Grants <ArrowRight size={16}/></a>
      </div>
      <div className="grant-table-wrap">
        <table className="grant-table">
          <thead><tr><th>Grantee</th><th>Focus Area</th></tr></thead>
          <tbody>
            {grants.map(grant => (
              <tr key={grant.grantee}>
                <td>
                  <a className="grantee-link" href={grant.url} target="_blank" rel="noopener noreferrer" title={`Visit ${grant.displayName}`}>
                    <img className="grantee-logo" src={grant.logo} alt={grant.displayName}/>
                  </a>
                </td>
                <td className="grant-focus">{grant.focus.map(line => <span key={line}>{line}</span>)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">
                <span className="grant-total">Total granted so far this fiscal year <b>{money(totalGranted)}</b></span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
