<<<<<<< Updated upstream
import useTheme from "../../../../hooks/useTheme";
=======
import   { useContext } from "react";
>>>>>>> Stashed changes
import Button from "../../../ui/Button";

const CompanySite = () => {
  const { theme } = useTheme();

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
