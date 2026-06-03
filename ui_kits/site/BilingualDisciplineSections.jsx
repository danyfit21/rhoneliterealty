/* global React, Reveal, Display, EsLine, useLang, SectionRail */

function BilingualSection() {
  const [lang] = useLang();
  return (
    <section className="rer-section" id="bilingual" style={{ background: 'var(--bg-deep)', overflow: 'hidden' }}>
      <div className="rer-container">
        <SectionRail n={4} label={lang === 'es' ? 'La ventaja bilingüe' : 'Bilingual advantage'} />
        <Reveal style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 64,
          alignItems: 'center',
        }}>
          <div>
            <span className="rer-eyebrow-line">English · Español</span>
            <Display size="lg" as="h2" style={{ marginTop: 16 }}>
              {lang === 'es'
                ? <>Dos idiomas.<br/><span style={{ color: 'var(--accent-warm)' }}>Un solo estándar.</span></>
                : <>Two languages.<br/><span style={{ color: 'var(--accent-warm)' }}>One standard of counsel.</span></>}
            </Display>
            <p style={{
              marginTop: 24,
              fontSize: 17,
              lineHeight: 1.75,
              color: 'var(--fg-2)',
              maxWidth: 480,
            }}>
              {lang === 'es'
                ? 'Para el comprador internacional, la barrera no es el inglés — es la falta de un asesor que lea contratos, leyes y mercados en ambos idiomas con el mismo rigor.'
                : 'For the international buyer, the barrier is not the English — it is the absence of an advisor who reads contracts, law and markets in both languages with equal rigor.'}
            </p>

            <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, maxWidth: 440 }}>
              {[
                { en: 'Contracts', es: 'Contratos' },
                { en: 'Financing', es: 'Financiamiento' },
                { en: 'Negotiation', es: 'Negociación' },
                { en: 'Disclosures', es: 'Divulgaciones' },
              ].map((it) => (
                <div key={it.en} style={{
                  padding: '14px 16px',
                  border: '1px solid var(--hairline)',
                  borderRadius: 2,
                }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg)' }}>{it.en}</div>
                  <div style={{ fontSize: 12, fontStyle: 'italic', fontFamily: 'var(--font-display)', color: 'var(--accent-warm)', marginTop: 2 }}>{it.es}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div data-img-expand style={{
              position: 'relative',
              aspectRatio: '4/5',
              border: '1px solid var(--hairline-strong)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-3)',
            }}>
              <img src="assets/diego-portfolio-day.png" alt="Diego Rhon" style={{
                width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                filter: 'brightness(0.92) saturate(0.92)',
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(11,19,32,0.7) 100%)',
              }} />
              <div style={{ position: 'absolute', left: 24, right: 24, bottom: 22 }}>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 10, fontWeight: 500,
                  letterSpacing: 'var(--track-eyebrow)',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}>Diego Rhon · Real Estate Broker</div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 18,
                  color: 'var(--fg)',
                  marginTop: 6,
                }}>"Hablamos español — con el mismo nivel de rigor."</div>
              </div>
            </div>
            {/* Floating accent diamond */}
            <div style={{
              position: 'absolute',
              top: -16, right: -16,
              width: 80, height: 80,
              border: '1px solid var(--hairline-strong)',
              transform: 'rotate(45deg)',
              pointerEvents: 'none',
            }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DisciplineSection() {
  const [lang] = useLang();
  return (
    <section className="rer-section" id="discipline" style={{
      background: 'var(--bg-deep)',
      padding: 0,
      position: 'relative',
      minHeight: '90vh',
      overflow: 'hidden',
    }}>
      <div data-reveal data-img-expand style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src="assets/diego-mma-training.png" alt="" style={{
          width: '100%', height: '100%', objectFit: 'cover',
          filter: 'brightness(0.52) saturate(0.55) contrast(1.08) grayscale(0.18)',
        }} />
      </div>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background:
          'linear-gradient(90deg, rgba(11,19,32,0.86) 0%, rgba(11,19,32,0.48) 55%, rgba(11,19,32,0.76) 100%)',
      }} />

      <div className="rer-container" style={{
        position: 'relative', zIndex: 2,
        minHeight: '90vh',
        display: 'flex', alignItems: 'center',
        padding: '128px 24px',
      }}>
        <Reveal stagger style={{ maxWidth: 720 }}>
          <span className="rer-eyebrow-line">{lang === 'es' ? 'Disciplina personal' : 'Personal discipline'}</span>
          <Display size="lg" as="h2" style={{ marginTop: 20 }}>
            {lang === 'es'
              ? <>La misma disciplina que aplica en el tatami,<br/><span style={{ color: 'var(--accent-warm)', fontStyle: 'italic' }}>la lleva a tu negociación.</span></>
              : <>The same discipline he brings to the mat,<br/><span style={{ color: 'var(--accent-warm)', fontStyle: 'italic' }}>he brings to your negotiation.</span></>}
          </Display>
          <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.8, color: 'var(--fg-2)', maxWidth: 560 }}>
            {lang === 'es'
              ? 'Atleta de artes marciales mixtas. Estudio del oponente, lectura del tiempo, ejecución sin emoción. En el cuadrilátero o en la mesa de cierre — los principios son los mismos.'
              : 'A practicing mixed martial-arts athlete. Studying the opponent, reading the timing, executing without emotion. In the cage or at the closing table — the principles are the same.'}
          </p>

          <div style={{ marginTop: 40, display: 'flex', gap: 36, flexWrap: 'wrap' }}>
            {[
              { en: 'Focus', es: 'Enfoque' },
              { en: 'Resilience', es: 'Resiliencia' },
              { en: 'Precision', es: 'Precisión' },
              { en: 'Protection', es: 'Protección' },
            ].map((it) => (
              <div key={it.en}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22, fontWeight: 500,
                  color: 'var(--fg)',
                }}>{it.en}</div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic', fontSize: 13,
                  color: 'var(--accent-warm)',
                  marginTop: 2,
                }}>{it.es}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

window.BilingualSection = BilingualSection;
window.DisciplineSection = DisciplineSection;
