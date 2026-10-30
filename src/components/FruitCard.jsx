import Link from "next/link";

const fruitEmojis = {
  apple: "🍎",
  banana: "🍌",
  orange: "🍊",
  grape: "🍇",
  watermelon: "🍉",
  pineapple: "🍍",
  mango: "🥭",
  strawberry: "🍓",
  cherry: "🍒",
  kiwi: "🥝",
  lemon: "🍋",
  coconut: "🥥",
};

export default function FruitCard({ fruit }) {
  const emoji =
    fruitEmojis[fruit.name?.toLowerCase()] || "🍏";

  return (
    <Link
      href={`/fruit/${encodeURIComponent(fruit.name.toLowerCase())}`}
      className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
    >
      <div className="mb-5 flex h-24 items-center justify-center rounded-xl bg-green-50 text-6xl transition group-hover:bg-green-100">
        {emoji}
      </div>

      <h3 className="text-xl font-bold capitalize text-gray-900">
        {fruit.name}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {fruit.family || "Unknown family"}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-gray-50 p-3">
          <p className="text-xs text-gray-500">Calories</p>
          <p className="mt-1 font-bold text-gray-800">
            {fruit.nutritions?.calories ?? "N/A"}
          </p>
        </div>

        <div className="rounded-lg bg-gray-50 p-3">
          <p className="text-xs text-gray-500">Sugar</p>
          <p className="mt-1 font-bold text-gray-800">
            {fruit.nutritions?.sugar ?? "N/A"} g
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm font-semibold text-green-700">
        View details →
      </p>
    </Link>
  );
}