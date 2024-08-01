import { StateCreator } from "zustand";

export type JobState = {
  job?: object;
  setJob: (job: object) => void;
  clearJob: () => void;
};

export const createJobSlice: StateCreator<Partial<JobState>> = (
  set,
 
) => ({
  job: {},
  setJob: (job) => set({ job: job }),
  clearJob: () => set({ job: {undefined} }),
});
