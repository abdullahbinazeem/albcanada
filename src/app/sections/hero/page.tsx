import Container from "@/app/components/container";
import React from "react";

const Hero = () => {
  return (
    <Container className="bg-[url('/assets/herobg.jpg')]  bg-cover bg-center">
      <div className="grid place-content-center lg:flex  gap-20 items-center justify-between min-h-[90vh]  text-white">
        <div className="flex-1">
          <h1 className="text-7xl lg:text-[84px] leading-[105%] font-bold teko">
            ALBCANADA
            <br />
            Roofing Experts
          </h1>
          <p className="text-lg lg:text-xl mt-4 lg:mt-8 serrat">
            We are local roofing company that uses high quality material
            manufactured locally and comes with a warranty.
          </p>
        </div>
        <div className="flex-1 bg-primary text-center py-10  teko">
          <h1 className="text-secondary text-4xl lg:text-5xl font-semibold">
            Get a Free Inspection
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
