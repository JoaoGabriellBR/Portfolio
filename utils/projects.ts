type ProjectsProps = {
  title: string;
  name: string;
  src: string;
  href: string;
};

export const projects: ProjectsProps[] = [
  {
    title: "Adidas",
    name: "adidas",
    src: "/images/adidas/adidas-mockup2.png",
    href: "https://adidasshopping.vercel.app",
  },
  {
    title: "UpWrite",
    name: "upwrite",
    src: "/images/upwrite/upwrite.png",
    href: "https://up-write.vercel.app",
  },
  {
    title: "World News",
    name: "worldnews",
    src: "/images/worldnews/worldnews.png",
    href: "https://siteworldnews.vercel.app",
  },
  {
    title: "Solar Toy",
    name: "solartoy",
    src: "/images/solartoy/solartoy.png",
    href: "https://solartoy.netlify.app",
  },
];
