import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! I will get back to you within 24 hours.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 bg-white/70 dark:bg-zinc-900/60 backdrop-blur">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Let's work together</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Tell me about your project and timeline.</p>
          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <input required name="name" placeholder="Name" className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" />
            <input required type="email" name="email" placeholder="Email" className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea required name="message" rows="5" placeholder="Project details" className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" />
            <div className="flex items-center justify-between">
              <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 px-5 py-3 text-white font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all">
                Send Message
              </button>
              <p className="text-sm text-green-600">{status}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
