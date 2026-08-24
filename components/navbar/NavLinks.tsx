import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
  return (
    <div className="hidden md:flex gap-8">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}