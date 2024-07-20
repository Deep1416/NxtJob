import React from "react";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="fixed top-[0] left-[0] bg-white z-[100] w-full">
      <header className="flex justify-between md:h-20 items-center md:py-3 px-4 md:px-8 lg:px-32 w-screen">
        <div className="hidden md:block">
          <Image width={40} height={40} alt="" src="/ahead-logo.png" />
        </div>
        <div className="hidden md:block ">
          <ul className="flex gap-8 items-center">
            <li className="cursor-pointer font-semibold ">Emotions</li>
            <li className="cursor-pointer font-semibold ">Manifesto</li>
            <li className="cursor-pointer font-semibold ">
              Self-awareness test
            </li>
            <li className="cursor-pointer font-semibold ">Work With Us</li>
          </ul>
          
        </div>
        <div className="hidden md:block">
          <button className="cursor-pointer text-white bg-black rounded-full px-5 py-3 font-semibold">
            Download app
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="flex flex-col gap-4 items-center py-4">
          <div className="flex justify-between w-full px-4">
            <Image width={40} height={40} alt="" src="/ahead-logo.png" />
            <button className="cursor-pointer text-white bg-black rounded-full px-5 py-3 font-semibold">
              Download app
            </button>
          </div>
          <ul className="md:flex flex-col gap-4 items-center hidden">
            <li className="cursor-pointer font-semibold ">Emotions</li>
            <li className="cursor-pointer font-semibold ">Manifesto</li>
            <li className="cursor-pointer font-semibold ">
              Self-awareness test
            </li>
            <li className="cursor-pointer font-semibold ">Work With Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;