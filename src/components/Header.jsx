import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {Menu, X} from 'lucide-react';
import {BrandMark} from './BrandMark.jsx';
import {SiteLink, useRouter} from '../router.jsx';

const links = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Get Involved', '/get-involved'],
  ['Partnerships', '/partnerships'],
  ['Contact', '/contact'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const {path} = useRouter();

  return (
    <header className="site-header">
      <BrandMark />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <SiteLink className={path === href ? 'is-active' : ''} key={href} href={href}>
            {label}
          </SiteLink>
        ))}
      </nav>
      <button
        type="button"
        className="mobile-menu-button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <AnimatePresence>
        {open ? (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{opacity: 0, y: -12}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -12}}
            transition={{duration: 0.22, ease: 'easeInOut'}}
          >
            {links.map(([label, href]) => (
              <SiteLink className={path === href ? 'is-active' : ''} key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </SiteLink>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
