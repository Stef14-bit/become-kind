import React from "react";
import rewards from "@/data/bodyRewards";
import Image from "next/image";
import esbkr from "@/assets/esbkr.webp";
type Props = {};

function RewardsContainer({}: Props) {
  return (
    <section className="flex flex-col">
      <h2 className=" text-center py-20 font-thin text-3xl md:text-4xl ">
        Reward Your Body
      </h2>
      <div className="flex justify-center flex-col sm:flex-row items-center px-10">
        <ul>
          {rewards.map((reward, id) => (
            <li className="m-2" key={id}>
              <span className=" border-solid border-4 border-green-600 rounded bg-green-600 text-white font-extrabold text-xl m-2  ">
                &#10003;
              </span>
              {reward.content}
            </li>
          ))}
        </ul>
        <Image
          width={780}
          className="p-8 "
          src={esbkr}
          alt="eat sleep be kind repeat"
        />
      </div>
    </section>
  );
}

export default RewardsContainer;
