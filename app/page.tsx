import About from "@/app/components/AboutUs";
import Hero from "@/app/components/Hero";

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
