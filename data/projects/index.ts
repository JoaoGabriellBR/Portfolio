import adidas from "./adidas";
import upwrite from "./upwrite";
import koffie from "./koffie";

const myProjects = {
  adidas,
  upwrite,
  koffie,
  // future projects...
};

export type ProjectName = keyof typeof myProjects;

export default myProjects;
