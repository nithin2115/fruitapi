import FruitCard from "./FruitCard";

export default function FruitList({ fruits }) {
  if (fruits.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-5xl">🍃</p>
        <h3 className="mt-4 text-xl font-bold text-gray-800">
          No fruits found
        </h3>
        <p className="mt-2 text-gray-500">
          Try searching with a different name or family.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {fruits.map((fruit) => (
        <FruitCard key={fruit.id} fruit={fruit} />
      ))}
    </div>
  );
}