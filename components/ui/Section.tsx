import { ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
};

export default function Section({
  id,
  children,
}: Props) {
  return (
    <section
      id={id}
      className="relative py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
}