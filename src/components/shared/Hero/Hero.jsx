import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero({
  title,
  children,
  bannerImg,
  ctaText,
  ctaLink,
  className,
}) {
  return (
    <section className="bg-white">
      <div className={`cssContainer py-0 md:flex-row ${className} `}>
        {/* Banner Image*/}
        <div className="w-full">
          <Image
            src={bannerImg}
            alt="Banner Image"
            width={500}
            height={300}
            loading="eager"
            className="w-full   "
          ></Image>
        </div>

        {/* Content Side*/}
        <div className="w-full max-md:pb-16">
          <h1 className="mb-4">{title}</h1>
          <p className="max-w-[560px] mb-6">{children}</p>
          {ctaText && (
            <Link href={ctaLink}>
              <Button>{ctaText}</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
