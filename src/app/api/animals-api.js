// Base url: https://programming-hero-b13-a08-json-data-1.onrender.com/animals
//
//

export async function getAnimals() {
  const res = await fetch(
    "https://programming-hero-b13-a08-json-data-1.onrender.com/animals",
  );
  const data = await res.json();

  return data;
}
