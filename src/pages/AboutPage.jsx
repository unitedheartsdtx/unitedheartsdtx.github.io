import {Bell, HandHeart, Megaphone, PackageCheck, Route, Store} from 'lucide-react';
import {Reveal} from '../components/Reveal.jsx';

const whatWeDo = [
  {
    title: 'Food wastage',
    body: 'We redirect safe bakery surplus before it becomes another closing-time throwaway.',
    icon: PackageCheck,
  },
  {
    title: 'Bakery outreach',
    body: 'We make the ask simple: one trial pickup, no long-term pressure, and food safety first.',
    icon: Store,
  },
  {
    title: 'Pickup logistics',
    body: 'We coordinate the time, pickup spot, and delivery route so the process stays respectful.',
    icon: Route,
  },
  {
    title: 'Frontliner recognition',
    body: 'We bring surplus baked goods to firefighters and other people who serve quietly every day.',
    icon: HandHeart,
  },
  {
    title: 'Storytelling',
    body: 'We document visits so more people understand the problem and want to help solve it.',
    icon: Megaphone,
  },
  {
    title: 'Community movement',
    body: 'We want students and supporters to repeat the model in more cities and tag the work back.',
    icon: Bell,
  },
];

export function AboutPage() {
  return (
    <>
      <section className="simple-page-hero">
        <div className="section-shell">
          <Reveal>
            <h1>United Hearts turns surplus into recognition.</h1>
            <p>
              We are building a student-led system where bakeries, frontliners, and supporters can all take part in one
              direct act of purpose.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="what-we-do-section">
        <div className="section-shell">
          <Reveal className="center-heading">
            <h2>We move food with a reason behind it.</h2>
            <p>Each piece of the project is small on its own. Together, it becomes a repeatable local model.</p>
          </Reveal>
          <div className="what-grid">
            {whatWeDo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal className="what-card" key={item.title} delay={index * 0.06}>
                  <Icon aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="vision-panel-section">
        <div className="section-shell vision-panel">
          <Reveal className="vision-panel-copy">
            <p className="vision-label">Our vision</p>
            <h2>More partners. More pickups. A bigger movement.</h2>
            <p className="vision-intro">
              The goal is to grow United Hearts across Dallas and surrounding communities with stronger funding, trusted
              local partners, and operations people actually appreciate.
            </p>
            <div className="vision-points">
              <article>
                <h3>Partnerships</h3>
                <p>
                  Build relationships with bakeries, fire stations, city leaders, and local supporters so each operation
                  has a clear pickup, destination, and purpose.
                </p>
              </article>
              <article>
                <h3>Funding</h3>
                <p>
                  Earn support for transportation, packaging, outreach, documentation, and future student-led operations
                  without making the project complicated for partners.
                </p>
              </article>
              <article>
                <h3>Recognition</h3>
                <p>
                  Grow toward city recognition, media features, and a model more North Texas communities can repeat with
                  their own bakeries and frontliner teams.
                </p>
              </article>
            </div>
          </Reveal>
          <div className="vision-images vision-images--single" aria-label="United Hearts explaining the mission">
            <img
              src="/images/mission-conversation.jpg"
              alt="United Hearts explaining its mission to firefighters at Prosper Fire Rescue"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
