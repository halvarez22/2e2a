import { useState } from 'react'
import { auth } from '../lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/')
    } catch (err: any) {
      setError('Credenciales inválidas o error de conexión.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden bg-primary">
      <Head>
        <title>Acceso Clientes | 2e2a</title>
      </Head>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="relative z-10 w-full max-w-md animate-fade-in">
        <div className="text-center mb-10">
          <Link href="/">
            <img src="/images/Logo%20Aaron%20blanco.png" alt="2e2a" className="h-12 mx-auto mb-8 cursor-pointer hover:scale-105 transition-transform" />
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Portal de Clientes</h1>
          <p className="text-slate-400">Ingrese sus credenciales para gestionar sus operaciones.</p>
        </div>

        <div className="glass-card p-10 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Correo Electrónico</label>
              <input
                required
                type="email"
                placeholder="usuario@empresa.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-primary/50 border border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-white"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-slate-300">Contraseña</label>
                <Link href="#" className="text-xs text-accent hover:underline">¿Olvidó su contraseña?</Link>
              </div>
              <input
                required
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-primary/50 border border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-white"
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-5 flex items-center justify-center gap-3 disabled:opacity-50 disabled:scale-100"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              ) : null}
              {loading ? 'Autenticando...' : 'Iniciar Sesión'}
            </button>
          </form>
        </div>

        <p className="text-center mt-8 text-slate-500 text-sm">
          ¿No tiene cuenta? <Link href="#contact" className="text-accent font-semibold hover:underline">Contacte a su asesor</Link>
        </p>
      </div>
    </div>
  )
}
