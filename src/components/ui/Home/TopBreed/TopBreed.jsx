import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarked, FaMapPin } from "react-icons/fa";

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
                  <Chip
                    color="accent"
                    className="absolute top-2 left-2 z-1 w-fit mb-5 shadow-md shadow-accent/20"
                  >
                    {animal.type}
                  </Chip>
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  <Card.Header className="mb-12">
                    <Card.Title className="pr-8 mb-3">{animal.name}</Card.Title>

                    <Card.Description className="mb-4">
                      {animal.description}
                    </Card.Description>
                    <p className="text-xl mb-2">
                      Price:{" "}
                      <span className="text-2xl text-success font-semibold">
                        ৳{animal.price}
                      </span>
                    </p>
                    <div className="flex gap-2">
                      <p className="flex items-center gap-1">
                        <span className=" text-xl">
                          <FaMapMarked></FaMapMarked>
                        </span>{" "}
                        Location:{" "}
                        <span className="text-accent text-xl font-medium">
                          {animal.location}
                        </span>
                      </p>
                    </div>
                  </Card.Header>
                  <Card.Footer className="w-full mt-auto flex">
                    <div className="w-full">
                      <Link href={`/animals/details/${animal.id}`}>
                        <Button className="w-full ">Details</Button>
                      </Link>
                    </div>
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
