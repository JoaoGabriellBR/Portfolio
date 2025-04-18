import adidas from "./adidas";
import upwrite from "./upwrite";

const myProjects = {
  adidas,
  upwrite,
  // future projects...
};

export type ProjectName = keyof typeof myProjects;

export default myProjects;
