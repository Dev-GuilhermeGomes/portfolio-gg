import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { portfolioProjects } from "@/data/site-data";
import Link from "next/link";

const bannerStyles = [
  "bg-[linear-gradient(120deg,#d9d9d9_0%,#efefef_100%)]",
  "bg-[linear-gradient(120deg,#daecff_0%,#ffd5df_100%)]",
  "bg-[linear-gradient(120deg,#d1e5ff_0%,#f4f7ff_100%)]",
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 lg:py-16">
        <header className="mb-12 text-center">
          <h1 className="mb-5 text-6xl font-medium text-black">Portfolio</h1>
          <p className="text-4xl text-slate-600">A showcase of my software development projects</p>
        </header>

        <section className="grid gap-8 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <article key={project.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className={`h-56 ${bannerStyles[index % bannerStyles.length]}`} />

              <div className="space-y-5 p-6">
                <h2 className="text-4xl font-medium text-black">{project.title}</h2>
                <p className="text-2xl leading-relaxed text-slate-600">{project.description}</p>

                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xl text-slate-600">
                      {tech}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/portfolio/${project.slug}`}
                  className="w-full rounded-xl border border-red-600 px-4 py-3 text-2xl font-medium text-red-600 transition hover:bg-red-50"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
