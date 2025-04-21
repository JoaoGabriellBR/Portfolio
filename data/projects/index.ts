import adidas from "./adidas";
import upwrite from "./upwrite";
import koffie from "./koffie";
import solartoy from "./solartoy";

const myProjects = {
  adidas,
  upwrite,
  koffie,
  solartoy,
  // future projects...
};

export type ProjectName = keyof typeof myProjects;

export default myProjects;
