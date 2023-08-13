import About from "@/app/components/AboutUs";
import Hero from "@/app/components/Hero";
import esbkr from "../assets/esbkr.webp";
import Image from "next/image";
import ImageGallery from "@/app/components/ImageGallery";
import RewardsContainer from "./components/RewardsContainer";
export default function Home() {
  return (
    <>
      <div className="  w-full pt-20 h-screen">
        {" "}
        <Hero />
        <About />
        <h2 className=" text-center py-20 font-thin text-3xl md:text-4xl">
          Reward Your Body
        </h2>
        <div className="p-20 w-full flex flex-col md:flex-row justify-around">
          {" "}
          <RewardsContainer />
          <Image className="p-8 " src={esbkr} alt="eat sleep be kind repeat" />
        </div>
        <ImageGallery />
      </div>
    </>
  );
}
