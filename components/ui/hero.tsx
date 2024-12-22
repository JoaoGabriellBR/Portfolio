import HeroTitle from "./hero-title";

export const Hero = ({ title, subtitle, size }: any) => {
  return (
    <section className="container mx-auto min-h-screen max-w-6xl px-4 pb-48 flex flex-col items-center justify-center text-center">
      <HeroTitle text={title} size={size} color="white" />
      <HeroTitle text={subtitle} size={size} color="silver" />
    </section>
  );
};
