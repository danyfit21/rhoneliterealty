/* global React, Reveal, Display, EsLine, useLang, SectionRail */

function PropertyCategoriesSection() {
  const [lang] = useLang();
  const cats = [
    {
      icon: 'home', n: '01',
      en: { t: 'Families', d: 'Buyers ready to plant roots — schools, commute, the right neighborhood, the long view.' },
      es: { t: 'Familias', d: 'Compradores listos para echar raíces — escuelas, ruta, el barrio correcto, la mirada larga.' },
    },
    {
      icon: 'globe-2', n: '02',
      en: { t: 'Foreigners', d: 'International buyers acquiring U.S. property — visa pathways, ITIN financing, full bilingual counsel.' },
      es: { t: 'Extranjeros', d: 'Compradores internacionales — caminos de visa, financiamiento ITIN, asesoría bilingüe completa.' },
    },
    {
      icon: 'line-chart', n: '03',
      en: { t: 'Investors', d: 'Portfolio builders — rental yield, appreciation curves, multi-property strategies, exit planning.' },
      es: { t: 'Inversionistas', d: 'Constructores de portafolio — rentas, plusvalía, estrategia multi-propiedad, planeación de salida.' },
    },
    {
      icon: 'route', n: '04',
      en: { t: 'Relocation', d: 'Cross-state and out-of-country moves with a single coordinated handoff at every step.' },
      es: { t: 'Reubicación', d: 'Mudanzas inter-estatales o internacionales — coordinación única en cada etapa.' },
    },
  ];

  const iconSvgs = {
    home: <path d="M3 12l9-9 9 9M5 10v11h14V10" strokeLinecap="round" strokeLinejoin="round" />,
    'globe-2': <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
    'line-chart': <path d="M3 21V4M3 21h18M7 16l4-5 3 3 6-8" strokeLinecap="round" strokeLinejoin="round" />,
    route: <><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M6 8.5v4a4 4 0 0 0 4 4h4" strokeLinecap="round" /></>,
  };

  return (
    <section className="rer-section" id="properties" style={{ background: 'var(--bg)' }}>
      <div className="rer-container">
        <SectionRail n={6} label={lang === 'es' ? 'Categorías' : 'Categories'} />
        <Reveal>
          <span className="rer-eyebrow-line">{lang === 'es' ? 'Para quién' : 'Who Diego serves'}</span>
          <Display size="lg" as="h2" style={{ marginTop: 16, maxWidth: 760 }}>
            {lang === 'es'
              ? 'Cuatro tipos de comprador. Una sola disciplina.'
              : 'Four kinds of buyer. One discipline.'}
          </Display>
        </Reveal>

        <div style={{ height: 64 }} />

        <Reveal stagger style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 18,
        }}>
          {cats.map((c) => (
            <article key={c.n} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--hairline)',
              borderRadius: 4,
              padding: '36px 28px',
              minHeight: 320,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'default',
              transition: 'all var(--dur-base) var(--ease-out-expo)',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--hairline-strong)';
                e.currentTarget.style.boxShadow = 'var(--shadow-3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--hairline)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600, fontSize: 11,
                  letterSpacing: 'var(--track-eyebrow)',
                  color: 'var(--accent)',
                }}>{c.n}</div>
                <div style={{ marginTop: 28 }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                    stroke="var(--accent)" strokeWidth="1.25">{iconSvgs[c.icon]}</svg>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 30, fontWeight: 500,
                  marginTop: 20, lineHeight: 1.1,
                  color: 'var(--fg)',
                }}>{c[lang].t}</h3>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 14,
                  color: 'var(--accent-warm)',
                  marginTop: 4,
                }}>{lang === 'en' ? c.es.t : c.en.t}</div>
                <p style={{
                  marginTop: 18,
                  fontSize: 13.5,
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: 'var(--fg-2)',
                }}>{c[lang].d}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function MarketAreasSection() {
  const [lang] = useLang();
  const areas = [
    { name: 'Briargate', tag: lang === 'es' ? 'Familias · Top-tier schools' : 'Families · Top-tier schools', range: '$650k–$2.4M' },
    { name: 'Old Colorado City', tag: lang === 'es' ? 'Histórico · Inversión' : 'Historic · Investment', range: '$420k–$1.1M' },
    { name: 'Broadmoor', tag: lang === 'es' ? 'Lujo · Vista a las montañas' : 'Luxury · Mountain-line', range: '$1.2M–$8M' },
    { name: 'Mountain Shadows', tag: lang === 'es' ? 'Pikes Peak · Familias' : 'Pikes Peak · Families', range: '$700k–$2.6M' },
    { name: 'Downtown Springs', tag: lang === 'es' ? 'Walkable · Profesionales' : 'Walkable · Professionals', range: '$380k–$950k' },
    { name: 'Black Forest', tag: lang === 'es' ? 'Acreage · Privacidad' : 'Acreage · Privacy', range: '$850k–$3.5M' },
  ];

  return (
    <section className="rer-section" id="areas" style={{ background: 'var(--bg-deep)' }}>
      <div className="rer-container">
        <SectionRail n={7} label={lang === 'es' ? 'Zonas de mercado' : 'Market areas'} />
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <span className="rer-eyebrow-line">Colorado Springs, CO</span>
              <Display size="lg" as="h2" style={{ marginTop: 16, maxWidth: 720 }}>
                {lang === 'es' ? 'Conozco las zonas. En profundidad.' : 'Where I know the ground.'}
              </Display>
            </div>
            <EsLine style={{ fontSize: 18, maxWidth: 240, textAlign: 'right' }}>
              {lang === 'es' ? 'Conocimiento local, ejecutado bilingüe.' : 'Local knowledge, executed bilingually.'}
            </EsLine>
          </div>
        </Reveal>

        <div style={{ height: 56 }} />

        <Reveal stagger style={{
          borderTop: '1px solid var(--hairline)',
        }}>
          {areas.map((a, i) => (
            <div key={a.name} style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr 1fr 140px',
              gap: 32,
              alignItems: 'center',
              padding: '28px 16px',
              borderBottom: '1px solid var(--hairline)',
              cursor: 'pointer',
              transition: 'all var(--dur-base) var(--ease-out-expo)',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212,175,55,0.04)'; e.currentTarget.style.paddingLeft = '32px'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '16px'; }}
            >
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800, fontSize: 13,
                letterSpacing: 'var(--track-eyebrow)',
                color: 'var(--accent)',
              }}>0{i + 1}</div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 28, fontWeight: 500,
                color: 'var(--fg)',
              }}>{a.name}</div>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: 'var(--track-wide)',
                textTransform: 'uppercase',
                color: 'var(--fg-3)',
              }}>{a.tag}</div>
              <div style={{
                textAlign: 'right',
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: 16,
                color: 'var(--fg)',
                fontVariantNumeric: 'tabular-nums lining-nums',
                letterSpacing: '-0.01em',
              }}>{a.range}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

window.PropertyCategoriesSection = PropertyCategoriesSection;
window.MarketAreasSection = MarketAreasSection;
