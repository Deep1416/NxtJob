import React from "react";

type Props = {};

const EqBeast: React.FC<Props> = (props: Props) => {
  return (
    <section className="mt-12 grid grid-cols-1 md:grid-cols-3 px-5 lg:px-20 lg:gap-12 py-6 md:py-0">
      <div className="text-3xl font-bold p-4">EQ beats IQ</div>
      <div className="text-xl font-normal p-4">
        People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
      </div>
      <div className="text-xl font-normal p-4">
        They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k more per year.
      </div>
    </section>
  );
};

export default EqBeast;
