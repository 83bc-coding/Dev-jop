import ModeTheme from "./ModeTheme";

const Nav = () => {
  return (
    <div className="   w-[75%] m-auto h-40 md:bg-texture sm:bg-hero-pattern flex justify-between  ">
      <div className="text-cardL text-4xl font-bold mx-9 pt-10 ">devjobs</div>
      <ModeTheme />
    </div>
  );
};

export default Nav;
