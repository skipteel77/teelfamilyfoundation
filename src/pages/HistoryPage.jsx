import { BookOpen, Drama, GraduationCap, Sparkles, Users } from "lucide-react";

const milestones = [
  {
    label: "Before 2005",
    text: "Karen’s work as a teacher and professor shapes a lasting commitment to educational opportunity.",
  },
  {
    label: "2005",
    text: "Woody and Karen Teel establish the Teel Family Foundation.",
  },
  {
    label: "Early Giving",
    text: "The foundation begins supporting education and performing arts organizations, including the Oregon Shakespeare Festival.",
  },
  {
    label: "Today",
    text: "A new generation of board members brings fresh ideas while continuing to fulfill the foundation’s mission.",
  },
];

const organizations = [
  "Oregon Shakespeare Festival",
  "Different Strokes! Performing Arts Collective",
  "NYC Master Chorale",
];

export default function HistoryPage() {
  return (
    <>
      <section className="history-hero">
        <div className="history-hero-copy">
          <p className="eyebrow orange">Our History</p>
          <h1>A shared belief in a more inclusive and vibrant future</h1>
          <div className="color-rule">
            <span />
            <span />
            <span />
            <span />
          </div>
          <p className="history-lead">
            The Teel Family Foundation was established in 2005 by Woody and
            Karen Teel, bringing together two longstanding commitments:
            expanding educational opportunity and supporting a performing arts
            community that reflects a broader range of voices, experiences, and
            perspectives.
          </p>
          <p className="history-intro-copy">
            From classrooms in the San Francisco Bay Area to stages across the
            country, those experiences continue to shape the foundation’s work
            today.
          </p>
        </div>
        <div className="history-hero-art" aria-hidden="true">
          <img src="/assets/hero-scarves.jpg" alt="" />
        </div>
      </section>

      <section
        className="history-timeline"
        aria-label="Foundation history timeline"
      >
        <div className="history-timeline-inner">
          {milestones.map((item) => (
            <article className="history-milestone" key={item.label}>
              <span className="history-milestone-dot" aria-hidden="true" />
              <h2>{item.label}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="history-story section">
        <div className="history-story-grid">
          <div className="history-story-aside history-aside-green">
            <div className="history-icon">
              <GraduationCap size={34} strokeWidth={1.5} />
            </div>
            <p className="eyebrow">Educational Opportunity</p>
            <h2>Early experiences that shaped a commitment to equity</h2>
          </div>
          <div className="history-story-copy">
            <p>
              Before the foundation was created, Karen taught at a middle school
              in the Richmond Unified School District and later became a
              professor at Holy Names University in Oakland, California, where
              she taught graduate education courses and prepared future
              educators to work in urban schools.
            </p>
            <p>
              Her interest in educational equity had begun during graduate study
              at the University of California, Berkeley, where she learned about
              persistent achievement gaps in American education. As a teacher,
              professor, and observer in Bay Area schools, she saw talented and
              enthusiastic students whose opportunities were often shaped by
              differences in resources, expectations, and approaches to
              learning.
            </p>
            <p>
              Those experiences strengthened Karen’s belief that students should
              be challenged, encouraged, and given meaningful opportunities to
              reach their potential regardless of the community in which they
              attend school. She and Woody began discussing a family foundation
              that could help support schools, students, and organizations
              working to expand those opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="history-story history-story-alt section">
        <div className="history-story-grid">
          <div className="history-story-aside history-aside-orange">
            <div className="history-icon">
              <Drama size={34} strokeWidth={1.5} />
            </div>
            <p className="eyebrow orange">The Performing Arts</p>
            <h2>The power of theatre and music to create change</h2>
          </div>
          <div className="history-story-copy">
            <p>
              At the same time, the arts had become an important part of Woody
              and Karen’s lives. They were actively involved with the California
              Symphony in the San Francisco Bay Area and had begun regularly
              attending the Oregon Shakespeare Festival.
            </p>
            <p>
              They were particularly impressed by the Festival’s artistic
              quality and by its efforts to broaden representation among its
              playwrights, actors, leadership, and audiences. That experience
              helped shape another central belief of the foundation: the
              performing arts can do more than entertain. They can expose
              audiences to different experiences, challenge assumptions, create
              opportunities for artists, and help communities see themselves—and
              one another—in new ways.
            </p>
            <blockquote className="history-pullquote">
              “To me, OSF is a beacon. It presents a vision of a different kind
              of society—one that is much more integrated and provides more
              equal opportunities for artists.”
              <cite>— Karen Teel</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="history-impact section">
        <div className="history-impact-heading">
          <p className="eyebrow purple">A Lasting Impact</p>
          <h2>Supporting organizations that reach and inspire many</h2>
          <p>
            From the beginning, the foundation has sought to make its resources
            reach beyond any one individual by supporting nonprofit
            organizations whose work can influence entire communities.
          </p>
        </div>

        <div className="history-impact-grid">
          <article className="history-impact-card history-impact-card-green">
            <Users size={30} strokeWidth={1.5} />
            <h3>Multiply impact</h3>
            <p>
              The foundation prioritizes nonprofit organizations whose work can
              reach many people and create opportunities across communities.
            </p>
          </article>
          <article className="history-impact-card history-impact-card-purple">
            <Sparkles size={30} strokeWidth={1.5} />
            <h3>Broaden representation</h3>
            <p>
              In the arts, the foundation is drawn to organizations that create
              opportunities for artists and playwrights from historically
              underrepresented backgrounds.
            </p>
          </article>
          <article className="history-impact-card history-impact-card-orange">
            <BookOpen size={30} strokeWidth={1.5} />
            <h3>Encourage new perspectives</h3>
            <p>
              The foundation hopes the people reached by its grantees will be
              inspired, challenged, or encouraged to see their communities in
              new ways.
            </p>
          </article>
        </div>

        <div className="history-orgs">
          <span>Organizations that have reflected this mission include:</span>
          {organizations.map((organization) => (
            <strong key={organization}>{organization}</strong>
          ))}
        </div>
      </section>

      <section className="history-belief">
        <div className="history-belief-inner">
          <p className="eyebrow">Every Contribution Matters</p>
          <blockquote>
            “We realized that what we were doing was not going to make a huge
            impact on the entire country, but we believed that every little bit
            helps.”
            <cite>— Karen Teel</cite>
          </blockquote>
        </div>
      </section>

      <section className="history-future section">
        <div className="history-future-inner">
          <p className="eyebrow orange">Looking Ahead</p>
          <h2>Continuing the work together</h2>
          <p>
            More than two decades after its founding, the Teel Family Foundation
            is entering a new chapter. A younger generation of family members
            now serves on the board, bringing new experiences, perspectives, and
            ideas about the organizations and communities the foundation might
            support.
          </p>
          <p>
            The organizations may change and the foundation’s reach may evolve,
            but its underlying purpose remains consistent: to support the
            performing arts, expand opportunity, strengthen education, and
            invest in organizations capable of making a meaningful difference in
            the communities they serve.
          </p>
        </div>
      </section>
    </>
  );
}
