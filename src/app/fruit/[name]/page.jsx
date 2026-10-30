import Link from "next/link";
import { Suspense } from "react";
export const instant = false;

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

async function getFruit(name) {
  try {
    const response = await fetch(
      `https://www.fruityvice.com/api/fruit/${encodeURIComponent(name)}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) return null;

    return await response.json();
  } catch (error) {
    console.error("Error fetching fruit:", error);
    return null;
  }
}

function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-green-50">
      <p className="text-xl font-semibold text-green-700">
        Loading fruit details...
      </p>
    </main>
  );
}

async function FruitDetailsContent({ params }) {
  const { name } = await params;
  const fruit = await getFruit(name);

  if (!fruit || !fruit.name) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-green-50">
        <div className="text-7xl">🍂</div>
        <h1 className="mt-5 text-3xl font-bold text-gray-800">
          Fruit not found
        </h1>
        <Link
          href="/"
          className="mt-5 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
        >
          Back to fruits
        </Link>
      </main>
    );
  }

  const emoji = fruitEmojis[fruit.name.toLowerCase()] || "🍏";

  const nutrients = [
    { label: "Calories", value: fruit.nutritions?.calories, unit: "kcal" },
    { label: "Carbohydrates", value: fruit.nutritions?.carbohydrates, unit: "g" },
    { label: "Protein", value: fruit.nutritions?.protein, unit: "g" },
    { label: "Fat", value: fruit.nutritions?.fat, unit: "g" },
    { label: "Sugar", value: fruit.nutritions?.sugar, unit: "g" },
  ];

  return (
    <main className="min-h-screen bg-green-50 px-5 py-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="font-semibold text-green-700 hover:text-green-900"
        >
          ← Back to fruits
        </Link>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-lg sm:p-12">
          <div className="text-center">
            <div className="text-8xl">{emoji}</div>

            <h1 className="mt-5 text-4xl font-extrabold capitalize text-gray-900">
              {fruit.name}
            </h1>

            <p className="mt-3 text-gray-500">
              {fruit.family} · {fruit.genus}
            </p>
          </div>

          <h2 className="mb-5 mt-12 text-xl font-bold text-gray-900">
            Nutritional Information
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {nutrients.map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-green-50 p-5"
              >
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="mt-2 text-2xl font-bold text-green-800">
                  {item.value ?? "N/A"} {item.unit}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-gray-50 p-6">
            <h2 className="text-xl font-bold text-gray-800">
              Fruit Classification
            </h2>

            <div className="mt-4 space-y-3 text-gray-600">
              <p><strong>Family:</strong> {fruit.family}</p>
              <p><strong>Order:</strong> {fruit.order}</p>
              <p><strong>Genus:</strong> {fruit.genus}</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Explore More Fruits
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function FruitDetails({ params }) {
  return (
    <Suspense fallback={<Loading />}>
      <FruitDetailsContent params={params} />
    </Suspense>
  );
}
