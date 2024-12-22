import HeroTitle from "./hero-title";

export const Hero = ({ title, subtitle, size }: any) => {
  return (
    <section className="container mx-auto min-h-screen max-w-6xl px-4 pb-48 flex flex-col items-center justify-center text-center">
      <HeroTitle title={title} subtitle={subtitle} size={size} spacing="block" />
    </section>
  );
};
