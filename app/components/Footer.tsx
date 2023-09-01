import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="w-full border-gray-400 border-t-2 border-b-4 h-32 flex justify-around items-center font-light bg-red-50 ">
      <div className=" flex flex-col justify-center content-center p-5 text-center">
        {" "}
        <Link href={"/contact_us"}>Contact</Link> <p>becomekind@proton.me</p>
      </div>
      <div className="flex flex-col justify-center content-center p-5 text-center">
        {" "}
        <p>©2023 BE KIND</p>
        <Link href={"/about_us/"}>About</Link>
      </div>
    </footer>
  );
}

export default Footer;
