import { Icon } from "@/components/ui/Icon";

const SIZES = {
  sm: "h-11 w-11 [&>svg]:h-5 [&>svg]:w-5",
  md: "h-14 w-14 [&>svg]:h-6 [&>svg]:w-6",
  lg: "h-20 w-20 [&>svg]:h-9 [&>svg]:w-9",
} as const;

/** A bevelled gold disc holding an icon. Add translate-z-* to lift it off a tilting card. */
export function Coin({
  icon,
  size = "md",
  className = "",
}: {
  icon: string;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 text-navy-950 shadow-coin ${SIZES[size]} ${className}`}
    >
      <Icon name={icon} />
    </span>
  );
}
