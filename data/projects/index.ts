import adidas from "./adidas";
import upwrite from "./upwrite";
import koffie from "./koffie";
import solartoy from "./solartoy";
import darkbulls from "./darkbulls";

const myProjects = {
  adidas,
  upwrite,
  koffie,
  solartoy,
  darkbulls,
  // future projects...
};

export type ProjectName = keyof typeof myProjects;

export default myProjects;
