import HeroTitle from "./hero-title";

export const Hero = ({ title, subtitle, size }: any) => {
  return (
    <section className="container mx-auto min-h-screen max-w-6xl px-4 pb-60 flex flex-col items-center justify-between text-center">
      <HeroTitle title={title} subtitle={subtitle} size={size} />
    </section>
  );
};
