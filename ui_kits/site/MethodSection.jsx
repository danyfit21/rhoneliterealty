/* global React, Reveal, Display, EsLine, useLang, SectionRail */

function ProblemSection() {
  const [lang] = useLang();
  return (
    <section className="rer-section" id="problem" style={{ background: 'var(--bg-deep)' }}>
      <div className="rer-container">
        <SectionRail n={2} label={lang === 'es' ? 'El reto' : 'The challenge'} />
        <Reveal stagger className="rer-content" style={{ maxWidth: 900 }}>
          <Display size="lg" as="h2">
            {lang === 'es'
              ? <>Comprar en EE. UU. no es difícil.<br/><span style={{ color: 'var(--fg-3)' }}>Comprar correctamente, sí.</span></>
              : <>Buying in the U.S. is not the hard part.<br/><span style={{ color: 'var(--fg-3)' }}>Buying correctly is.</span></>}
          </Display>

          <div style={{ height: 32 }} />
          <EsLine style={{ fontSize: 22 }}>
            {lang === 'es' ? 'Estrategia antes que prisa.' : 'Sin prisa, con estrategia.'}
          </EsLine>

          <p style={{
            marginTop: 32,
            fontSize: 18,
            lineHeight: 1.8,
            color: 'var(--fg-2)',
            maxWidth: 600,
          }}>
            {lang === 'es'
              ? 'La mayoría de los compradores entran al mercado sin saber qué les diferencia de los demás. Sin preparación, terminan pagando de más, perdiendo apalancamiento o cerrando un activo que no era el correcto.'
              : 'Most buyers enter the market without knowing what separates them from everyone else. Without preparation, they overpay, surrender leverage, or close on an asset that was never the right one.'}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function MethodSection() {
  const [lang] = useLang();
  const steps = [
    {
      n: '01',
      en: { t: 'Positioning', d: 'Establish your leverage — pre-approval, intent, timeline, exit horizon — before any listing is touched.' },
      es: { t: 'Posicionamiento', d: 'Establecer tu apalancamiento — pre-aprobación, intención, horizonte — antes de tocar el mercado.' },
    },
    {
      n: '02',
      en: { t: 'Search', d: 'Off-market access, curated short-lists, on-site walkthroughs filtered against your actual criteria — not the algorithm\u2019s.' },
      es: { t: 'Búsqueda', d: 'Acceso fuera de mercado, listas curadas, visitas filtradas contra tu criterio real — no el del algoritmo.' },
    },
    {
      n: '03',
      en: { t: 'Negotiation', d: 'Hold the line. Read the counterparty. Move only when the math is in your favor — bilingually if your seller requires it.' },
      es: { t: 'Negociación', d: 'Sostener la línea. Leer al vendedor. Avanzar solo cuando las cifras te favorecen — bilingüe cuando hace falta.' },
    },
    {
      n: '04',
      en: { t: 'Stewardship', d: 'The relationship outlives the closing. Property management, refinance windows, and the next acquisition stay on the strategy.' },
      es: { t: 'Acompañamiento', d: 'La relación trasciende el cierre. Gestión, refinanciación y la próxima adquisición continúan en la estrategia.' },
    },
  ];

  return (
    <section className="rer-section" id="method" style={{ background: 'var(--bg)' }}>
      <div className="rer-container">
        <SectionRail n={3} label={lang === 'es' ? 'El método' : 'The method'} />
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 72, maxWidth: 1100 }}>
            <div>
              <span className="rer-eyebrow-line">{lang === 'es' ? 'Cuatro fases' : 'Four phases'}</span>
              <Display size="lg" as="h2" style={{ marginTop: 16, maxWidth: 720 }}>
                {lang === 'es' ? 'Un método para adquirir, no para reaccionar.' : 'A method for acquiring, not for reacting.'}
              </Display>
            </div>
            <EsLine style={{ fontSize: 18, maxWidth: 280, textAlign: 'right' }}>
              {lang === 'es' ? 'Disciplina aplicada al inmueble.' : 'Discipline applied to real estate.'}
            </EsLine>
          </div>
        </Reveal>

        <Reveal stagger style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 0,
          borderTop: '1px solid var(--hairline)',
          borderLeft: '1px solid var(--hairline)',
        }}>
          {steps.map((s) => (
            <article key={s.n} style={{
              padding: '40px 32px',
              borderRight: '1px solid var(--hairline)',
              borderBottom: '1px solid var(--hairline)',
              transition: 'background var(--dur-base) var(--ease-out-expo)',
              cursor: 'default',
            }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--rer-midnight-700)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: 14,
                letterSpacing: 'var(--track-eyebrow)',
                color: 'var(--accent)',
              }}>{s.n}</div>
              <div style={{ height: 24 }} />
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 30,
                fontWeight: 500,
                lineHeight: 1.15,
                color: 'var(--fg)',
                margin: 0,
              }}>{s[lang].t}</h3>
              <div style={{ height: 14 }} />
              <p style={{
                fontSize: 14,
                fontWeight: 300,
                lineHeight: 1.65,
                color: 'var(--fg-2)',
                margin: 0,
              }}>{s[lang].d}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

window.ProblemSection = ProblemSection;
window.MethodSection = MethodSection;
