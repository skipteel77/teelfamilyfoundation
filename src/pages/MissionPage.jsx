import { Drama, GraduationCap } from 'lucide-react';
import PartnerCTA from '../components/PartnerCTA';

const objectives = [
  {
    icon: Drama,
    className: 'focus-green',
    text: 'Supporting arts organizations with initiatives aimed at diversifying the playwrights and programs selected, the leadership, the staff, the artists, and the audiences; and',
  },
  {
    icon: GraduationCap,
    className: 'focus-purple',
    text: 'Contributing to the improvement of education in urban schools and reducing the achievement gap affecting African-American and Hispanic students.',
  },
];

export default function MissionPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow purple">Our Mission</p>
        <h1>Supporting Opportunity. Advancing Potential.</h1>
        <div className="color-rule"><span/><span/><span/><span/></div>
        <p className="mission-statement">
          The mission of the Teel Family Foundation is to support the performing arts and K–12
          education, with a particular emphasis on increasing opportunities in both areas for
          historically disadvantaged groups.
        </p>
      </section>
      <section className="section objectives">
        <h2>Important charitable objectives of the foundation include:</h2>
        <div className="objective-grid">
          {objectives.map(({ icon: Icon, className, text }) => (
            <article className={`objective ${className}`} key={text}>
              <div className="icon-badge"><Icon size={26} strokeWidth={1.6}/></div>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <PartnerCTA />
    </>
  );
}
