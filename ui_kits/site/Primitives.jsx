/* global React */
// Shared primitives: ScrollReveal hook + utility components
const { useEffect, useRef, useState, createContext, useContext } = React;

// IntersectionObserver-driven reveal — adds data-revealed once visible
function useReveal({ threshold = 0.18, once = true } = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.setAttribute('data-revealed', '');
          if (once) io.unobserve(e.target);
        } else if (!once) {
          e.target.removeAttribute('data-revealed');
        }
      });
    }, { threshold, rootMargin: '0px 0px -80px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);
  return ref;
}

// Reveal wrapper
function Reveal({ children, stagger = false, style, className = '', as: As = 'div', ...rest }) {
  const ref = useReveal();
  const attr = stagger ? { 'data-reveal-stagger': '' } : { 'data-reveal': '' };
  return (
    <As ref={ref} {...attr} className={className} style={style} {...rest}>
      {children}
    </As>
  );
}

// Eyebrow with hairline
function Eyebrow({ children, style }) {
  return <span className="rer-eyebrow-line" style={style}>{children}</span>;
}

// Display heading
function Display({ children, size = 'lg', style, as: As = 'h2' }) {
  const sizes = {
    xl: 'var(--t-display-xl)',
    lg: 'var(--t-display-lg)',
    md: 'var(--t-display-md)',
    sm: 'var(--t-display-sm)',
  };
  return (
    <As style={{
      fontFamily: 'var(--font-display)',
      fontSize: sizes[size],
      fontWeight: 500,
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--track-tight)',
      color: 'var(--fg)',
      margin: 0,
      textWrap: 'balance',
      ...style,
    }}>
      {children}
    </As>
  );
}

// Spanish italic accent line
function EsLine({ children, style }) {
  return (
    <span style={{
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      color: 'var(--accent-warm)',
      ...style,
    }}>
      {children}
    </span>
  );
}

// Section number rail (left)
function SectionRail({ n, label }) {
  return (
    <div className="rer-section-rail">
      {String(n).padStart(2, '0')} / {label}
    </div>
  );
}

// Language context (EN/ES switch demo)
const LangContext = createContext(['en', () => {}]);
function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  return <LangContext.Provider value={[lang, setLang]}>{children}</LangContext.Provider>;
}
function useLang() { return useContext(LangContext); }

Object.assign(window, { useReveal, Reveal, Eyebrow, Display, EsLine, SectionRail, LangProvider, useLang });
