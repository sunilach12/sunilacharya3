"use client";

const questions = [
  "👨 Tell me about Sunil",
  "🚀 Show me his projects",
  "🧠 What AI skills does he have?",
  "🎓 Tell me about his education",
  "🏆 Show certificates",
  "📞 How can I contact Sunil?",
];

type Props = {
  onSelect: (question: string) => void;
};

export default function SuggestedQuestions({
  onSelect,
}: Props) {
  return (
    <div className="mb-5">

      <p className="mb-3 text-xs uppercase tracking-widest text-cyan-400">
        Suggested Questions
      </p>

      <div className="flex flex-wrap gap-2">

        {questions.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            className="
              rounded-full
              border
              border-cyan-500/30
              bg-slate-800
              px-4
              py-2
              text-sm
              transition
              hover:border-cyan-400
              hover:bg-cyan-500
              hover:text-black
            "
          >
            {question}
          </button>
        ))}

      </div>
    </div>
  );
}