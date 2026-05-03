import { getAnimals } from "../api/animals-api";

export default async function Animals() {
  console.log(await getAnimals());
  return (
    <>
      <h1 className="">Hi, from Animals</h1>
    </>
  );
}
