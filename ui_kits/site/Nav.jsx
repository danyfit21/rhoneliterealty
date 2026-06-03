/* global React, useLang */
const { useState, useEffect } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { en: 'Method', es: 'Método', href: '#method' },
    { en: 'Properties', es: 'Propiedades', href: '#properties' },
    { en: 'Areas', es: 'Zonas', href: '#areas' },
    { en: 'About', es: 'Sobre', href: '#about' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '0 24px',
      transition: 'all var(--dur-base) var(--ease-out-expo)',
      background: scrolled ? 'rgba(11,19,32,0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(140%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--hairline)' : '1px solid transparent',
    }}>
      <div style={{
        maxWidth: 'var(--maxw-wide)',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: scrolled ? 64 : 80,
        transition: 'height var(--dur-base) var(--ease-out-expo)',
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12, borderBottom: 'none' }}>
          <img src="assets/logo-gold.png" alt="Rhon Elite Realty"
            style={{ height: scrolled ? 36 : 44, width: 'auto', display: 'block', transition: 'height var(--dur-base) var(--ease-out-expo)' }} />
        </a>

        <nav style={{ display: 'flex', gap: 36 }} className="rer-nav-items">
          {items.map((it) => (
            <a key={it.en} href={it.href} style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: 'var(--track-eyebrow)',
              textTransform: 'uppercase',
              color: 'var(--fg-2)',
              borderBottom: 'none',
            }}>{lang === 'es' ? it.es : it.en}</a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: 'var(--track-wide)',
            color: 'var(--fg-3)',
            padding: 0,
          }}>
            <span style={{ color: lang === 'en' ? 'var(--accent)' : 'var(--fg-3)' }}>EN</span>
            <span style={{ margin: '0 6px', opacity: 0.4 }}>·</span>
            <span style={{ color: lang === 'es' ? 'var(--accent)' : 'var(--fg-3)' }}>ES</span>
          </button>
          <a href="#consult" className="rer-btn rer-btn-ghost" style={{ padding: '10px 20px', fontSize: 10 }}>
            {lang === 'es' ? 'Consulta' : 'Consult'}
          </a>
        </div>
      </div>
    </header>
  );
}

window.Nav = Nav;
