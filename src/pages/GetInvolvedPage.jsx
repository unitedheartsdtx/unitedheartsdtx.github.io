import {ArrowRight, Camera, HandHeart, MapPin, PackageCheck, Store} from 'lucide-react';
import {Reveal} from '../components/Reveal.jsx';
import {SiteLink} from '../router.jsx';

const involvementPaths = [
  {
    title: 'Find a bakery lead',
    body: 'Start with one donut shop, bakery, cafe, or restaurant that may have safe surplus after closing.',
    icon: Store,
  },
  {
    title: 'Choose who to thank',
    body: 'Pick a fire station or frontliner team and confirm when a short, respectful visit makes sense.',
    icon: MapPin,
  },
  {
    title: 'Run the pickup',
    body: 'Keep the operation simple: agreed time, clean packaging, direct route, and food handled carefully.',
    icon: PackageCheck,
  },
  {
    title: 'Deliver with meaning',
    body: 'Bring the food with a handwritten note so the visit feels personal, not random.',
    icon: HandHeart,
  },
  {
    title: 'Document the story',
    body: 'Capture the visit through photos, reels, and captions that help the next partner understand the mission.',
    icon: Camera,
  },
];

export function GetInvolvedPage() {
  return (
    <>
      <section className="simple-page-hero simple-page-hero--red">
        <div className="section-shell">
          <Reveal>
            <h1>Join the operation.</h1>
            <p>
              United Hearts grows when one person finds a lead, plans the route, and helps turn surplus into a visit
              that people remember.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="involvement-section">
        <div className="section-shell">
          <Reveal className="center-heading">
            <h2>How to help conduct a drive.</h2>
            <p>Each operation should feel organized before it feels big. Start small, make it real, then repeat it.</p>
          </Reveal>
        </div>
        <div className="section-shell involvement-grid involvement-grid--steps">
          {involvementPaths.map((path, index) => {
            const Icon = path.icon;
            return (
              <Reveal className="involvement-card" key={path.title} delay={index * 0.07}>
                <Icon aria-hidden="true" />
                <h2>{path.title}</h2>
                <p>{path.body}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="involvement-photo-section">
        <div className="section-shell involvement-photo-grid">
          <Reveal className="involvement-photo">
            <img
              src="/images/firefighter-donut-moment.jpg"
              alt="One Prosper firefighter playfully feeding another firefighter a donut"
              loading="lazy"
            />
          </Reveal>
          <Reveal className="involvement-photo-copy">
            <h2>The work stays personal.</h2>
            <p>
              It starts with someone willing to make the call, carry the boxes, and walk into a station with a real
              thank-you. Every operation is local, direct, and built around the people involved.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="home-cta-strip home-cta-strip--navy">
        <Reveal className="home-cta-inner">
          <h2>Have one lead, one idea, or one person we should thank?</h2>
          <SiteLink className="button button--paper" href="/contact">
            Send it to us <ArrowRight aria-hidden="true" />
          </SiteLink>
        </Reveal>
      </section>
    </>
  );
}
