"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { spring } from "@/lib/motion";

/** Lifts on hover and presses on tap with spring physics. */
export function Pressable({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.span
      className={`inline-flex ${className}`}
      whileHover={{ y: -3 }}
      whileTap={{ y: 1, scale: 0.98 }}
      transition={spring}
    >
      {children}
    </motion.span>
  );
}

const VARIANTS = {
  gold: "bg-gradient-to-b from-gold-300 to-gold-500 text-navy-950 shadow-btn-gold hover:from-gold-200 hover:to-gold-400",
  navy: "bg-gradient-to-b from-navy-600 to-navy-900 text-ivory shadow-btn-navy hover:from-navy-500 hover:to-navy-800",
  ghost: "border border-[color:var(--line)] bg-transparent hover:bg-[color:var(--card)] hover:text-[color:var(--card-fg)]",
} as const;

const SIZES = {
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-2.5 text-[13px]",
  xs: "px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-[13px]",
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  icon?: string;
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "gold",
  size = "md",
  icon,
  external = false,
  className = "",
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-heading font-semibold tracking-wide transition-colors ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  const content = (
    <>
      {icon && <Icon name={icon} className="h-4 w-4" />}
      {children}
    </>
  );
  const internal = href.startsWith("/") && !external;

  return (
    <Pressable>
      {internal ? (
        <Link href={href} className={classes}>
          {content}
        </Link>
      ) : (
        <a
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {content}
        </a>
      )}
    </Pressable>
  );
}
