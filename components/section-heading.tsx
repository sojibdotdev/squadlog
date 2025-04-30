import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  center = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4 mb-12 font-bai-jamjuree",
        center && " flex  flex-col items-center justify-center ",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl  font-bold gradient-text">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl ">{subtitle}</p>
      )}
    </div>
  );
}
