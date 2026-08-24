import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-cyan-500 hover:bg-cyan-400 text-black"
      : "border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black";

  if (href) {
    return (
      <Link
        href={href}
        className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${classes}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${classes}`}
    >
      {children}
    </button>
  );
}