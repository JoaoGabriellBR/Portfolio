import Header from "@/components/header";
import { Jumbotron } from "@/components/jumbotron";
import { Footer } from "@/components/footer";
import { CardProjects } from "@/components/card-projects";

export default function Home() {
  return (
    <main className="flex flex-col space-y-10">
      <Header />
      <Jumbotron title="Desenvolvedor" isHomePage/>
      <CardProjects />
      <Footer />
    </main>
  );
}
