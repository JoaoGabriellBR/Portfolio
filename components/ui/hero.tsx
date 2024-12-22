import HeroTitle from "./hero-title";
import Typography from "./typography";

export const Hero = ({ title, subtitle, size }: any) => {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      <HeroTitle text={title} size={size} color="white" />
      <HeroTitle text={subtitle} size={size} color="silver" />
    </section>
  );
};
