import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { coreSkills } from "@/data/site-data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto w-full max-w-7xl px-4 py-14 text-center sm:px-8 lg:py-20">
          <h1 className="mb-5 text-6xl font-medium text-black sm:text-7xl">Guilherme Gomes</h1>
          <p className="mb-5 text-4xl text-slate-700 sm:text-5xl">Project Management & Software Development Student</p>
          <p className="mx-auto mb-8 max-w-4xl text-2xl text-slate-600 sm:text-3xl">
            Building digital solutions and managing projects with passion for innovation and continuous growth
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
              className="rounded-xl border border-red-600 px-8 py-3 text-2xl font-medium text-red-600 transition hover:bg-red-50"
            >
              Download CV
            </Link>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-10 text-center sm:px-8">
          <h2 className="mb-6 text-5xl font-medium text-black">Core Skills</h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {coreSkills.map((skill) => (
              <li key={skill} className="rounded-full bg-slate-100 px-5 py-2 text-2xl text-slate-600">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-14 sm:px-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="mb-4 text-5xl font-medium text-black">Software Development</h3>
            <p className="mb-6 text-2xl leading-relaxed text-slate-600">
              Developing modern web applications using cutting-edge technologies like React, TypeScript, and Node.js.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex rounded-xl border border-red-600 px-6 py-3 text-2xl font-medium text-red-600 transition hover:bg-red-50"
            >
              View Projects
            </Link>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="mb-4 text-5xl font-medium text-black">Project Management</h3>
            <p className="mb-6 text-2xl leading-relaxed text-slate-600">
              Leading teams and managing projects using Agile methodologies, Scrum, and modern PM tools.
            </p>
            <Link
              href="/management"
              className="inline-flex rounded-xl border border-red-600 px-6 py-3 text-2xl font-medium text-red-600 transition hover:bg-red-50"
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