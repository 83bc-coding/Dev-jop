import React from "react";
import Logo from "../../../ui/Logo";
type props = {
  fill: string;
  d: string;
};
const LogoLarg = ({ fill, d }: props) => {
  return (
    <div className="h-24 w-24 pt-10  md:block sm:hidden    bg-[#EA9310]   ">
      {" "}
      <Logo>
        <path fill={fill} d={d} />
      </Logo>
    </div>
  );
};

export default LogoLarg;
