import {useEffect} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {Footer} from './components/Footer.jsx';
import {Header} from './components/Header.jsx';
import {AboutPage} from './pages/AboutPage.jsx';
import {ContactPage} from './pages/ContactPage.jsx';
import {GetInvolvedPage} from './pages/GetInvolvedPage.jsx';
import {HomePage} from './pages/HomePage.jsx';
import {PartnershipsPage} from './pages/PartnershipsPage.jsx';
import {SiteLink, useRouter} from './router.jsx';

const pages = {
  '/': {component: HomePage, title: 'Home - United Hearts'},
  '/about': {component: AboutPage, title: 'About Us - United Hearts'},
  '/get-involved': {component: GetInvolvedPage, title: 'Get Involved - United Hearts'},
  '/partnerships': {component: PartnershipsPage, title: 'Partnerships - United Hearts'},
  '/contact': {component: ContactPage, title: 'Contact Us - United Hearts'},
  '/mission': {component: AboutPage, title: 'About Us - United Hearts'},
  '/partner': {component: PartnershipsPage, title: 'Partnerships - United Hearts'},
};

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <p className="section-kicker">404</p>
      <h1>This page found the wrong destination.</h1>
      <SiteLink className="button button--paper" href="/">Return home</SiteLink>
    </section>
  );
}

function App() {
  const {path} = useRouter();
  const page = pages[path];
  const Page = page?.component ?? NotFoundPage;

  useEffect(() => {
    document.title = page?.title ?? 'United Hearts';
  }, [page]);

  return (
    <div className="site-app">
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          className="page-content"
          key={path}
          initial={{opacity: 0, y: 12}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -10}}
          transition={{duration: 0.34, ease: [0.22, 1, 0.36, 1]}}
        >
          <Page />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
