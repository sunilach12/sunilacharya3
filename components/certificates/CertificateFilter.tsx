"use client";

const categories = [
  "All",
  "AI",
  "Python",
  "Data Science",
  "Web",
];

type Props = {
  selected: string;
  onChange: (category: string) => void;
};

export default function CertificateFilter({
  selected,
  onChange,
}: Props) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-4">

      {categories.map((item) => (

        <button
          key={item}
          onClick={() => onChange(item)}
          className={`rounded-full px-6 py-3 transition ${
            selected === item
              ? "bg-cyan-500 text-black"
              : "bg-slate-800 text-white hover:bg-slate-700"
          }`}
        >
          {item}
        </button>

      ))}

    </div>
  );
}