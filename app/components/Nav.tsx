"use client";
import React, { useState } from "react";
import Button from "./Button";
import navList from "@/data/navList";
import Image from "next/image";
import logo from "../../public/logo.webp";
const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`w-full absolute top-0 left-0 bg-white py-2 px-4 md:flex items-center justify-between ${
        open ? "z-30" : "z-10"
      }`}>
      <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
        <span className="px-4">
          <Image src={logo} height={60} alt="become kind logo"></Image>
        </span>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>

      <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-20 " : "top-[-490px]"
        }`}>
        {navList.map((link) => (
          <li key={link.linkName} className="md:ml-8 text-xl md:my-0 my-7">
            <a
              href={link.link}
              className="text-gray-800 hover:text-gray-400 duration-500">
              {link.linkName}
            </a>
          </li>
        ))}
        <Button>Get Involved</Button>
      </ul>
    </div>
  );
};

export default Nav;

// const [isScrolled, setIsScrolled] = useState(false);

// useEffect(() => {
//   // Add event listener to track scrolling
//   const handleScroll = () => {
//     const currentScrollPos = window.scrollY;
//     setIsScrolled(currentScrollPos > 0); // Set isScrolled to true when scrolling occurs
//   };

//   window.addEventListener("scroll", handleScroll);

//   // Remove the event listener on component unmount
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);
