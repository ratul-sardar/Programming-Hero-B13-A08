import {
  FaBone,
  FaCheck,
  FaHandshake,
  FaHandshakeSlash,
  FaHeart,
  FaSearch,
  FaTeeth,
} from "react-icons/fa";

export default function QurbanirTips() {
  return (
    <section className="bg-background  ">
      <div className="cssContainer">
        {/* Heading*/}
        <header className="text-center space-y-4">
          <h2 className="">Qurbani Buying Tips</h2>
          <p className="">
            Choose the right animal with confidence by following these simple
            guidelines.
          </p>
        </header>

        {/* Contents*/}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-5 items-items-stretch">
          {/* Card 1*/}
          <Card Icon={<FaHeart></FaHeart>} Title={"Check Overall Health"}>
            Make sure the animal is active, alert, and free from visible
            injuries or illness.
          </Card>

          {/* Card 2*/}
          <Card Icon={<FaCheck></FaCheck>} Title={"Verify Age Properly"}>
            Check the teeth to confirm the animal meets the required age for
            Qurbani.
          </Card>

          {/* Card 3*/}
          <Card Icon={<FaTeeth></FaTeeth>} Title={"Observe Feeding Condition"}>
            Healthy animals are well-fed and have a strong, balanced body
            structure.
          </Card>

          {/* Card 4*/}
          <Card Icon={<FaBone></FaBone>} Title={"Avoid Sick or Weak Animals"}>
            Do not select animals that look weak, injured, or show unusual
            behavior.
          </Card>

          {/* Card 5*/}
          <Card
            Icon={<FaHandshake></FaHandshake>}
            Title={"Buy from Trusted Sellers"}
          >
            Always choose reliable farms or verified sellers to ensure quality.
          </Card>

          {/* Card 6*/}
          <Card Icon={<FaSearch></FaSearch>} Title={"Inspect Before Booking"}>
            Carefully review images, details, and descriptions before confirming
            your purchase.
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ Icon, Title, children }) {
  return (
    <div className="flex flex-col items-center justify-start bg-accent/5 text-center rounded-xl p-6 min-w-50 text-accent shadow-md shadow-accent/20">
      {/* Card Icon*/}
      <div className="w-fit bg-accent/20 rounded-full shadow-xs p-5 mb-7">
        <span className="text-2xl text-accent w-fit  overflow-clip">
          {Icon}
        </span>
      </div>

      {/* Card Text*/}
      <h3 className="text-xl! mb-2 ">{Title}</h3>
      <p className="text-sm!">{children}</p>
    </div>
  );
}
