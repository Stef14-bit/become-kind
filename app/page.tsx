import Image from "next/image";
import About from "@/app/projects/components/AboutUs";
import Hero from "@/app/projects/components/Hero";

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
