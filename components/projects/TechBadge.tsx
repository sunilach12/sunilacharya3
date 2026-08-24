type Props = {
  tech: string;
};

export default function TechBadge({ tech }: Props) {
  return (
    <span
      className="
      rounded-full
      border
      border-cyan-400/30
      bg-cyan-500/10
      px-3
      py-1
      text-sm
      text-cyan-300
      transition
      hover:border-cyan-400
      hover:bg-cyan-400/20
      "
    >
      {tech}
    </span>
  );
}