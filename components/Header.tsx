import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = (e: React.MouseEvent) => {
        // Only trigger scroll if we are on the home page (which is the case for this landing page)
        // If we want it to always scroll to top on click:
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Update URL to remove hashes if needed
        window.history.pushState("", document.title, window.location.pathname);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-2 shadow-[0_10px_30px_-10px_rgba(2,6,23,0.7)]' : 'bg-transparent py-6'}`}>
            <div className="container flex items-center justify-between">
                <Link href="/" onClick={scrollToTop} className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img src="/images/Logo%20Aaron%20blanco.png" alt="2e2a Logo" className="h-9 md:h-12 relative transition-transform duration-500 group-hover:scale-110" />
                    </div>
                </Link>

                <nav className="hidden lg:flex items-center gap-12">
                    {['Servicios', 'Beneficios', 'Contacto'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative text-xs font-black uppercase tracking-[0.3em] text-slate-400 hover:text-accent transition-colors group"
                        >
                            {item}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#00f2ff]" />
                        </Link>
                    ))}
                    <Link href="/login" className="px-8 py-3 bg-accent text-primary text-[10px] font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,242,255,0.6)] transition-all duration-300 transform hover:-translate-y-1">
                        Portal 2e2a
                    </Link>
                </nav>

                <button className="lg:hidden text-accent">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </header>
    )
}
