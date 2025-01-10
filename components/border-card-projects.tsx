import { BorderTrail } from "./ui/border-trail";
import { Tilt } from "./ui/tilt";

export function BorderCardProjects({ children }: any) {
  return (
    <Tilt
      rotationFactor={8}
      isRevese
      className={`col-span-1 row-span-1 p-12 flex flex-col items-center justify-center gap-4 overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-background rounded-[2rem]`}
    >
      <BorderTrail
        style={{
          boxShadow:
            "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
        }}
        size={100}
      />
      <div
        className="flex animate-pulse flex-col items-center justify-center space-y-2"
        role="status"
        aria-label="Loading..."
      >
        {children}
      </div>
    </Tilt>
  );
}
