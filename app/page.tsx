import About from "@/app/components/AboutUs";
import Hero from "@/app/components/Hero";
import RewardsContainer from "./components/RewardsContainer";
import ImageSlider from "./components/ImageSlider";
export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <About />
        <RewardsContainer />
      </div>
    </>
  );
}
