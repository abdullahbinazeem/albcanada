import Container from "@/app/components/container";
import React from "react";

const Hero = () => {
  return (
    <Container className="bg-[url('/assets/herobg.jpg')]  bg-cover bg-center">
      <div className="flex lg:flex-row flex-col  gap-20 items-center lg:justify-between min-h-[90vh] py-32  text-white">
        <div className="flex-1">
          <h1 className="text-5xl sm:text-7xl lg:text-[84px] leading-[105%] font-bold teko">
            ALBCANADA
            <br />
            Roofing Experts
          </h1>
          <p className="sm:text-lg lg:text-xl mt-4 lg:mt-8 serrat max-w-[500px]">
            We are local roofing company that uses high quality material
            manufactured locally and comes with a warranty.
          </p>
        </div>
        <div className="flex-1 bg-primary text-center py-10  teko">
          <h1 className="text-secondary text-4xl lg:text-5xl font-semibold">
            Get a Free Inspection
          </h1>
          <form
            className="w-full px-8 mt-8"
            action="https://formsubmit.co/ibraj2007@yahoo.com"
            method="POST"
          >
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <input
                className="w-full text-secondary py-3 px-4 text-xl border-2 focus:border-secondary appearance-none focus:outline-none"
                name="Name"
                type="text"
                placeholder="Name"
                required
              />
              <input
                className="w-full text-secondary py-4 px-5 text-xl border-2 focus:border-secondary appearance-none focus:outline-none"
                name="Phone Number"
                type="text"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6 mt-4">
              <input
                className="w-full text-secondary py-3 px-4 text-xl border-2 focus:border-secondary appearance-none focus:outline-none"
                name="Email"
                type="text"
                placeholder="Email Address"
                required
              />
              <input
                className="w-full text-secondary py-4 px-5 text-xl border-2 focus:border-secondary appearance-none focus:outline-none"
                name="Address"
                type="text"
                placeholder="Home Address"
                required
              />
            </div>
            <select
              name="Service"
              className="w-full mt-6 text-secondary py-4 px-5 text-xl border-2 focus:outline-none focus:border-secondary"
            >
              <option value="" disabled selected>
                Select your service
              </option>
              <option value="Flat Roofing">Flat Roofing</option>
              <option value="Roofing Installations/Repairg">
                Roofing Installations/Repair
              </option>
              <option value="Cleaning">Cleaning</option>
              <option value="Siding & Shingles">Siding & Shingles</option>
              <option value="Other">Other</option>
            </select>
            <button
              className="bg-secondary w-full  font-medoum rounded-sm text-xl px-5 py-4 uppercase tracking-wide 
                      text-gray-100 focus:outline-none mt-8"
            >
              Get a Free Quote
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
