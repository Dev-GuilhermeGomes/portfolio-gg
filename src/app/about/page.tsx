import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { aboutProfile, contactInfo } from "@/data/site-data";

function ContactIcon({ type }: { type: "email" | "linkedin" | "github" }) {
  if (type === "email") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 text-slate-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5 12 13.5l8.25-6M4.5 5.25h15A2.25 2.25 0 0 1 21.75 7.5v9A2.25 2.25 0 0 1 19.5 18.75h-15A2.25 2.25 0 0 1 2.25 16.5v-9A2.25 2.25 0 0 1 4.5 5.25Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 text-slate-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 8.25v9m0-12v.008h-.008V5.25H6.75Zm4.5 12v-5.25a2.25 2.25 0 1 1 4.5 0v5.25m-9 0H6a2.25 2.25 0 0 1-2.25-2.25V8.25A2.25 2.25 0 0 1 6 6h12a2.25 2.25 0 0 1 2.25 2.25V15A2.25 2.25 0 0 1 18 17.25h-2.25" />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 text-slate-600">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 2.25a9.75 9.75 0 0 0-3.082 19.001c.488.09.667-.212.667-.47 0-.233-.009-.85-.014-1.668-2.713.59-3.285-1.308-3.285-1.308a2.583 2.583 0 0 0-1.084-1.427c-.886-.606.067-.594.067-.594a2.045 2.045 0 0 1 1.493 1.005 2.073 2.073 0 0 0 2.832.808 2.07 2.07 0 0 1 .618-1.3c-2.166-.246-4.444-1.084-4.444-4.826a3.776 3.776 0 0 1 1.005-2.62 3.507 3.507 0 0 1 .095-2.584s.82-.263 2.686 1.001a9.261 9.261 0 0 1 4.894 0c1.866-1.264 2.684-1.001 2.684-1.001a3.508 3.508 0 0 1 .097 2.584 3.768 3.768 0 0 1 1.003 2.62c0 3.752-2.282 4.576-4.456 4.816a2.32 2.32 0 0 1 .66 1.802c0 1.3-.012 2.347-.012 2.665 0 .26.176.565.673.469A9.75 9.75 0 0 0 11.999 2.25Z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-8 lg:py-12">
        <h1 className="mb-8 text-center text-5xl font-medium text-black sm:mb-10">About Me</h1>

        <section className="grid gap-8 lg:grid-cols-2">
          <article>
            <div className="mb-6 flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-[linear-gradient(145deg,#0f172a_0%,#1e293b_100%)] text-white shadow-lg">
              <span className="text-5xl font-semibold tracking-wider">{aboutProfile.logoLabel}</span>
              <span className="mt-1 text-sm uppercase tracking-[0.3em] text-slate-300">Portfolio</span>
            </div>

            <h2 className="mb-2 text-4xl font-medium text-black">{aboutProfile.name}</h2>
            <p className="mb-4 text-2xl text-red-600">{aboutProfile.role}</p>
            <p className="mb-6 text-2xl leading-relaxed text-slate-600">
              {aboutProfile.summary}
            </p>
            <p className="mb-8 text-2xl leading-relaxed text-slate-600">
              {aboutProfile.details}
            </p>

            <h3 className="mb-5 text-4xl font-medium text-black">Contact Information</h3>
            <div className="space-y-3 text-2xl text-slate-600">
              <p className="flex items-center gap-3">
                <ContactIcon type="email" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-black">
                  {contactInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <ContactIcon type="linkedin" />
                <a
                  href={contactInfo.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black"
                >
                  {contactInfo.linkedin.display}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <ContactIcon type="github" />
                <a href={contactInfo.github.url} target="_blank" rel="noreferrer" className="hover:text-black">
                  github.com/{contactInfo.github.username}
                </a>
              </p>
            </div>
          </article>

          <aside className="rounded-2xl bg-slate-50 p-6 sm:p-8">
            <h3 className="mb-5 text-5xl font-medium text-black">Get In Touch</h3>
            <form
              className="space-y-5"
              action={`mailto:${contactInfo.email}`}
              method="post"
              encType="text/plain"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-2xl text-slate-600">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-xl outline-none transition focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-2xl text-slate-600">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-xl outline-none transition focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-2xl text-slate-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-xl outline-none transition focus:border-red-500"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-red-600 px-4 py-3 text-2xl font-medium text-white transition hover:bg-red-700"
              >
                Send Message
              </button>
            </form>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
