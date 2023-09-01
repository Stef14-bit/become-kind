import React from "react";
import Button from "../components/Button";

type Props = {};

function page({}: Props) {
  return (
    <form className="p-10 text-xl font-light">
      <div className="flex flex-col justify-center items-center py-5 ">
        <label htmlFor="email">Email</label>
        <input
          className="border-solid border-1 bg-red-50 w-3/4 rounded-md h-10 my-1"
          type="email"
          id="email"
        />
      </div>
      <div className="flex flex-col justify-center items-center py-5 ">
        <label htmlFor="name">Your name</label>
        <input
          className="border-solid border-1 bg-red-50 w-3/4 rounded-md h-10 my-1"
          type="text"
          id="name"
        />
      </div>
      <div className="flex flex-col justify-center items-center py-5 ">
        <label htmlFor="message">Your message</label>
        <textarea
          className="border-solid border-1 bg-red-50 resize rounded-md w-full my-1 max-w-full"
          id="message"
        />
      </div>
      <Button>Submit</Button>
    </form>
  );
}

export default page;
