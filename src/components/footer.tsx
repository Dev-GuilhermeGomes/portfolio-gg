import Link from "next/link";
import { contactInfo } from "@/data/site-data";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="text-slate-600 dark:text-slate-300 transition hover:text-slate-900 dark:hover:text-white"
      target="_blank"
      rel="noreferrer"
    >
      <span className="sr-only">{label}</span>
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-black/20 bg-white dark:bg-black px-6 py-6 text-slate-700 dark:text-slate-300 sm:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 text-sm sm:flex-row sm:items-center">
        <p>© 2026 Guilherme Gomes. All rights reserved.</p>

        <div className="flex items-center gap-5">
          <SocialIcon href={`mailto:${contactInfo.email}`} label="Email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 7.5 12 13.5l8.25-6M4.5 5.25h15A2.25 2.25 0 0 1 21.75 7.5v9A2.25 2.25 0 0 1 19.5 18.75h-15A2.25 2.25 0 0 1 2.25 16.5v-9A2.25 2.25 0 0 1 4.5 5.25Z"
              />
            </svg>
          </SocialIcon>

          <SocialIcon href={contactInfo.linkedin.url} label="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 8.25v9m0-12v.008h-.008V5.25H6.75Zm4.5 12v-5.25a2.25 2.25 0 1 1 4.5 0v5.25m-9 0H6a2.25 2.25 0 0 1-2.25-2.25V8.25A2.25 2.25 0 0 1 6 6h12a2.25 2.25 0 0 1 2.25 2.25V15A2.25 2.25 0 0 1 18 17.25h-2.25" />
            </svg>
          </SocialIcon>

          <SocialIcon href={contactInfo.github.url} label="GitHub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.999 2.25a9.75 9.75 0 0 0-3.082 19.001c.488.09.667-.212.667-.47 0-.233-.009-.85-.014-1.668-2.713.59-3.285-1.308-3.285-1.308a2.583 2.583 0 0 0-1.084-1.427c-.886-.606.067-.594.067-.594a2.045 2.045 0 0 1 1.493 1.005 2.073 2.073 0 0 0 2.832.808 2.07 2.07 0 0 1 .618-1.3c-2.166-.246-4.444-1.084-4.444-4.826a3.776 3.776 0 0 1 1.005-2.62 3.507 3.507 0 0 1 .095-2.584s.82-.263 2.686 1.001a9.261 9.261 0 0 1 4.894 0c1.866-1.264 2.684-1.001 2.684-1.001a3.508 3.508 0 0 1 .097 2.584 3.768 3.768 0 0 1 1.003 2.62c0 3.752-2.282 4.576-4.456 4.816a2.32 2.32 0 0 1 .66 1.802c0 1.3-.012 2.347-.012 2.665 0 .26.176.565.673.469A9.75 9.75 0 0 0 11.999 2.25Z"
              />
            </svg>
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
}
