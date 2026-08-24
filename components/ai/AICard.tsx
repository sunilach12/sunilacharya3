import Card from "@/components/ui/Card";

type Props = {
  title: string;
  description: string;
  status: string;
};

export default function AICard({
  title,
  description,
  status,
}: Props) {
  return (
    <Card>
      <h3 className="text-2xl font-bold text-cyan-400">
        {title}
      </h3>

      <p className="mt-4 text-gray-400">
        {description}
      </p>

      <div className="mt-6">
        <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-400">
          {status}
        </span>
      </div>
    </Card>
  );
}