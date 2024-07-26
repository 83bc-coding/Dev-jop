import React, { ReactNode } from "react";
type props = {
  children?: ReactNode;
  T?: boolean;
  w?: string;
  onClick?: any;
};
const Button = ({ children, T, w, onClick }: props) => {
  return (
    <button
      type="button"
      className={`mt-[20px] ${w} ${
        T ? "bg-[#5964E01A] text-blue" : "text-cardL bg-blue"
      }  font-bold  hover:bg-blue-800     font-medium rounded-lg text-sm px-5 py-3 me-2 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
