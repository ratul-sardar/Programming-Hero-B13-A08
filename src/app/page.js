import Image from "next/image";
import { Button } from "@heroui/react";
import Hero from "@/components/shared/Hero/Hero";
import FeaturedAnimals from "@/components/ui/Home/FeaturedAnimals/FeaturedAnimals";
import QurbanirTips from "@/components/ui/Home/QurbanirTips/QurbanirTips";
import TopBreed from "@/components/ui/Home/TopBreed/TopBreed";
import FaqSection from "@/components/ui/Home/FAQSection/FaqSection";
import FadeInUp from "@/components/shared/FadeInUp/FadeInUp";

export default function Home() {
  return (
    <>
      <FadeInUp>
        <Hero
          title={"Your Trusted Qurbani Marketplace"}
          ctaText={"Browse all collection"}
          ctaLink={"/animals"}
          bannerImg={"/Banner1.jpg"}
          className={"md:flex-row-reverse!"}
        >
          Discover healthy cows, goats, and sheep from verified sellers. Make
          your Qurbani preparation easier with transparent pricing and
          convenient booking.
        </Hero>
      </FadeInUp>
      <FadeInUp>
        <FeaturedAnimals></FeaturedAnimals>
      </FadeInUp>
      <FadeInUp>
        <QurbanirTips></QurbanirTips>
      </FadeInUp>
      <FadeInUp>
        <TopBreed></TopBreed>
      </FadeInUp>
      <FadeInUp>
        <FaqSection></FaqSection>
      </FadeInUp>
    </>
  );
}
