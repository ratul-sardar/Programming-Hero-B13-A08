import { Faq } from "@/components/shared/FAQ/FAQ";

export default function FaqSection() {
  return (
    <section className="bg-background">
      <div className="cssContainer">
        {/* Heading*/}
        <header className="text-center space-y-4">
          <h2 className="">Frequently Asked Questions</h2>
          <p className="">
            Everything you need to know before choosing your Qurbani animal.
          </p>
        </header>

        {/* Contents*/}
        <div className="w-full max-w-[760px]">
          <Faq></Faq>
        </div>
      </div>
    </section>
  );
}
