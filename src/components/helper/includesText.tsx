<<<<<<< HEAD
const includesText = (str1: string, str2: string) => {
  str1 = str1.trim().toLowerCase();
  str2 = str2.trim().toLowerCase();

  return str1.includes(str2);
};

export default includesText;
=======
const includesText = (str1: string, str2: string): boolean => {
    str1 = str1.trim().toLowerCase();
    str2 = str2.trim().toLowerCase();
  
    return str1.includes(str2);
  };
  
  export default includesText;
>>>>>>> dacee606e32894a202b12e2499825cc4be52d2d0
