import React from "react";

type Props = {};

const BeBest = (props: Props) => {
  return (
    <section className="my-[5rem] mb-5 grid grid-cols-1 md:grid-cols-3 px-2 md:px-14 lg:px-20  lg:gap-8">
      <div className="text-4xl font-semibold p-4">Be the best you with EQ</div>
      <div className="text-xl font-semibold p-4">
        Not having your own emotions under control might be holding you back.
      </div>
      <div className="text-xl font-semibold p-4">
        Additionally, not understanding those of others strops you from being
        parent, friend you can be.
      </div>
    </section>
  );
};

export default BeBest;
