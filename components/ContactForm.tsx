import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      setSent(true)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <section id="contacto" className="py-32 relative overflow-hidden bg-primary">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-6">Conexión Global</div>
            <h2 className="text-5xl md:text-7xl font-black mb-12 leading-[0.9] text-white uppercase tracking-tighter">
              Inicie su <br />
              <span className="text-accent text-glow">Proyecto.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-md font-light">
              Despliegue soluciones logísticas de alto impacto. Nuestro equipo de expertos está listo para optimizar su cadena de suministro.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Centro de Operaciones</div>
                  <div className="text-white font-black uppercase tracking-tight">01 800 226 4652</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Soporte Digital</div>
                  <div className="text-white font-black uppercase tracking-tight">hola@2e2a.com.mx</div>
                </div>
              </div>
            </div>
          </div>

          <div className="futuristic-card p-12 lg:p-16">
            {sent ? (
              <div className="text-center py-20 animate-fade-in">
                <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tighter">Transmisión Exitosa</h3>
                <p className="text-slate-400 font-light">Su requerimiento ha sido ingresado al sistema. Responderemos en breve.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Identidad</label>
                    <input
                      required
                      placeholder="Nombre Completo"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 p-5 focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all text-white placeholder:text-slate-600 font-light"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Canal de Contacto</label>
                    <input
                      required
                      type="email"
                      placeholder="Email Corporativo"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 p-5 focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all text-white placeholder:text-slate-600 font-light"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Especificaciones</label>
                  <textarea
                    required
                    placeholder="Detalles de la operación..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-5 min-h-[180px] focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all text-white placeholder:text-slate-600 font-light"
                  />
                </div>
                <button type="submit" className="w-full btn-futuristic">
                  Desplegar Solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
