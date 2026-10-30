export default function Footer() {
  return (
    <footer id="about" className="bg-gray-900 px-5 py-10 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-2xl font-bold text-green-400">
          🍃 Fruityvice
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400">
          Discover different fruits, explore their families, and learn about
          their nutritional values through our fruit collection.
        </p>

        <p className="mt-6 text-xs text-gray-500">
          Powered by the Fruityvice API.
        </p>

        <p className="mt-2 text-xs text-gray-500">
          © 2026 Fruityvice Explorer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}