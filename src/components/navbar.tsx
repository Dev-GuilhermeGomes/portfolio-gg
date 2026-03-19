import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white flex justify-between p-4">
      <h1 className="text-red-500 font-bold">Guilherme Gomes</h1>

      <ul className="flex gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}