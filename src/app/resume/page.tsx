import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  cvRequestMailto,
  education,
  experiences,
  hardSkills,
  hobbies,
  languages,
  softSkills,
} from "@/data/site-data";

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-8 lg:py-14">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-6xl font-medium text-black">Resume</h1>
          <a
            href={cvRequestMailto}
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-2xl font-medium text-white transition hover:bg-red-700"
          >
            Download CV (PDF)
          </a>
        </header>

        <section className="space-y-6">
          <article className="rounded-2xl bg-slate-50 p-6 sm:p-8">
            <h2 className="mb-5 text-5xl font-medium text-black">Soft Skills</h2>
            <ul className="grid gap-3 text-2xl text-slate-600 sm:grid-cols-2 lg:grid-cols-3">
              {softSkills.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-slate-50 p-6 sm:p-8">
            <h2 className="mb-5 text-5xl font-medium text-black">Hard Skills</h2>
            <div className="space-y-4">
              {hardSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-2xl text-slate-600">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-200">
                    <div className="h-3 rounded-full bg-red-600" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-slate-50 p-6 sm:p-8">
            <h2 className="mb-6 text-5xl font-medium text-black">Experience</h2>
            <div className="space-y-8">
              {experiences.map((experience) => (
                <div key={experience.role} className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-4xl font-medium text-black">{experience.role}</h3>
                  <p className="mb-2 text-2xl text-slate-600">
                    {experience.company} | {experience.period}
                  </p>
                  <p className="text-2xl text-slate-600">{experience.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-slate-50 p-6 sm:p-8">
            <h2 className="mb-6 text-5xl font-medium text-black">Education</h2>
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.degree} className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-4xl font-medium text-black">{item.degree}</h3>
                  <p className="mb-2 text-2xl text-slate-600">
                    {item.institution} | {item.period}
                  </p>
                  <p className="text-2xl text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-slate-50 p-6 sm:p-8">
            <h2 className="mb-5 text-5xl font-medium text-black">Languages</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {languages.map((language) => (
                <div key={language.name} className="rounded-xl bg-white p-4 text-center">
                  <p className="text-2xl text-black">{language.name}</p>
                  <p className="mt-1 text-2xl text-red-600">{language.level}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-slate-50 p-6 sm:p-8">
            <h2 className="mb-5 text-5xl font-medium text-black">Hobbies & Interests</h2>
            <ul className="flex flex-wrap gap-3">
              {hobbies.map((hobby) => (
                <li key={hobby} className="rounded-full bg-rose-50 px-4 py-2 text-xl text-red-600">
                  {hobby}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
