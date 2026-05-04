import getFeaturedAnimals from "@/app/api/animals-api";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default async function FeaturedAnimals() {
  let animalData = await getFeaturedAnimals(4);
  animalData = animalData.data;

  return (
    <section className=" ">
      <div className="cssContainer">
        <h2 className="">Featured Animals</h2>

        <div className="flex flex-col gap-8 items-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
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
          <Link href={"/animals"}>
            <Button>All Collection</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
