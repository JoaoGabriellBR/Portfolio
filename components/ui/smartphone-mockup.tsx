export default function SmartphoneMockup({ children }: any) {
  return (
    <div className="relative flex justify-center h-[700px] w-[340px] border-[0.5rem] border-neutral-700 rounded-[3rem] shadow-2xl shadow-neutral-950 dark:shadow-black aspect-[9/16]">
      {children}
      <span className="border border-neutral-950 bg-background w-3 h-3 mt-2 rounded-full"></span>
      <span className="absolute -right-2 top-20 border-4 border-neutral-950 h-10 rounded-[3rem]"></span>
      <span className="absolute -right-2 top-44 border-4 border-neutral-950 h-24 rounded-[3rem]"></span>
    </div>
  );
}
