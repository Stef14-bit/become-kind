import React from "react";

type Props = {
  children: React.ReactNode;
};

function Button({ children }: Props) {
  return (
    <button className="bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-500 duration-500">
      {children}
    </button>
  );
}

export default Button;
