import Link from 'next/link'

const stats = [
  "LOGÍSTICA 4.0", "COBERTURA GLOBAL", "COMPLIANCE ADUANAL", "ALMACENAJE INTELIGENTE",
  "SOPORTE 24/7", "TECNOLOGÍA SQA", "NORTE Y CENTROAMÉRICA", "RASTREO SATELITAL"
]

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:min-h-[110vh] flex flex-col justify-center overflow-hidden bg-primary">
      {/* Background Layer with high-end asset */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-50 scale-105"
        style={{
          backgroundImage: `url('/images/trailer_futurista.png')`,
        }}
      />

      {/* Animated Gradient Overlays - Ensure absolute inset-0 to cover section only */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/10 via-primary/70 to-primary" />
      <div className="absolute inset-0 z-10 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.1)_0%,transparent_70%)] animate-pulse" />

      {/* Glowing Grid Orbs - Self contained */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-accent/10 rounded-full blur-[100px] animate-float opacity-30" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent/10 rounded-full blur-[100px] animate-float opacity-30 [animation-delay:2s]" />

      <div className="container relative z-20 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-accent shadow-[0_0_10px_#00f2ff]" />
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] animate-fade-in">
                Futuro de la Logística Global
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl xl:text-9xl font-black mb-10 leading-[0.9] uppercase tracking-tighter animate-slide-up">
              <span className="text-white block">Excelencia</span>
              <span className="text-accent text-glow block">Sin Límites.</span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-light animate-fade-in [animation-delay:400ms]">
              Revolucionamos la cadena de suministro con inteligencia <span className="text-white font-bold">SQA</span> y
              operaciones transfronterizas de alta precisión.
            </p>

            <div className="flex flex-wrap gap-8 animate-fade-in [animation-delay:600ms]">
              <Link href="#contacto" className="btn-futuristic">
                Iniciar Proyecto
              </Link>
              <Link href="#servicios" className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                Ver Capacidades
                <span className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Protagonist Logo - Resized for Mobile/Desktop balance */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end animate-fade-in [animation-delay:300ms]">
            <div className="relative group p-8">
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-[80px] group-hover:bg-accent/20 transition-all duration-700 animate-pulse" />
              <img
                src="/images/Logo%20Aaron%20blanco.png"
                alt="2e2a Protagonist Logo"
                className="h-40 md:h-56 xl:h-72 relative z-10 transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Promo Ticker - Part of this section */}
      <div className="absolute bottom-0 left-0 right-0 z-30 ticker-container py-6">
        <div className="flex animate-ticker gap-20">
          {[...stats, ...stats].map((stat, i) => (
            <div key={i} className="flex items-center gap-6 whitespace-nowrap">
              <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">{stat}</span>
              <span className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#00f2ff]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
