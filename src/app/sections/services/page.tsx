import Container from "@/app/components/container";
import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Roof Installation & Shingles",
    paragraph:
      "We do roofing Installations, Roofing repairs, flat roofing. e ipsum dolor sit amet, consectetur adipiscing elit quis posuere lacus",
    img: "roofing",
  },
  {
    title: "Flat Roofing",
    paragraph:
      "We do roofing Installations, Roofing repairs, flat roofing. e ipsum dolor sit amet, consectetur adipiscing elit quis posuere lacus",
    img: "flatroofing",
  },
  {
    title: "Siding & Gutters",
    paragraph:
      "We do roofing Installations, Roofing repairs, flat roofing. e ipsum dolor sit amet, consectetur adipiscing elit quis posuere lacus",
    img: "shingles",
  },
  {
    title: "Moss Removal & Pressure Washing",
    paragraph:
      "We do roof & gutter cleaning e ipsum dolor sit amet, consectetur adipiscing elit quis posuere lacus",
    img: "clean",
  },
];

const Services = () => {
  return (
    <div className="my-36">
      <Container>
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-secondaryLight teko text-3xl md:text-4xl">
            The most reliable Victoria roofing company
          </h2>
          <h1 className="text-secondary teko text-4xl md:text-5xl font-bold">
            Our Professional Roofing Services
          </h1>
        </div>
      </Container>
      <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-1 mt-20">
        {services.map((service, i) => (
          <div key={i} className="h-[50vh] min-h-[450px] relative">
            <div className="w-full h-full  absolute top-0 left-0">
              <Image
                src={`/assets/services/${service.img}.jpg`}
                alt={service.title}
                fill
                className="relative z-10 object-cover	"
              />
              <div className="w-full h-full absolute bg-primary z-[15] opacity-20" />
              <div className="w-full h-full relative bg-black z-20 opacity-75" />
            </div>
            <div className="pt-20 px-5 relative z-30 grid place-content-center h-full text-center text-white">
              <h1 className="text-4xl teko">{service.title}</h1>
              <p className="max-w-[400px] mt-2">{service.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
