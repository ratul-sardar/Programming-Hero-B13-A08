"use client";

import { Button, Card, Chip, CloseButton } from "@heroui/react";
import { getAnimals } from "@/app/api/animals-api";
import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/loading";

export default function AnimalsList() {
  //Filters state
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState("Price low to high");
  const [filterValue, setFilterValue] = useState("?_sort=price");

  //Fetching data
  const [animals, setAnimals] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const data = await getAnimals(filterValue);
      setAnimals(data);
      setLoading(false);
    }

    getData();
  }, [filterValue]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <section className="">
      <div className="cssContainer">
        {/* List Filter*/}
        <div className="w-full space-y-10">
          <h2 className="text-center">All Animal Collection</h2>

          <div className="w-full flex items-center justify-end gap-3">
            <p className="">Sort by price:</p>
            <div
              onClick={() => setShowFilter(!showFilter)}
              className="relative w-fit min-w-40  bg-white border rounded-2xl py-1.5 px-2 cursor-pointer"
            >
              {filter}

              {/* Dropdown*/}
              <div
                className={`${showFilter ? "block" : "hidden"} absolute z-10 top-[110%] left-0 w-fit min-w-40  bg-white border rounded-2xl cursor-pointer`}
              >
                <button
                  onClick={() => {
                    setFilter("Low to high");
                    setFilterValue("?_sort=price");
                  }}
                  className={
                    "w-full cursor-pointer p-2 hover:bg-accent-hover/80 hover:text-white"
                  }
                >
                  Low to high
                </button>
                <button
                  onClick={() => {
                    setFilter("High to low");
                    setFilterValue("?_sort=-price");
                  }}
                  className={
                    "w-full cursor-pointer p-2 hover:bg-accent-hover/80 hover:text-white"
                  }
                >
                  High to low
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* List*/}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {animals.map((animal) => (
            <Card key={animal.id} className="w-full flex-col">
              <div className="relative w-full overflow-hidden rounded-2xl ">
                <Image
                  src={"/avatar.png"}
                  alt="product picture"
                  width={220}
                  height={220}
                  loading="lazy"
                  className="pointer-events-none h-full w-full object-cover select-none"
                ></Image>
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <Card.Header className="gap-1">
                  <Card.Title className="pr-8 mb-2.5">{animal.name}</Card.Title>
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
      </div>
    </section>
  );
}
