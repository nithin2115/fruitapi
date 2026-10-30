import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-green-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-2xl font-extrabold text-green-700">
          🍃 Fruityvice
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-green-700">Home</Link>
          <a href="#explore" className="hover:text-green-700">Explore Fruits</a>
          <a href="#about" className="hover:text-green-700">About</a>
        </div>
      </div>
    </nav>
  );
}