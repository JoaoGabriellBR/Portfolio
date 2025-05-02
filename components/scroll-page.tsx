import { Link } from "@/i18n/navigation";
import { MagneticButton } from "./ui/button-magnetic";
import { BsArrowDown } from "react-icons/bs";
import Typography from "./ui/typography";

type ScrollPageProps = {
  sectionLink: string;
  className?: string;
};

export const ScrollPage = ({ sectionLink, className }: ScrollPageProps) => {
  return (
    <Link className={className} href={sectionLink}>
      <MagneticButton
        distance={1}
        type="3d"
        className="flex flex-row justify-between items-center gap-2 border-none"
      >
        <BsArrowDown className="text-foreground dark:text-white text-md" />
        <Typography
          text={"Scroll"}
          letterPadding={false}
          className="text-md text-foreground dark:text-white font-normal"
        />
      </MagneticButton>
    </Link>
  );
};
