import Hero from "@/components/shared/Hero/Hero";
import AnimalsList from "@/components/ui/Animals/AnimalsList/AnimalsList";

export default async function Animals() {
  return (
    <>
      <Hero
        title={"Find Your Perfect Animal"}
        bannerImg={"/Banner2.jpg"}
        ctaText={""}
      >
        From premium breeds to budget-friendly options, explore our full
        collection of Qurbani animals. Sort by price to find exactly what you’re
        looking for.
      </Hero>
      <AnimalsList></AnimalsList>
    </>
  );
}
