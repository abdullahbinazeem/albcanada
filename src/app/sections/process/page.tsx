import Container from "@/app/components/container";
import { Pickaxe, Podcast, Search } from "lucide-react";

import Image from "next/image";
import React from "react";

const steps = [
  {
    title: "Reach Out",
    paragraph:
      "Get in touch by calling us or filling out a form for detailed inspections are provided for free for homeowners by our team of expert technicians.",
    icon: Podcast,
  },
  {
    title: "Inspection & Proposal",
    paragraph:
      "Our team of experts will come to your home and do a thorough inspection in order to get the most accurate estimate , budget and timeline for your project. ",
    icon: Search,
  },
  {
    title: "The project starts",
    paragraph:
      "We will begin installation of your project at a mutually agreed fee. Our teams of factory trained installers work efficiently and put quality above all else.",
    icon: Pickaxe,
  },
];

const Process = () => {
  return (
    <div className="overflow-hidden">
      <Container className="my-40 ">
        <div className="text-center flex flex-col gap-4 relative">
          <div className=" absolute h-[80vh] z-[-1] top-0 bottom-0 left-[50%] translate-x-[-50%]  m-auto aspect-square">
            <Image
              src="/assets/vi.svg"
              alt="Vancouver Island Map"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-secondaryLight teko text-3xl md:text-4xl">
            Never wonder what’s next
          </h2>
          <h1 className="text-secondary teko text-4xl md:text-5xl font-bold">
            Our process make it easy
          </h1>
          <div className="mt-20 gap-x-12 divide-secondaryLight  divide-y-2 lg:divide-y-0 gap-y-10 grid items-start grid-cols-1 lg:grid-cols-3">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col gap-6 lg:p-0 pt-10">
                <div className="m-auto inline-block bg-primary p-8 relative">
                  <step.icon className="w-12 h-12 text-secondary" />
                </div>
                <h1 className="teko text-secondary text-3xl xl:text-4xl font-bold">
                  {step.title}
                </h1>
                <p className=" text-secondary serrat text-balance">
                  {step.paragraph}
                </p>
              </div>
            ))}
          </div>
          <div className="inline mt-32">
            <a
              className=" bg-primary text-secondary teko font-bold rounded-sm text-2xl px-10 py-5 uppercase tracking-wide 
                      "
              href="#home"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Process;
