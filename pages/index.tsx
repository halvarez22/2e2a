import { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import ContactForm from '../components/ContactForm'
import Chatbot from '../components/Chatbot'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    // Force scroll to top on page reload/mount
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Header />

      <main className="flex-grow">
        {/* Each component below is a <section> with its own internal spacing */}
        <Hero />

        <Services />

        {/* Why Us Section - Updated with enhanced "reveal" image effect */}
        <section id="beneficios" className="section-anchor relative min-h-screen flex flex-col justify-center py-32 overflow-hidden bg-primary border-t border-white/5">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative group cursor-crosshair">
                <div className="absolute -inset-10 bg-accent/10 rounded-full blur-[120px] group-hover:bg-accent/30 transition-all duration-1000 animate-pulse" />

                <div className="relative overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/images/trailer_surrealista_1.jpg"
                    alt="Precision Logistics"
                    className="w-full h-[500px] lg:h-[700px] object-cover filter grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-[1.5s] ease-out"
                  />

                  {/* High-tech scanner overlay effect */}
                  <div className="absolute inset-0 bg-primary/40 mix-blend-multiply group-hover:bg-transparent transition-all duration-1000" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent/50 group-hover:top-full transition-all duration-[2s] ease-in-out opacity-0 group-hover:opacity-100" />

                  {/* Tech frame details */}
                  <div className="absolute top-0 left-0 w-full h-full border-r-[10px] border-b-[10px] border-accent/20 pointer-events-none transition-all duration-700 group-hover:border-accent/40" />
                  <div className="absolute top-4 left-4 text-[10px] font-black text-accent opacity-0 group-hover:opacity-100 transition-opacity delay-500 uppercase tracking-widest">
                    Scan: Active_Precision_Matrix
                  </div>
                </div>
              </div>

              <div>
                <div className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-6">Diferenciador 2e2a</div>
                <h2 className="text-5xl md:text-7xl font-black mb-12 leading-[0.9] text-white uppercase tracking-tighter">
                  Potencia <br />
                  <span className="text-accent text-glow">Operativa.</span>
                </h2>

                <div className="space-y-12">
                  {[
                    { title: 'CERO FRICCIÓN', desc: 'Sistemas automatizados que eliminan cuellos de botella en frontera.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                    { title: 'SQA CERTIFIED', desc: 'Garantía total de calidad en el manejo y resguardo de mercancía.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                    { title: 'RED BINACIONAL', desc: 'Puentes logísticos directos entre las economías más fuertes de América.', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }
                  ].map((f, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="flex-shrink-0 w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-black mb-2 text-white uppercase tracking-widest">{f.title}</h3>
                        <p className="text-slate-400 font-light leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Coverage with Flags */}
        <section className="py-24 bg-secondary/30 relative border-t border-white/5">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-4">Alcance Ilimitado</div>
              <h2 className="text-4xl font-black text-white uppercase tracking-tight">Presencia en América</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-1000">
              {[
                { img: 'bandera mexico.png', name: 'México' },
                { img: 'bandera_usa-sin fondo.png', name: 'USA' },
                { img: 'bandera_canada-sin fondo.png', name: 'Canadá' },
                { img: 'centroamerica-removebg-preview.png', name: 'Centroamérica' }
              ].map((flag) => (
                <div key={flag.name} className="text-center group">
                  <img src={`/images/${flag.img}`} alt={flag.name} className="h-16 mb-4 filter grayscale group-hover:grayscale-0 transition-all object-contain" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{flag.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />

        <Chatbot />
      </main>

      <Footer />
    </div>
  )
}
