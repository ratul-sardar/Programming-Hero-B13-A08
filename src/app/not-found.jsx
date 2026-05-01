import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70dvh] flex flex-col items-center justify-center">
      <Image
        src={"/404.svg"}
        alt="not-found image"
        width={400}
        height={400}
      ></Image>
      <h2 className="text-lg md:text-2xl mb-8">Couldnt Find The Page</h2>
      <Link href={"/"}>
        <Button>Go home</Button>
      </Link>
    </div>
  );
}
