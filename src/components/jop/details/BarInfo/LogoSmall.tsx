 import Logo from "../../../ui/Logo";
type props = {
  fill: string;
  d: string;
};
const LogoSmall = ({ fill, d }: props) => {
  return (
    <div className="h-[50px] w-[50px] rounded-md pt-4   bg-[#EA9310] mt-[-20px] md:hidden sm:block ">
      {" "}
      <Logo>
        <path fill={fill} d={d} />
      </Logo>
    </div>
  );
};

export default LogoSmall;
