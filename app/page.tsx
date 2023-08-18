import About from "@/app/components/AboutUs";
import Hero from "@/app/components/Hero";
import RewardsContainer from "./components/RewardsContainer";
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
