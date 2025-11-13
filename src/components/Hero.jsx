import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur px-3 py-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300 border border-white/60 dark:border-white/10 shadow">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
            Available for freelance work
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-zinc-900 dark:text-white">
            I build fast, modern websites that convert.
          </h1>
          <p className="mt-4 text-zinc-700/90 dark:text-zinc-300/90 text-lg">
            Full‑stack developer focused on delightful UX, performance, and accessibility.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 px-5 py-3 text-white font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 px-5 py-3 text-zinc-800 dark:text-zinc-100 font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80 dark:from-zinc-950/60 dark:to-zinc-950/80" />
    </section>
  );
}
