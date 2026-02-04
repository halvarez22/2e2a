const services = [
  {
    title: 'Transporte de Precisión',
    desc: 'Unidades de última generación con monitoreo biométrico y rastreo satelital militar.',
    tag: 'FTL / LTL',
    image: '/images/trailer_1.jpg',
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011 1v2.5a1.5 1.5 0 01-3 0V17a1 1 0 011-1h1z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h3m0 0a1 1 0 100 2 1 1 0 000-2zm3 0h1a1 1 0 011 1v2.5a1.5 1.5 0 01-3 0V17a1 1 0 011-1h1z" />
      </svg>
    ),
  },
  {
    title: 'Corredores Inteligentes',
    desc: 'Red propia que conecta los polos industriales de Norteamérica con eficiencia predictiva.',
    tag: 'INTERNACIONAL',
    image: '/images/trailer_2.jpg',
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Gestión de Cumplimiento',
    desc: 'Ingeniería en procesos aduanales para un tránsito fluido sin fricciones burocráticas.',
    tag: 'COMPLIANCE',
    image: '/images/trailer_surrealista_2.jpg',
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Smart Warehousing',
    desc: 'Almacenamiento robotizado y gestión de inventarios en tiempo real con IA.',
    tag: 'ALMACENAJE',
    image: '/images/trailer_surrealista_3.jpg',
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 002 2v-6a2 002 2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="section-anchor min-h-screen py-32 flex flex-col justify-center bg-primary relative overflow-hidden border-t border-white/5" id="servicios">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-6">Capacidades 4.0</div>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
              Ingeniería <br />
              <span className="text-accent text-glow">Logística.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-lg font-light leading-relaxed">
            Desplegamos infraestructura de alto rendimiento diseñada para la velocidad del mercado moderno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="futuristic-card group min-h-[500px] flex flex-col overflow-hidden">
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/90 to-transparent" />
              </div>

              <div className="p-10 flex-grow flex flex-col justify-between relative">
                <div>
                  <div className="text-accent/60 text-[10px] font-black uppercase tracking-widest mb-6 px-3 py-1 border border-accent/20 inline-block">
                    {service.tag}
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm font-light">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent">Saber Más</span>
                    <span className="w-6 h-[1px] bg-accent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
    </section>
  )
}
