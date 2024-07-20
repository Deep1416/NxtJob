import Image from "next/image";
import React from "react";

type Props = {};

const Star = (props: Props) => {
  return (
    <>
      {[...Array(5)].map((val, index) => {
        return (
          <Image
            alt="star"
            src="/starIcon.svg"
            width={16}
            height={16}
            key={index}
          />
        );
      })}
    </>
  );
};

export default Star;
