// Base url: https://programming-hero-b13-a08-json-data-1.onrender.com/animals
//
//

export async function getAnimals(filter) {
  const res = await fetch(
    `https://programming-hero-b13-a08-json-data-1.onrender.com/animals${filter}`,
  );
  const data = await res.json();

  return data;
}

export async function getAnimalsDetails(id) {
  const res = await fetch(
    `https://programming-hero-b13-a08-json-data-1.onrender.com/animals/${id}`,
  );
  const data = res.json();
  return data;
}
