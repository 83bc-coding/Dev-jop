import React, { useContext } from "react";
import Button from "../../../ui/Button";
import { ThemeContext } from "../../../theme/themeContext";

const CompanySite = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className=" w-[40%]  flex flex-col justify-start items-end sm:mb-6">
      {theme === "dark" ? (
        <Button>Company Site</Button>
      ) : (
        <Button T>Company Site</Button>
      )}
    </div>
  );
};

export default CompanySite;
