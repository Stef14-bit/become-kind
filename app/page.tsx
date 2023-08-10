import Image from "next/image";
import About from "@/components/AboutUs";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div className="  w-full pt-20 h-screen">
        {" "}
        <Hero />
        <About />
      </div>
    </>
  );
}
