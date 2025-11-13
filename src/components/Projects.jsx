import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "SaaS Dashboard",
    desc: "Analytics-first admin dashboard with role-based access and charts.",
    tags: ["React", "Tailwind", "Charts"],
    link: "#"
  },
  {
    title: "E-commerce Store",
    desc: "High-performance storefront with optimized images and search.",
    tags: ["Next.js", "Stripe", "SEO"],
    link: "#"
  },
  {
    title: "Portfolio Engine",
    desc: "Config-driven portfolio and blog with MDX and CMS integration.",
    tags: ["Vite", "MDX", "CMS"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Highlighted Projects</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">A few favorites I've built recently.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/70 dark:bg-zinc-900/60 backdrop-blur shadow-sm hover:shadow-lg transition-all"
            >
              <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{p.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors" />
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
