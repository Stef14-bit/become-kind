import React from "react";
import rewards from "@/data/bodyRewards";
import Image from "next/image";
type Props = {};

function RewardsContainer({}: Props) {
  return (
    <section className="flex flex-col">
      <h2 className=" text-center py-20 font-thin text-3xl md:text-4xl ">
        Reward Your Body
      </h2>
      <div className="flex justify-center flex-col sm:flex-row items-center px-10">
        {" "}
        <Image
          width={780}
          height={800}
          className="p-8 "
          src={
            "https://become-kind.s3.eu-central-1.amazonaws.com/page/esbkr.webp"
          }
          alt="eat sleep be kind repeat"
        />
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
      </div>
    </section>
  );
}

export default RewardsContainer;
