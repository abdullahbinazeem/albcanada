import Container from "@/app/components/container";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const products = [
  {
    title: "Asphalt Roofing",
    paragraph:
      "With asphalt shingles today providing a Beautiful, Affordable and Reliable roofing option for any home, asphalt shingles continuing to raise the bar when it comes to roofing.",
    img: "asphalt",
  },
  {
    title: "Metal Roofing",
    paragraph:
      "Metal roofs offer a multitude of benefits for protecting your roof from snow and ice build-up. There is essentially nowhere for the water to accumulate and gain entry.",
    img: "metal",
  },
  {
    title: "Cedar Roofing",
    paragraph:
      "Unlike traditional roofing materials, cedar wood is durable, resulting in a cost-saving solution. The natural insulation of cedar wood gives roofs up to two times the energy efficiency",
    img: "cedar",
  },
];

const producers = [
  {
    title: "GAF",
    img: "gaf",
  },
  {
    title: "Owens Cornering",
    img: "owenscornering",
  },
  {
    title: "Malarkey",
    img: "malarkey",
  },
  {
    title: "Iko",
    img: "iko",
  },
];

const Products = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-secondaryLight teko text-3xl md:text-4xl">
          Select from many materials
        </h2>
        <h1 className="text-secondary teko text-4xl md:text-5xl font-bold">
          Our Products
        </h1>
      </div>
      <div className="mt-20 flex flex-col gap-8 md:gap-[2px] text-white">
        {products.map((product, i) => (
          <div
            key={i}
            className={cn(
              "flex flex-col md:flex-row gap-[2px]",
              i % 2 == 1 && "md:flex-row-reverse"
            )}
          >
            <div className="flex-1 basis-3/5 relative aspect-video md:aspect-[3/2]">
              <Image
                src={`/assets/products/${product.img}.jpg`}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-secondary flex-1 basis-2/5 flex flex-col gap-4 justify-center py-12 px-10">
              <h1 className="md:text-4xl text-3xl font-semibold teko">
                {product.title}
              </h1>
              <p className="serrat text-sm md:text-base">
                With asphalt shingles today providing a Beautiful, Affordable
                and Reliable roofing option for any home, asphalt shingles
                continuing to raise the bar when it comes to roofing.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-10 md:gap-20 mt-20 justify-center flex-wrap">
        {producers.map((producer, i) => (
          <div
            key={i}
            className="aspect-square relative w-[140px] sm:w-[180px] md:w-[200px]"
          >
            <Image
              src={`/assets/products/${producer.img}.jpg`}
              alt={producer.title}
              className="aspect-square w-20 object-contain"
              fill
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Products;
