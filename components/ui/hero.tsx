import HeroTitle from "./hero-title";
import Typography from "./typography";

export const Hero = ({ title, subtitle, size }: any) => {
  return (
    <section className="container mx-auto min-h-screen max-w-6xl px-4 pb-48 flex flex-col items-center justify-center text-center">
      <HeroTitle text={title} size={size} color="white" />
      <HeroTitle text={subtitle} size={size} color="silver" />
      <Typography text="Possuo experiência na criação e manutenção de APIs, landing pages, sistema ERP e e-commerce. Competente na sustentação de sistemas, bem como na modelagem e consulta de dados." color="white" size="sm"/>
    </section>
  );
};
