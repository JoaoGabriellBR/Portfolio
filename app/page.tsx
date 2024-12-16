import Header from "@/components/header";
import { Jumbotron } from "@/components/jumbotron";
import { Footer } from "@/components/footer";
import { CardProjects } from "@/components/card-projects";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-rows-[auto_1fr_auto] grid-cols-1">
        <Jumbotron title="Desenvolvedor Full Stack" />
        <CardProjects />
      </main>
      <Footer />
    </>
  );
}
