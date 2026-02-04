import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-primary pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -mb-32 -mr-32" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-10 group">
                            <img src="/images/Logo%20Aaron%20blanco.png" alt="2e2a Logo" className="h-14 transition-transform group-hover:scale-110" />
                        </Link>
                        <p className="text-slate-500 max-w-sm leading-relaxed text-lg font-light">
                            Liderando la vanguardia en operaciones logísticas y soluciones <span className="text-white font-black tracking-widest text-xs">SQA</span>.
                            Conectando el continente con tecnología y precisión absoluta.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8">Navegación</h4>
                        <ul className="space-y-6">
                            {['Servicios', 'Beneficios', 'Contacto'].map(item => (
                                <li key={item}>
                                    <Link href={`#${item === 'Beneficios' ? 'features' : item.toLowerCase()}`} className="text-slate-400 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8">Hub de Soporte</h4>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 group">
                                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="text-white font-black text-xs uppercase">01 800 226 4652</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-white font-black text-[10px] uppercase">hola@2e2a.com.mx</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">
                        © {new Date().getFullYear()} 2e2a Operador Logístico. Precision Excellence.
                    </p>
                    <div className="flex gap-10">
                        {['Privacidad', 'Términos'].map(item => (
                            <Link key={item} href="#" className="text-slate-600 hover:text-accent text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300">{item}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
