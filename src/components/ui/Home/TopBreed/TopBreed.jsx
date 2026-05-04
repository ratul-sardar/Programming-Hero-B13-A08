import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default async function TopBreed() {
  const res = await fetch(
    `https://programming-hero-b13-a08-json-data-1.onrender.com/animals?id:in=a1,a3,a10`,
  );
  const animalData = await res.json();
  console.log(animalData);

  return (
    <section className="">
      <div className="cssContainer">
        {/* Heading*/}
        <header className="text-center space-y-4">
          <h2 className="">Popular Qurbani Breeds</h2>
          <p className="">
            Explore some of the most preferred and trusted animal breeds for
            Qurbani.
          </p>
        </header>

        {/* Contents*/}
        <div className="flex flex-col gap-8 items-center">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {animalData.map((animal) => (
              <Card key={animal.id} className="w-full flex-col">
                <div className="relative w-full overflow-hidden rounded-2xl ">
                  <Image
                    src={animal.image}
                    alt="product picture"
                    width={220}
                    height={220}
                    loading="lazy"
                    className="pointer-events-none h-full w-full object-cover select-none"
                  ></Image>
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  <Card.Header className="gap-1">
                    <Card.Title className="pr-8 mb-2.5">
                      {animal.name}
                    </Card.Title>
                    <Chip color="accent" className="w-fit mb-5">
                      {animal.type}
                    </Chip>
                    <Card.Description>{animal.description}</Card.Description>
                    <div className="flex gap-2 items-center my-2">
                      <span className="">Price:</span>
                      <span className="">
                        <Chip variant={"md"} color="success" className="w-fit">
                          <Chip.Label>{animal.price}</Chip.Label>
                        </Chip>
                      </span>
                    </div>
                  </Card.Header>
                  <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex gap-2">
                      <span className="">Location: </span>
                      <span className="">
                        <Chip variant={"md"} color="success" className="w-fit">
                          <Chip.Label>{animal.location}</Chip.Label>
                        </Chip>
                      </span>
                    </div>
                    <Link href={`/animals/details/${animal.id}`}>
                      <Button className="w-full sm:w-auto">Details</Button>
                    </Link>
                  </Card.Footer>
                </div>
              </Card>
            ))}
          </div>
          {/* <Link href={"/animals"}>
            <Button>All Collection</Button>
          </Link>*/}
        </div>
      </div>
    </section>
  );
}
