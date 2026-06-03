/* global React, Reveal, Display, EsLine, useLang, SectionRail */

function You1stSection() {
  const [lang] = useLang();
  return (
    <section className="rer-section" id="about" style={{ background: 'var(--bg)' }}>
      <div className="rer-container">
        <SectionRail n={8} label={lang === 'es' ? 'Respaldo institucional' : 'Institutional backing'} />
        <Reveal style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 56,
          alignItems: 'center',
        }}>
          <div>
            <span className="rer-eyebrow-line">{lang === 'es' ? 'Confianza estructurada' : 'Structured trust'}</span>
            <Display size="md" as="h2" style={{ marginTop: 16 }}>
              {lang === 'es' ? (
                <>Diego no opera solo.<br />Opera con respaldo institucional.</>
              ) : (
                <>Diego does not operate alone.<br />He operates with institutional backing.</>
              )}
            </Display>
            <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.75, color: 'var(--fg-2)', maxWidth: 520 }}>
              {lang === 'es'
                ? 'Como parte de You 1st Realty — Unity, cada operación se apoya en compliance, sistemas y una red nacional que protege al comprador internacional con el mismo rigor que al local.'
                : 'As part of You 1st Realty — Unity, every transaction is supported by compliance, systems, and a national network that protects the international buyer with the same rigor as the local one.'}
            </p>

            <div style={{
              marginTop: 36,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 18,
              maxWidth: 500,
            }}>
              {[
                { en: 'Compliance', n: 'FINRA · MLS' },
                { en: 'Network', n: 'National' },
                { en: 'Bilingual', n: 'EN · ES' },
              ].map((it) => (
                <div key={it.en} style={{
                  padding: '16px 12px',
                  borderTop: '1px solid var(--hairline-strong)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 10, fontWeight: 500,
                    letterSpacing: 'var(--track-eyebrow)',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                  }}>{it.en}</div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 18, fontWeight: 500,
                    color: 'var(--fg)', marginTop: 4,
                  }}>{it.n}</div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 30,
              paddingTop: 24,
              borderTop: '1px solid var(--hairline)',
              maxWidth: 240,
            }}>
              <img
                src="assets/you1stunity-logo-cropped.png"
                alt="You 1st Realty Unity"
                style={{
                  width: 'min(170px, 100%)',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'left center',
                  opacity: .95,
                  display: 'block',
                }}
              />
            </div>
          </div>

          <div style={{
            border: '1px solid var(--hairline)',
            background: 'var(--bg-card)',
            padding: 18,
            borderRadius: 4,
            textAlign: 'center',
          }}>
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 3,
              aspectRatio: '4 / 5',
              background: 'rgba(7,27,51,.45)',
            }}>
              <img
                src="assets/diego-rhon-profile.png"
                alt="Diego Rhon, real estate agent in Colorado Springs"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '66% 46%',
                  transform: 'scale(1.1)',
                  transformOrigin: '66% 46%',
                  display: 'block',
                  margin: 0,
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7,27,51,.86) 0%, rgba(7,27,51,.08) 42%, rgba(7,27,51,.05) 100%)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute',
                left: 20,
                right: 20,
                bottom: 20,
                zIndex: 1,
                textAlign: 'left',
              }}>
                <div style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: 'var(--track-eyebrow)',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}>Rhon Elite Realty</div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(30px, 3vw, 44px)',
                  fontWeight: 500,
                  lineHeight: 1,
                  color: 'var(--fg)',
                  marginTop: 6,
                }}>Diego Rhon</div>
                <div style={{
                  fontSize: 12,
                  color: 'var(--fg-2)',
                  marginTop: 10,
                  lineHeight: 1.45,
                }}>Colorado Springs · You 1st Realty — Unity</div>
              </div>
            </div>
            <div style={{
              display: 'inline-flex',
              gap: 8,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 24,
              fontSize: 10,
              letterSpacing: 'var(--track-wide)',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              padding: '8px 16px',
              border: '1px solid var(--hairline)',
              borderRadius: 999,
              lineHeight: 1.4,
              maxWidth: '100%',
              flexWrap: 'wrap',
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              {lang === 'es' ? 'Licenciado · Compliance · Bilingüe' : 'Licensed · Compliant · Bilingual'}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ConsultationCTA() {
  const [lang] = useLang();
  return (
    <section className="rer-section" id="consult" style={{
      background: 'var(--bg-deep)',
      padding: '160px 24px 200px',
      position: 'relative',
      overflow: 'hidden',
    }} >
      {/* Diamond motifs */}
      <div style={{
        position: 'absolute', left: '-200px', top: '50%', transform: 'translateY(-50%) rotate(45deg)',
        width: 600, height: 600, border: '1px solid rgba(244,244,246,0.04)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: '-200px', bottom: '-100px', transform: 'rotate(45deg)',
        width: 500, height: 500, border: '1px solid rgba(244,244,246,0.04)', pointerEvents: 'none',
      }} />

      <div className="rer-container" style={{ textAlign: 'center', position: 'relative' }}>
        <SectionRail n={9} label={lang === 'es' ? 'Próximo paso' : 'Next step'} />
        <Reveal stagger style={{ maxWidth: 880, margin: '0 auto' }}>
          <span className="rer-eyebrow-line">{lang === 'es' ? 'Consulta privada' : 'Private consultation'}</span>
          <Display size="xl" as="h2" style={{ marginTop: 24, fontWeight: 500 }}>
            {lang === 'es' ? 'Empezamos con una conversación.' : 'Begin with a conversation.'}
          </Display>
          <EsLine style={{ fontSize: 22, marginTop: 16, display: 'block' }}>
            {lang === 'es' ? 'No hay prisa — hay estrategia.' : 'No rush. Only strategy.'}
          </EsLine>
          <p style={{
            margin: '32px auto 0',
            fontSize: 17,
            lineHeight: 1.75,
            color: 'var(--fg-2)',
            maxWidth: 560,
            textWrap: 'balance',
          }}>
            {lang === 'es'
              ? 'Cuarenta y cinco minutos para entender tu situación, tus objetivos y la jugada correcta. Bilingüe. Confidencial. Sin compromiso.'
              : 'Forty-five minutes to understand your situation, your objective, and the right move. Bilingual. Confidential. Without obligation.'}
          </p>

          <div style={{ height: 48 }} />

          <a href="tel:7195219117" className="rer-btn rer-btn-primary" style={{
            boxShadow: 'var(--shadow-gold-glow)',
            padding: '20px 40px',
            fontSize: 12,
          }}>
            {lang === 'es' ? 'Agendar consulta privada' : 'Schedule private consultation'}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 17L17 7M17 7H8M17 7v9" /></svg>
          </a>

          <div style={{ height: 36 }} />

          <div style={{
            display: 'inline-flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center',
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            color: 'var(--fg-2)',
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontVariantNumeric: 'tabular-nums' }}>719 · 521 · 9117</span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7"/></svg>
              diego@you1stunity.com
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const [lang] = useLang();
  return (
    <footer style={{
      background: 'var(--bg-deep)',
      borderTop: '1px solid var(--hairline)',
      padding: '64px 24px 40px',
    }}>
      <div style={{ maxWidth: 'var(--maxw-wide)', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 40,
          marginBottom: 56,
        }}>
          <div>
            <img src="assets/logo-gold.png" alt="" style={{ height: 64, width: 'auto' }} />
            <p style={{ marginTop: 18, fontSize: 13, color: 'var(--fg-3)', lineHeight: 1.7, maxWidth: 260 }}>
              {lang === 'es'
                ? 'Asesoría inmobiliaria de élite. Colorado Springs y todo Estados Unidos.'
                : 'Elite real-estate counsel. Colorado Springs and across the United States.'}
            </p>
          </div>
          <div>
            <div style={{
              fontSize: 10, letterSpacing: 'var(--track-eyebrow)', textTransform: 'uppercase',
              color: 'var(--accent)', fontWeight: 500, marginBottom: 14,
            }}>{lang === 'es' ? 'Navegar' : 'Navigate'}</div>
            {['Method', 'Properties', 'Areas', 'About'].map(x => (
              <div key={x} style={{ fontSize: 14, color: 'var(--fg-2)', padding: '6px 0', cursor: 'pointer' }}>{x}</div>
            ))}
          </div>
          <div>
            <div style={{
              fontSize: 10, letterSpacing: 'var(--track-eyebrow)', textTransform: 'uppercase',
              color: 'var(--accent)', fontWeight: 500, marginBottom: 14,
            }}>{lang === 'es' ? 'Contacto' : 'Contact'}</div>
            <div style={{ fontSize: 14, color: 'var(--fg-2)', padding: '6px 0', fontWeight: 800, fontVariantNumeric: 'tabular-nums' }}>719 · 521 · 9117</div>
            <div style={{ fontSize: 14, color: 'var(--fg-2)', padding: '6px 0' }}>diego@you1stunity.com</div>
            <div style={{ fontSize: 14, color: 'var(--fg-2)', padding: '6px 0' }}>@rhoneliterealty</div>
          </div>
          <div>
            <div style={{
              fontSize: 10, letterSpacing: 'var(--track-eyebrow)', textTransform: 'uppercase',
              color: 'var(--accent)', fontWeight: 500, marginBottom: 14,
            }}>{lang === 'es' ? 'Respaldado por' : 'Backed by'}</div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 20, fontWeight: 600, color: 'var(--fg)', letterSpacing: '0.05em',
            }}>You 1<span style={{ color: 'var(--accent)' }}>st</span> Realty</div>
            <div style={{ fontSize: 11, letterSpacing: 'var(--track-wide)', textTransform: 'uppercase', color: 'var(--fg-3)', marginTop: 4 }}>Unity</div>
          </div>
        </div>

        <div style={{
          paddingTop: 24,
          borderTop: '1px solid var(--hairline-soft)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          letterSpacing: 'var(--track-wide)',
          color: 'var(--fg-3)',
        }}>
          <span>© Rhon Elite Realty · 2026</span>
          <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)', color: 'var(--accent-warm)' }}>
            Sin prisa, con estrategia.
          </span>
          <span>Licensed broker · Colorado</span>
        </div>
      </div>
    </footer>
  );
}

window.You1stSection = You1stSection;
window.ConsultationCTA = ConsultationCTA;
window.Footer = Footer;
