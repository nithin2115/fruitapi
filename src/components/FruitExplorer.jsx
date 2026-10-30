"use client";

import { useEffect, useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import FruitList from "./FruitList";

export default function FruitExplorer() {
  const [fruits, setFruits] = useState([]);
  const [search, setSearch] = useState("");
  const [family, setFamily] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchFruits() {
      try {
        const response = await fetch("/api/fruits/all");

        if (!response.ok) {
          throw new Error("Unable to fetch fruits.");
        }

        const data = await response.json();
        setFruits(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchFruits();
  }, []);

  const families = useMemo(
    () => [...new Set(fruits.map((fruit) => fruit.family).filter(Boolean))].sort(),
    [fruits]
  );

  const filteredFruits = useMemo(() => {
    let result = fruits.filter((fruit) => {
      const matchesSearch = fruit.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFamily =
        family === "all" || fruit.family === family;

      return matchesSearch && matchesFamily;
    });

    result = [...result].sort((a, b) => {
      if (sortBy === "calories") {
        return a.nutritions.calories - b.nutritions.calories;
      }

      if (sortBy === "sugar") {
        return a.nutritions.sugar - b.nutritions.sugar;
      }

      return a.name.localeCompare(b.name);
    });

    return result;
  }, [fruits, search, family, sortBy]);

  return (
    <section id="explore" className="bg-gray-50 px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-widest text-green-600">
            Fruit Collection
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Fruits
          </h2>

          <p className="mt-3 text-gray-500">
            Browse and discover nutritional information about different fruits.
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-1">
            <SearchBar search={search} setSearch={setSearch} />
          </div>

          <select
            value={family}
            onChange={(e) => setFamily(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none focus:border-green-500"
          >
            <option value="all">All Families</option>
            {families.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none focus:border-green-500"
          >
            <option value="name">Sort by Name</option>
            <option value="calories">Sort by Calories</option>
            <option value="sugar">Sort by Sugar</option>
          </select>
        </div>

        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing <strong className="text-gray-800">{filteredFruits.length}</strong> fruits
          </p>

          <button
            onClick={() => {
              setSearch("");
              setFamily("all");
              setSortBy("name");
            }}
            className="text-sm font-semibold text-green-700 hover:text-green-900"
          >
            Reset filters
          </button>
        </div>

        {loading ? (
          <p className="py-16 text-center text-gray-500">
            Loading fruits...
          </p>
        ) : error ? (
          <p className="py-16 text-center text-red-600">{error}</p>
        ) : (
          <FruitList fruits={filteredFruits} />
        )}
      </div>
    </section>
  );
}