import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-lime-50 to-white px-5 py-24">
      <div className="mx-auto max-w-7xl text-center">
        <span className="mb-5 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          🍎 Discover the world of fruits
        </span>

        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Explore the <span className="text-green-600">World of Fruits</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Discover nutritional information, explore different fruit varieties,
          and learn more about the fruits you enjoy every day.
        </p>

        <Link
          href="#explore"
          className="mt-9 inline-block rounded-xl bg-green-600 px-8 py-3 font-semibold text-white shadow-lg shadow-green-200 transition hover:bg-green-700"
        >
          Explore Fruits →
        </Link>
      </div>
    </section>
  );
}