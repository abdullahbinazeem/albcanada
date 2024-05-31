import Container from "@/app/components/container";
import React from "react";

const Reviews = () => {
  return (
    <Container className="my-40 ">
      <div className="text-center flex flex-col gap-4 relative">
        <h2 className="text-secondaryLight teko text-3xl md:text-4xl">
          What our customers say about us
        </h2>
        <h1 className="text-secondary teko text-4xl md:text-5xl font-bold">
          Our Reviews
        </h1>
        <h1 className="teko text-5xl font-bold text-center mt-32">
          Reviews Coming Soon!{" "}
        </h1>
      </div>
    </Container>
  );
};

export default Reviews;
