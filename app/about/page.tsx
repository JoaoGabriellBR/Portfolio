import Header from "@/components/header/header";
import { Jumbotron } from "@/components/jumbotron";
import { Footer } from "@/components/footer";
import { CardProjects } from "@/components/card-projects";

export default function About() {
  return (
    <main className="grid grid-rows-[auto_1fr_auto] grid-cols-1">
      <Header />
      <div className="w-full h-screen grid-cols-1 grid-rows-2">
        <Jumbotron title="Sobre Mim"/>
      </div>
      <Footer />
    </main>
  );
}
