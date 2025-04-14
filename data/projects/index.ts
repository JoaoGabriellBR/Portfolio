import adidas from "./adidas";

const myProjects = {
  adidas,
  // future projects...
};

export type ProjectName = keyof typeof myProjects;

export default myProjects;
