import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold tracking-wide">
      <span className="text-cyan-400"></span>
      <span className="text-white">Sunil Acharya</span>

      <span className="text-cyan-400"></span>

    </Link>
  );
}