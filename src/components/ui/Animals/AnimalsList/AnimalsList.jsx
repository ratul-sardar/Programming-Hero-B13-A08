"use client";

import { Button, Card, Chip } from "@heroui/react";
import { getAnimals } from "@/app/api/animals-api";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/loading";
import { FaMapMarked } from "react-icons/fa";

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
    <section className="bg-background-secondary">
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
      </div>
    </section>
  );
}
