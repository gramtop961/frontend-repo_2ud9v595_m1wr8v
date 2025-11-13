export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 bg-white/70 dark:bg-zinc-900/60 backdrop-blur">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">About Me</h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I'm a website developer who loves crafting fast, accessible, and beautiful web experiences. I combine strong design sense with solid engineering to ship features that feel effortless.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
              <p className="font-semibold text-zinc-900 dark:text-white">5+ years</p>
              <p className="text-zinc-600 dark:text-zinc-400">Experience</p>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
              <p className="font-semibold text-zinc-900 dark:text-white">50+ projects</p>
              <p className="text-zinc-600 dark:text-zinc-400">Delivered</p>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
              <p className="font-semibold text-zinc-900 dark:text-white">100% focus</p>
              <p className="text-zinc-600 dark:text-zinc-400">On results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
