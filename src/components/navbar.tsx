"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/theme-context";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Management", href: "/management" },
  ];

  return (
    <nav className="w-full border-b border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-4 sm:px-8 transition">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <h1 className="text-lg font-medium text-black dark:text-white">GG</h1>

        <ul className="flex flex-wrap gap-5 text-sm sm:gap-8 items-center">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`transition ${
                    isActive
                      ? "text-red-500 dark:text-red-400 font-medium"
                      : "text-black dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-gray-700 text-black dark:text-white hover:bg-slate-200 dark:hover:bg-gray-600 transition"
              aria-label="Toggle dark mode">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}