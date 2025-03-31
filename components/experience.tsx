import Typography from "./ui/typography";

export const Experience = ({ step, jobName, position, timeline }: any) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <Typography size="lg" text={position} />
      <div className="flex flex-row items-center justify-between gap-4">
        <Typography size="sm" text={timeline} className="font-extralight"/>
        <Typography size="sm" text={jobName}  className="font-extralight" />
      </div>
    </div>
  );
};
