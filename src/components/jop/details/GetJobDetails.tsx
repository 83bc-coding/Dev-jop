import { useParams } from 'react-router-dom';

import jobsData from "../../../assets/data.json";
export const GetJobDetails = () => {
  const { id } = useParams();
  console.log("im get");
  
  // Convert the 'id' parameter to a number before comparing
  return (jobsData.filter(item => item.id === Number(id))[0]);
};