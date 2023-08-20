import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="w-full border-gray-400 border-t-2 border-b-4 h-32 flex flex-col items-center justify-center font-light bg-red-50 ">
      <p>becomekind@proton.me</p>
      <p>©2023 BE KIND</p>
      <p>Proudly presented by becomekind.com</p>
    </footer>
  );
}

export default Footer;
