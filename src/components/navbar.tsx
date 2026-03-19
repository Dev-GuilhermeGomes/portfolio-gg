"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Management", href: "/management" },
  ];

  return (
    <nav className="w-full border-b border-gray-200 bg-[#f9f9f9] px-4 py-4 sm:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <h1 className="text-lg font-medium text-black">GG</h1>

        <ul className="flex flex-wrap gap-5 text-sm sm:gap-8">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`transition ${
                  isActive
                    ? "text-red-500 font-medium"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        </ul>
      </div>
    </nav>
  );
}