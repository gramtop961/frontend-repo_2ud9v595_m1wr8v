import { Code2, Smartphone, Rocket, Brush } from "lucide-react";

const services = [
  { icon: Code2, title: "Web Apps", desc: "High‑quality responsive apps with modern stacks." },
  { icon: Smartphone, title: "Landing Pages", desc: "Conversion‑focused pages optimized for SEO and speed." },
  { icon: Brush, title: "UI/UX", desc: "Clean, accessible interfaces with strong visual hierarchy." },
  { icon: Rocket, title: "Performance", desc: "Core Web Vitals and Lighthouse optimizations." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Services</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">What I can help you with.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/70 dark:bg-zinc-900/60 backdrop-blur">
              <s.icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
