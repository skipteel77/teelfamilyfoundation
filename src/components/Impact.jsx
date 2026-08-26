import { HandHeart, Building2, Users, Sparkles } from 'lucide-react';
import { grants, totalGranted } from '../data/grants';

const formatMoney = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

export default function Impact() {
  const metrics = [
    { icon: HandHeart, value: formatMoney(totalGranted), label: 'Granted so far this fiscal year', tone: 'metric-green' },
    { icon: Building2, value: grants.length, label: 'Organizations supported', tone: 'metric-purple' },
    { icon: Users, value: '100%', label: 'Of grants support our mission priorities', tone: 'metric-orange' },
    { icon: Sparkles, value: null, label: 'Making a difference together', tone: 'metric-blue' },
  ];
  return (
    <section className="impact" id="impact">
      <div className="impact-label">
        <h2>Our<br/>Impact</h2>
        <span/>
        <p>Together, we create more opportunity and inspire lasting change.</p>
      </div>
      <div className="impact-grid">
        {metrics.map(({icon: Icon, value, label, tone}) => (
          <div className="metric" key={label}>
            <div className={`metric-icon ${tone}`}><Icon size={26} strokeWidth={1.7}/></div>
            {value && <strong>{value}</strong>}
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
