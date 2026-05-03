import { getAnimalsDetails } from "@/app/api/animals-api";
import { Chip } from "@heroui/react";
import Image from "next/image";

// {
//     id: 'a12',
//     name: 'Hybrid Sheep',
//     type: 'Sheep',
//     breed: 'Cross Breed',
//     price: 30000,
//     weight: 38,
//     age: 2.5,
//     location: 'Sylhet',
//     description: 'হাইব্রিড ভেড়া, ভালো স্বাস্থ্য এবং উন্নত মানের মাংস।',
//     image: 'https://i.postimg.cc/W1t0kXzK/sheep3.jpg',
//     category: 'Medium Animal'
//   }

export default async function Details({ params }) {
  const { id } = await params;
  const animalDetails = await getAnimalsDetails(id);
  const {
    name,
    type,
    breed,
    price,
    weight,
    age,
    location,
    description,
    category,
  } = animalDetails;
  console.log(animalDetails);

  return (
    <section>
      <div className="cssContainer grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-7 xl:gap-12">
        {/* <h1 className="">Hi, from details</h1>*/}
        {/* Left Panel*/}
        <div className="col-span-full xl:col-span-5">
          <Image
            src={"/avatar.png"}
            alt="product image"
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-auto object-contain"
          ></Image>
        </div>

        {/* Right Panel*/}
        <div className="bg-white rounded-4xl shadow-md shadow-accent/28 p-6 col-span-full xl:col-span-7">
          <h2 className="">{name}</h2>

          {/* Badges*/}
          <div className="flex gap-2">
            <Chip className="w-fit">
              <Chip.Label>{type}</Chip.Label>
            </Chip>
            <Chip color="success" className="w-fit">
              <Chip.Label>{breed}</Chip.Label>
            </Chip>
            <Chip color="success" className="w-fit">
              <Chip.Label>{category}</Chip.Label>
            </Chip>
          </div>
        </div>
      </div>
    </section>
  );
}
