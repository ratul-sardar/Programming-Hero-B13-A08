import { Accordion } from "@heroui/react";
import { FaArrowCircleDown } from "react-icons/fa";

const items = [
  {
    content:
      "Look for an active and alert animal with clear eyes, smooth movement, and no visible injuries or illness. A healthy coat and proper feeding are also good signs.",
    title: "How do I choose a healthy animal?",
  },
  {
    content:
      "You can estimate the age by checking the animal’s teeth. Sellers usually provide age details, but it’s always good to confirm before booking.",
    title: "How can I verify the age of the animal?",
  },
  {
    content:
      "Yes, you can easily book an animal through our platform by filling out the booking form. The process is simple and requires basic information.",
    title: "Can I book an animal online?",
  },
  {
    content:
      "Yes, you must be logged in to book an animal. This helps us manage your booking and provide a better experience.",
    title: "Do I need an account to book an animal?",
  },
  {
    content:
      "No, this platform does not process payments. Booking is for reservation purposes only and does not store any transaction data.",
    title: "Is online payment required?",
  },
  {
    content:
      "No, this platform does not process payments. Booking is for reservation purposes only and does not store any transaction data.",
    title: "Is online payment required?",
  },
];

export function Faq() {
  return (
    <Accordion className="w-full" variant="surface">
      {items.map((item, index) => (
        <Accordion.Item key={index}>
          <Accordion.Heading>
            <Accordion.Trigger>
              {item.title}
              <Accordion.Indicator>
                <FaArrowCircleDown></FaArrowCircleDown>
              </Accordion.Indicator>
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body>{item.content}</Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
