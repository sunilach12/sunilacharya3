import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import AICard from "./AICard";

const demos = [
  {
    title: "AI Chatbot",
    description: "Chat with an intelligent assistant built using modern AI APIs.",
    status: "Coming Soon",
  },
  {
    title: "Image Classifier",
    description: "Upload an image and let AI predict what it contains.",
    status: "Coming Soon",
  },
  {
    title: "Speech to Text",
    description: "Convert spoken language into text using AI.",
    status: "Coming Soon",
  },
  {
    title: "Resume Analyzer",
    description: "Analyze resumes and receive AI-powered feedback.",
    status: "Coming Soon",
  },
];

export default function AIPlayground() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          subtitle="Artificial Intelligence"
          title="AI Playground"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {demos.map((demo) => (
            <AICard
              key={demo.title}
              title={demo.title}
              description={demo.description}
              status={demo.status}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
