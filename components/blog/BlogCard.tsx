type Blog = {
  title: string;
  description: string;
  date: string;
  readTime: string;
};

export default function BlogCard({
  title,
  description,
  date,
  readTime,
}: Blog) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-2 hover:border-cyan-400">
      <div className="h-48 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-700/20 flex items-center justify-center">
        <span className="text-cyan-300 text-xl font-bold">
          Blog Cover
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-gray-400">
        {description}
      </p>

      <div className="mt-5 flex justify-between text-sm text-gray-500">
        <span>{date}</span>
        <span>{readTime}</span>
      </div>

      <button className="mt-6 rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-black transition hover:bg-cyan-400">
        Read More
      </button>
    </div>
  );
}