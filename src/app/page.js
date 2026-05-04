import Image from "next/image";
import { Button } from "@heroui/react";
import Hero from "@/components/shared/Hero/Hero";
import FeaturedAnimals from "@/components/ui/Home/FeaturedAnimals/FeaturedAnimals";

export default function Home() {
  return (
    <>
      <Hero
        title={"Your Trusted Qurbani Marketplace"}
        ctaText={"Browse all collection"}
        ctaLink={"/animals"}
        bannerImg={"/Banner1.jpg"}
        className={"md:flex-row-reverse!"}
      >
        Discover healthy cows, goats, and sheep from verified sellers. Make your
        Qurbani preparation easier with transparent pricing and convenient
        booking.
      </Hero>
      <FeaturedAnimals></FeaturedAnimals>
    </>
  );
}
