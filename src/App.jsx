import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>

      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 text-sm text-zinc-600 dark:text-zinc-400 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p className="opacity-80">Built with React + Tailwind</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
