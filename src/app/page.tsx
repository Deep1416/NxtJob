import BeBest from "@/components/BeBest";
import EqBeast from "@/components/EqBeast";
import EverWonder from "@/components/EverWonder";
import FamiliarCarsoul from "@/components/FamiliarCarsoul";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero_section from "@/components/Hero_section";
import Meet from "@/components/Meet";
import Open from "@/components/Open";
import Self from "@/components/Self";
import Test from "@/components/Test";
import WorkWithUs from "@/components/WorkUs";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero_section />
      <EqBeast />
      <FamiliarCarsoul />
      <Meet />
      <Self />
      <BeBest />
      <EverWonder />
      <Test />
      <WorkWithUs />
      <Open />
      <Footer />
    </main>
  );
}
