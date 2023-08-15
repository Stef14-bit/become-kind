import About from "@/app/components/AboutUs";
import Hero from "@/app/components/Hero";
import RewardsContainer from "./components/RewardsContainer";
export default function Home() {
  return (
    <>
      <div className="  w-full pt-20 h-screen">
        <Hero />
        <About />
        <RewardsContainer />
      </div>
    </>
  );
}
