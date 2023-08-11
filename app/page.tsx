import About from "@/app/components/AboutUs";
import Hero from "@/app/components/Hero";
import esbkr from "../assets/esbkr.webp";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="  w-full pt-20 h-screen">
        {" "}
        <Hero />
        <About />
        <div className="w-full flex flex-col">
          {" "}
          <h2 className=" text-center py-10 font-thin text-3xl">
            Reward Your Body
          </h2>
          <Image className="p-8" src={esbkr} alt="eat sleep be kind repeat" />
        </div>
      </div>
    </>
  );
}
