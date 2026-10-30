
const BASE_URL = "https://www.fruityvice.com/api/fruit";

export async function getAllFruits() {
  const response = await fetch(`${BASE_URL}/all`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch fruits");
  }

  return response.json();
}

export async function getFruitByName(name) {
  const response = await fetch(
    `${BASE_URL}/${encodeURIComponent(name)}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Fruit not found");
  }

  return response.json();
}
