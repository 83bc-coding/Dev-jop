import React, { ReactNode } from "react";
type props = {
  children?: ReactNode;
};
const Button = ({ children }: props) => {
  return (
    <button
      type="button"
      className="mt-[20px]  text-cardL font-bold bg-blue hover:bg-blue-800     font-medium rounded-lg text-sm px-5 py-3 me-2 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      {children}
    </button>
  );
};

export default Button;
