type Props = {
  subtitle: string;
  title: string;
};

export default function SectionTitle({
  subtitle,
  title,
}: Props) {
  return (
    <div className="mb-16 text-center">
      <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
        {subtitle}
      </p>

      <h2 className="mt-4 text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
}