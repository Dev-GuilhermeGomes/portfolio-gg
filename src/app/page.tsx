import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import LanguagesSphere from "@/components/languages-sphere";
import { coreSkills } from "@/data/site-data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto w-full max-w-7xl px-4 py-14 text-center sm:px-8 lg:py-20">
          <h1 className="mb-5 text-6xl font-medium text-black dark:text-white sm:text-7xl">Guilherme Gomes</h1>
          <p className="mb-5 text-4xl text-slate-700 dark:text-slate-300 sm:text-5xl"> Software Development Student</p>
          <p className="mx-auto mb-8 max-w-4xl text-2xl text-slate-600 dark:text-slate-400 sm:text-3xl">
            Building digital solutions and managing projects with passion for innovation and continuous growth to make a positive impact in the tech industry.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/portfolio"
              className="rounded-xl bg-red-600 px-8 py-3 text-2xl font-medium text-white transition hover:bg-red-700"
            >
              View Projects
            </Link>
            <Link
              href="/resume"
              className="rounded-xl border border-red-600 px-8 py-3 text-2xl font-medium text-red-600 dark:text-red-400 transition hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              Download CV
            </Link>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-20 text-center sm:px-8">
          <h2 className="mb-12 text-5xl font-medium text-black dark:text-white">Programming Languages & Technologies</h2>
          <LanguagesSphere />
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-10 text-center sm:px-8">
          <h2 className="mb-6 text-5xl font-medium text-black dark:text-white">Core Skills</h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {coreSkills.map((skill) => (
              <li key={skill} className="rounded-full bg-slate-100 dark:bg-slate-800 px-5 py-2 text-2xl text-slate-600 dark:text-slate-300">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-14 sm:px-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8">
            <h3 className="mb-4 text-5xl font-medium text-black dark:text-white">Software Development</h3>
            <p className="mb-6 text-2xl leading-relaxed text-slate-600 dark:text-slate-400">
              Developing modern web applications using cutting-edge technologies like React, TypeScript, and Node.js.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex rounded-xl border border-red-600 px-6 py-3 text-2xl font-medium text-red-600 dark:text-red-400 transition hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              View Projects
            </Link>
          </article>

          <article className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8">
            <h3 className="mb-4 text-5xl font-medium text-black dark:text-white">Project Management</h3>
            <p className="mb-6 text-2xl leading-relaxed text-slate-600 dark:text-slate-400">
              Leading teams and managing projects using Agile methodologies, Scrum, and modern PM tools.
            </p>
            <Link
              href="/management"
              className="inline-flex rounded-xl border border-red-600 px-6 py-3 text-2xl font-medium text-red-600 dark:text-red-400 transition hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              View Management Projects
            </Link>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}