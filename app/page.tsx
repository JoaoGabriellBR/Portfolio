import Header from "@/components/header/header";
import Image from "next/image";
import { Jumbotron } from "@/components/jumbotron";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col space-y-10">
      <Header />
      <Jumbotron />
      <Footer />
    </main>
  );
}
