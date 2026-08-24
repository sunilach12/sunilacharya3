export default function Badge({
  text,
}: {
  text: string;
}) {
  return (
    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
      {text}
    </span>
  );
}