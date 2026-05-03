import { getAnimalsDetails } from "@/app/api/animals-api";
import BookingForm from "@/components/ui/Animals/Details/BookingForm/BookingForm";
import { Chip } from "@heroui/react";
import Image from "next/image";
import { IoMdPin } from "react-icons/io";

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
    image,
    type,
    breed,
    price,
    weight,
    age,
    location,
    description,
    category,
  } = animalDetails;

  return (
    <section>
      <div className="cssContainer grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-7 xl:gap-12">
        {/* Left Panel*/}
        <div className="col-span-full xl:col-span-5">
          <Image
            src={image}
            alt="product image"
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-auto object-contain"
          ></Image>
        </div>

        {/* Right Panel*/}
        <div className="bg-white rounded-4xl shadow-md shadow-accent/28 p-6 col-span-full xl:col-span-7">
          <h2 className="mb-2">{name}</h2>

          {/* Badges*/}
          <div className="flex gap-2 mb-8">
            <Chip className="w-fit">
              <Chip.Label>{type}</Chip.Label>
            </Chip>
            <Chip color="accent" className="w-fit">
              <Chip.Label>{breed}</Chip.Label>
            </Chip>
            <Chip color="warning" className="w-fit">
              <Chip.Label>{category}</Chip.Label>
            </Chip>
          </div>

          {/* Price*/}
          <p className="text-xl! text-gray-600 mb-2">
            Price:{" "}
            <span className="font-semibold text-2xl text-black"> ৳{price}</span>
          </p>

          {/* More Badge*/}
          <div className="flex gap-2 mb-2">
            <Chip color="success" className="w-fit">
              <Chip.Label>{`Age: ${age} years`}</Chip.Label>
            </Chip>
            <Chip color="success" className="w-fit">
              <Chip.Label>{`Weight: ${weight}kg`}</Chip.Label>
            </Chip>
          </div>

          {/* Location*/}
          <div className="flex gap-2 items-center mb-4">
            <span className="">
              <IoMdPin></IoMdPin>
            </span>
            {location}
          </div>

          {/* Details*/}
          <p className="text-gray-500 mb-8">{description}</p>

          {/* Booking Form*/}
          <div className="w-full bg-background-secondary flex items-center justify-center p-6 rounded-2xl">
            <BookingForm></BookingForm>
          </div>
        </div>
      </div>
    </section>
  );
}
