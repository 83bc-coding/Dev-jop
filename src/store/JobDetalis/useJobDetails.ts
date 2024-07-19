import { create } from "zustand";
import { JobState, createJobSlice } from "./createJobSlice";

export type CustomerStore = Partial<JobState> 

export const useJobDetails = create<CustomerStore>((set, get, store) => ({
    ...createJobSlice(set, get, store),
 
   }));