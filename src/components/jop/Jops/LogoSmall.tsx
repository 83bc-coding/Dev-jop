import React from "react";
import Logo from "../../ui/Logo";
type props = {
  fill: string;
  d: string;
  bg: string;
};
const LogoSmall = ({ fill, d, bg }: props) => {
  return (
    <div
      className={`h-[50px] w-[50px] rounded-md pt-4   ${bg}  mt-[-40px]  `}
    >
      {" "}
      <Logo>
        <path fill={fill} d={d} />
      </Logo>
    </div>
  );
};

export default LogoSmall;
