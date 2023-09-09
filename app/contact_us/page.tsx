import React from "react";
import Button from "../components/Button";

type Props = {};

function ContactUs({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-thin text-3xl lg:text-6xl py-9 text-center">
        Ask us anything!
      </h2>
      <form className="md:w-[50%] p-10 text-xl font-light flex flex-col justify-between">
        <div>
          <div className="flex flex-col justify-center items-center py-5 ">
            <label htmlFor="email">Email</label>
            <input
              className="border-solid border-2 border-slate-300 w-3/4 rounded-md h-10 my-1"
              type="email"
              id="email"
            />
          </div>
          <div className="flex flex-col justify-center items-center py-5 ">
            <label htmlFor="name">Your name</label>
            <input
              className="border-solid border-2 border-slate-300 w-3/4 rounded-md h-10 my-1"
              type="text"
              id="name"
            />
          </div>
          <div className="flex flex-col justify-center items-center py-5 ">
            <label htmlFor="message">Your message</label>
            <textarea
              className="border-solid border-2 border-slate-300 resize rounded-md w-full my-1 max-w-full"
              id="message"
            />
          </div>
        </div>
        <div className="self-center md:self-end">
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
