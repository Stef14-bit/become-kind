import React from "react";
import Image from "next/image";
import { BiSolidCrown } from "react-icons/bi";

type Props = {};

function UserInfo({}: Props) {
  return (
    <div className="flex p-5 content-center">
      {" "}
      <Image
        className="rounded-full"
        src={
          "https://become-kind.s3.eu-central-1.amazonaws.com/gallery/gallery7.png"
        }
        alt="larisa"
        width={50}
        height={40}></Image>
      <span className="p-2">
        <h2 className="font-mono">
          Larisa Alexandra <BiSolidCrown />
        </h2>
        <h3 className="font-mono text sm">07 Jan</h3>
      </span>
    </div>
  );
}

export default UserInfo;
