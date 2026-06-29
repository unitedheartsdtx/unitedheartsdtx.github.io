import {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';

const RouterContext = createContext(null);

function normalizePath(pathname) {
  if (!pathname || pathname === '/index.html') return '/';
  return pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
}

export function RouterProvider({children}) {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((href) => {
    const url = new URL(href, window.location.origin);
    const nextPath = normalizePath(url.pathname);
    window.history.pushState({}, '', `${nextPath}${url.hash}`);
    setPath(nextPath);
    window.scrollTo({top: 0, behavior: 'auto'});
  }, []);

  const value = useMemo(() => ({path, navigate}), [path, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  return useContext(RouterContext);
}

export function SiteLink({href, onClick, children, ...props}) {
  const {navigate} = useRouter();

  const handleClick = (event) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      props.target === '_blank'
    ) {
      return;
    }
    event.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
