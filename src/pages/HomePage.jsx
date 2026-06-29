import {useEffect, useRef} from 'react';
import {motion, useReducedMotion, useScroll, useTransform} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import {Reveal} from '../components/Reveal.jsx';
import {SiteLink} from '../router.jsx';

function FoodWord({photoOStyle, textStyle}) {
  return (
    <span className="food-word">
      <motion.span className="food-letter" style={textStyle}>f</motion.span>
      <motion.span className="food-o food-o--photo food-o--hero" style={photoOStyle}>
        <img src="/images/prosper-group.png" alt="" />
      </motion.span>
      <motion.span className="food-o food-o--donut" aria-hidden="true" style={textStyle} />
      <motion.span className="food-letter" style={textStyle}>d</motion.span>
    </span>
  );
}

export function HomePage() {
  const heroRef = useRef(null);
  const pointerFrame = useRef(null);
  const reduceMotion = useReducedMotion();
  const {scrollYProgress} = useScroll({target: heroRef, offset: ['start start', 'end end']});
  const sentenceOpacity = useTransform(scrollYProgress, [0, 0.22, 0.44], [1, 0.74, 0]);
  const questionY = useTransform(scrollYProgress, [0, 0.58], [0, -22]);
  const heroOScale = useTransform(scrollYProgress, [0, 0.2, 0.78], [1, 1.65, 54]);
  const heroOShadow = useTransform(
    scrollYProgress,
    [0, 0.34, 0.58],
    [
      'inset 0 0 0 3px rgba(255, 255, 255, 1), 0 26px 80px rgba(0, 0, 0, 0.28)',
      'inset 0 0 0 2px rgba(255, 255, 255, 0.62), 0 34px 110px rgba(0, 0, 0, 0.24)',
      'inset 0 0 0 0 rgba(255, 255, 255, 0), 0 0 0 rgba(0, 0, 0, 0)',
    ],
  );
  const handleHeroPointerMove = (event) => {
    if (reduceMotion) return;
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    if (pointerFrame.current) {
      cancelAnimationFrame(pointerFrame.current);
    }

    pointerFrame.current = requestAnimationFrame(() => {
      target.style.setProperty('--mx', x.toFixed(3));
      target.style.setProperty('--my', y.toFixed(3));
    });
  };
  const handleHeroPointerLeave = (event) => {
    if (pointerFrame.current) {
      cancelAnimationFrame(pointerFrame.current);
    }

    event.currentTarget.style.setProperty('--mx', 0);
    event.currentTarget.style.setProperty('--my', 0);
  };

  useEffect(() => () => {
    if (pointerFrame.current) {
      cancelAnimationFrame(pointerFrame.current);
    }
  }, []);

  return (
    <>
      <section
        className="uh-scroll-story"
        ref={heroRef}
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={handleHeroPointerLeave}
      >
        <div className="uh-story-sticky">
          <div className="hero-pattern-field" aria-hidden="true" />

          <motion.div
            className="hero-question"
            style={{y: reduceMotion ? 0 : questionY}}
          >
            <h1>
              <motion.span className="hero-copy" style={{opacity: sentenceOpacity}}>
                38% of U.S.{' '}
              </motion.span>
              <br className="hero-mobile-break" />
              <FoodWord
                photoOStyle={{scale: reduceMotion ? 1 : heroOScale, boxShadow: heroOShadow}}
                textStyle={{opacity: sentenceOpacity}}
              />
              <br className="hero-mobile-break" />
              <motion.span className="hero-copy" style={{opacity: sentenceOpacity}}>
                {' '}goes unused.
                <br className="hero-mobile-break" /> What if it had
                <br className="hero-mobile-break" /> somewhere better
                <br className="hero-mobile-break" /> to go?
              </motion.span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="closing-transition-section">
        <div className="section-shell">
          <Reveal className="closing-copy-card">
            <h2>At closing, good food has two options.</h2>
            <p>
              One path is the trash. The other is a United Hearts operation: we pick it up, deliver it with care, and
              share the visit so the appreciation keeps moving. It costs bakeries $0 and gives good food a better
              ending.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="home-feature-section">
        <div className="section-shell">
          <Reveal className="home-feature-card">
            <div className="home-feature-copy">
              <h2>Surplus still matters.</h2>
              <p>
                A box of leftover pastries can become a reason to walk into a fire station and recognize the people
                most of us only think about during emergencies.
              </p>
              <SiteLink className="button button--navy" href="/about">
                See what we do <ArrowRight aria-hidden="true" />
              </SiteLink>
            </div>
            <div className="home-feature-image">
              <img
                src="/images/operation-donuts.jpg"
                alt="A box of surplus donuts ready for a United Hearts operation"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-analytics-section">
        <div className="section-shell analytics-grid">
          <Reveal className="analytics-heading">
            <h2>Surplus can become service.</h2>
            <p>
              When good food is redirected, waste becomes a visit people remember.
            </p>
          </Reveal>
          <div className="analytics-cards">
            {[
              ['38%', 'of U.S. food goes unsold or uneaten.'],
              ['160B lb', 'of food is wasted each year in the U.S.'],
              ['733M', 'people faced hunger globally in 2023.'],
            ].map(([value, label], index) => (
              <Reveal className="analytics-card" key={label} delay={index * 0.08}>
                <strong>{value}</strong>
                <span>{label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
