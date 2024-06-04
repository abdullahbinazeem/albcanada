import Container from "@/app/components/container";
import { ClipboardList, BadgeCent, Timer, Icon } from "lucide-react";
import React from "react";

import Image from "next/image";

const Pros = [
  {
    title: "Free Survey & Quote",
    paragraph:
      "We offer a complimentary survey and quote service. Our experienced professionals will conduct a thorough assessment of your roofing needs at no cost to you. ",
    icon: ClipboardList,
  },
  {
    title: "Affordable Pricing",
    paragraph:
      "We are committed to offering affordable pricing without compromising on the quality of our materials or workmanship. Our competitive rates ensure that you receive the best value for your investment",
    icon: BadgeCent,
  },
  {
    title: "On Time Finish",
    paragraph:
      "We understand that roofing projects can be disruptive, which is why we prioritize completing each job efficiently and on schedule.s",
    icon: Timer,
  },
];

const AboutUs = () => {
  return (
    <Container className="my-36">
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-secondaryLight teko text-3xl md:text-4xl">
          Why people are choosing us
        </h2>
        <h1 className="text-secondary teko text-4xl md:text-5xl font-bold">
          Roofing Services in Victoria, BC And{" "}
          <br className="hidden lg:block" /> Surrounding Areas.
        </h1>
        <p className="serrat text-secondary lg:text-lg xl:px-12">
          We are an owner operated family business. We specialize in roofing &
          exterior, Flat Roofing, Shingels, Roof Repairs, New Roofing
          installation, Eavestroughs & Siding, Roof & Gutters cleaning Improve
          your property, and deliver outstanding results while ensuring your
          home renovation costs stay within budget
        </p>
      </div>
      <div className="mt-20 gap-x-12 gap-y-20 grid grid-cols-1 lg:grid-cols-3 ">
        {Pros.map((pro, i) => (
          <div className="text-center flex flex-col gap-6 self-start" key={i}>
            <pro.icon
              className="m-auto p-6 md:p-7 w-10 md:w-12 h-10 md:h-12 box-content bg-primary "
              stroke="#403230"
            />
            <h1 className="text-2xl md:text-3xl xl:text-4xl teko text-secondary font-semibold">
              {pro.title}
            </h1>
            <p className="serrat text-secondary">{pro.paragraph}</p>
          </div>
        ))}
      </div>
      
    </Container>
  );
};

export default AboutUs;
