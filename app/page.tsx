import Banner from "@/components/Banner";
import Image from "next/image";
import About from "@/components/AboutUs";

export default function Home() {
  return (
    <>
      <div className="  w-full pt-20 h-screen">
        {" "}
        <Banner />
        <About />
      </div>
    </>
  );
}
