type ProjectsProps = {
  title: string;
  name: string;
  src: string;
  href: string;
  type: string;
};

export const projects: ProjectsProps[] = [
  {
    title: "Adidas",
    name: "adidas",
    src: "/images/adidas/adidas-mockup2.webp",
    href: "/projects/adidas",
    type: "Full Stack",
  },
  {
    title: "Dark Bulls",
    name: "darkbulls",
    src: "/images/darkbulls/mockup-darkbulls-web-1.webp",
    href: "/projects/darkbulls",
    type: "Front end",
  },
  {
    title: "Koffie",
    name: "koffie",
    src: "/images/koffie/mockup-koffie.webp",
    href: "/projects/koffie",
    type: "Front end",
  },
  {
    title: "UpWrite",
    name: "upwrite",
    src: "/images/upwrite/upwrite.webp",
    href: "/projects/upwrite",
    type: "Full Stack",
  },
  {
    title: "Solar Toy",
    name: "solartoy",
    src: "/images/solartoy/solartoy.webp",
    href: "/projects/solartoy",
    type: "Front end",
  },
];
