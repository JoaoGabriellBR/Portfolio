import Header from "@/components/header/header";
import { Jumbotron } from "@/components/jumbotron";
import { Footer } from "@/components/footer";
import { TiltCard } from "@/components/tilt-card";

export default function Home() {
  return (
    <main className="flex flex-col space-y-10">
      <Header />
      <Jumbotron />
      <TiltCard />
      <Footer />
    </main>
  );
}
