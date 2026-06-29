import {ArrowRight, Camera, PackageOpen, Truck} from 'lucide-react';
import {Reveal} from '../components/Reveal.jsx';
import {SiteLink} from '../router.jsx';

const partnerRows = [
  {
    title: 'Bakery partners',
    body: 'Offer safe surplus baked goods through a one-time or recurring pickup.',
    image: '/images/operation-pastries.jpg',
    alt: 'Boxes of safe surplus pastries prepared for pickup',
    tone: 'yellow',
  },
  {
    title: 'Frontliner partners',
    body: 'Help us coordinate respectful appreciation visits for the people on your team.',
    image: '/images/operation-frontliners.jpg',
    alt: 'United Hearts delivering boxes of surplus donuts at Prosper Fire Rescue',
    tone: 'navy',
  },
  {
    title: 'City partners',
    body: 'Help recognize the work publicly and connect the mission with more local families, stations, and businesses.',
    image: '/images/prosper-station-exterior.jpg',
    alt: 'Prosper Fire Rescue station in North Texas',
    tone: 'blue',
  },
];

const movementSteps = [
  {
    title: 'Pick up',
    body: 'We coordinate around the bakery schedule and collect safe surplus at the agreed spot.',
    icon: PackageOpen,
  },
  {
    title: 'Deliver',
    body: 'We bring the food to firefighters or frontliners with a personal thank-you note.',
    icon: Truck,
  },
  {
    title: 'Post',
    body: 'We share the visit story so the bakery, frontliners, and community can see the impact.',
    icon: Camera,
  },
];

export function PartnershipsPage() {
  return (
    <>
      <section className="simple-page-hero">
        <div className="section-shell">
          <Reveal>
            <h1>Partner with a project built to be simple.</h1>
            <p>No complicated rollout. Start with one pickup, one team, or one introduction.</p>
          </Reveal>
        </div>
      </section>

      <section className="partnership-overview-section">
        <div className="section-shell">
          <Reveal className="partnership-overview-heading">
            <h2>Different partners. One purpose.</h2>
          </Reveal>
          <div className="partner-row-list">
            {partnerRows.map((row, index) => (
              <Reveal className={`partner-row partner-row--${row.tone}`} key={row.title} delay={index * 0.07}>
                <div>
                  <h3>{row.title}</h3>
                  <p>{row.body}</p>
                  <SiteLink href="/contact">Start a conversation</SiteLink>
                </div>
                <img src={row.image} alt={row.alt} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="movement-section">
        <div className="section-shell">
          <Reveal className="center-heading">
            <h2>Pick up. Deliver. Post.</h2>
            <p>Every operation is designed to solve a small food-waste problem and create visible appreciation.</p>
          </Reveal>
          <div className="movement-grid">
            {movementSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal className="movement-card" key={step.title} delay={index * 0.08}>
                  <Icon aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="movement-cta">
            <SiteLink className="button button--navy" href="/contact">
              Build a partnership <ArrowRight aria-hidden="true" />
            </SiteLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
