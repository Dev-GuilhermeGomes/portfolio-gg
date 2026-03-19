import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { portfolioProjects } from "@/data/site-data";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-8 lg:py-14">
        <Link href="/portfolio" className="mb-6 inline-flex text-xl text-red-600 hover:text-red-700">
          Back to Portfolio
        </Link>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h1 className="mb-3 text-5xl font-medium text-black">{project.title}</h1>
          <p className="mb-6 text-2xl leading-relaxed text-slate-600">{project.longDescription}</p>

          <h2 className="mb-3 text-3xl font-semibold text-black">Tech Stack</h2>
          <ul className="mb-8 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-lg text-slate-700">
                {tech}
              </li>
            ))}
          </ul>

          <h2 className="mb-3 text-3xl font-semibold text-black">Highlights</h2>
          <ul className="mb-8 list-disc space-y-2 pl-6 text-xl text-slate-600">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-red-600 px-5 py-3 text-xl font-medium text-white hover:bg-red-700"
              >
                Live Demo
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-red-600 px-5 py-3 text-xl font-medium text-red-600 hover:bg-red-50"
              >
                Repository
              </a>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
