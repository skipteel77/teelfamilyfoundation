import { Drama, GraduationCap, Users } from 'lucide-react';

const focusItems = [
  {
    icon: Drama,
    title: 'The Performing Arts',
    className: 'focus-green',
    text: 'We support organizations that cultivate creativity, inspire expression, and bring communities together through music, theater, dance, and the visual arts.',
  },
  {
    icon: GraduationCap,
    title: 'K–12 Education',
    className: 'focus-purple',
    text: 'We invest in programs that expand access to quality education and help students reach their full academic and personal potential.',
  },
  {
    icon: Users,
    title: 'Stronger Communities',
    className: 'focus-orange',
    text: 'By focusing on historically disadvantaged communities, we aim to reduce opportunity gaps and help build a more equitable future.',
  },
];

export default function Mission() {
  return (
    <section className="mission section" id="about">
      <div className="mission-heading">
        <p className="eyebrow purple">Our Mission</p>
        <h2>Supporting Opportunity. Advancing Potential.</h2>
      </div>
      <div className="focus-grid" id="focus">
        {focusItems.map(({icon: Icon, title, className, text}) => (
          <article className={`focus-card ${className}`} key={title}>
            <div className="icon-badge"><Icon size={30} strokeWidth={1.6}/></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
