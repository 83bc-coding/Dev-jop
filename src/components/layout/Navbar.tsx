import ThemeSwitch from "../theme/ThemeSwitch";

const Navbar = () => {
  return (
    <div className="m-auto h-40 md:bg-texture sm:bg-hero-pattern flex justify-between  ">
      <div className="flex justify-between w-full max-w-[74%] mx-auto">
        <div className="text-cardL text-4xl font-bold mx-9 pt-10 ">devjobs</div>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
