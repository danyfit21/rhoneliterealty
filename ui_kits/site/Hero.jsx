/* global React, Reveal, Display, EsLine, useLang */
function Hero() {
  const [lang] = useLang();
  return (
    <section id="top" style={{
      position: 'relative',
      minHeight: '100vh',
      padding: '0',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      background: 'var(--bg-deep)',
    }} className="rer-noise">
      {/* Cinematic background portrait */}
      <div data-reveal data-img-expand
        ref={(el) => {
          if (el && !el._io) {
            el._io = new IntersectionObserver(([e]) => {
              if (e.isIntersecting) {
                e.target.setAttribute('data-revealed', '');
                el._io.unobserve(el);
              }
            });
            el._io.observe(el);
            // Hero is at top; trigger immediately
            requestAnimationFrame(() => el.setAttribute('data-revealed', ''));
          }
        }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}>
        <img src="assets/diego-suit-night.png" alt="Diego Rhon"
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            objectPosition: 'center 20%',
            filter: 'brightness(0.62) saturate(0.85) contrast(1.05)',
          }} />
      </div>

      {/* Vignette + side gradient for type legibility */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background:
          'linear-gradient(180deg, rgba(11,19,32,0.7) 0%, rgba(11,19,32,0.3) 30%, rgba(11,19,32,0.45) 70%, rgba(11,19,32,0.95) 100%),' +
          'linear-gradient(90deg, rgba(11,19,32,0.8) 0%, rgba(11,19,32,0.1) 55%, transparent 100%)',
      }} />

      {/* Diamond motif backdrop */}
      <div style={{
        position: 'absolute',
        right: '-100px', top: '50%', transform: 'translateY(-50%) rotate(45deg)',
        width: 600, height: 600,
        border: '1px solid rgba(244,244,246,0.05)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        right: '20px', top: '40%', transform: 'translateY(-50%) rotate(45deg)',
        width: 380, height: 380,
        border: '1px solid rgba(244,244,246,0.04)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: 'var(--maxw-wide)',
        margin: '0 auto',
        padding: '0 24px 96px',
      }}>
        <Reveal stagger style={{ maxWidth: 880 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <span style={{ width: 32, height: 1, background: 'var(--accent)' }}></span>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11, fontWeight: 500,
              letterSpacing: 'var(--track-eyebrow)',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}>Colorado Springs · Estrategia · Acceso</span>
          </div>

          <Display size="xl" as="h1" style={{
            fontWeight: 500,
            color: 'var(--fg)',
          }}>
            Diego Rhon
          </Display>

          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(20px, 2.2vw, 30px)',
            fontStyle: 'italic',
            color: 'var(--accent-warm)',
            marginTop: 16,
            maxWidth: 640,
            lineHeight: 1.3,
          }}>
            {lang === 'es'
              ? 'Asesoría inmobiliaria bilingüe para compradores serios.'
              : 'Bilingual real-estate counsel for serious buyers.'}
          </div>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: 'clamp(15px, 1.3vw, 18px)',
            color: 'var(--fg-2)',
            lineHeight: 1.7,
            marginTop: 28,
            maxWidth: 540,
          }}>
            {lang === 'es'
              ? 'Acompañando a familias, extranjeros e inversionistas hacia la propiedad en Estados Unidos — con disciplina, claridad y respaldo institucional.'
              : 'Guiding families, foreigners and investors toward U.S. property ownership — with discipline, clarity, and institutional backing.'}
          </p>

          <div style={{ display: 'flex', gap: 18, marginTop: 40, flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#consult" className="rer-btn rer-btn-primary">
              {lang === 'es' ? 'Agendar Consulta' : 'Schedule Consultation'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17L17 7M17 7H8M17 7v9" /></svg>
            </a>
            <a href="#method" className="rer-btn rer-btn-link">
              {lang === 'es' ? 'Conoce el método' : 'Discover the method'}
            </a>
          </div>
        </Reveal>

        {/* Bottom meta strip */}
        <div style={{
          position: 'absolute',
          left: 24, right: 24, bottom: 32,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: 'var(--font-sans)',
          fontSize: 10, fontWeight: 500,
          letterSpacing: 'var(--track-eyebrow)',
          textTransform: 'uppercase',
          color: 'var(--fg-3)',
        }}>
          <span>01 / Hero</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Scroll
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="1" y="1" width="10" height="18" rx="5" />
              <line x1="6" y1="5" x2="6" y2="9">
                <animate attributeName="y2" values="9;13;9" dur="2s" repeatCount="indefinite" />
              </line>
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
