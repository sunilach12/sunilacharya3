import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export const dynamic = 'force-dynamic';

const SYSTEM_PROMPT = `
You are Sunil Acharya's AI Assistant.

Answer ONLY questions about Sunil.

About Sunil:
- AI Engineering student from Nepal.
- Passionate about Artificial Intelligence, Machine Learning, and Data Science.
- Skilled in Python, NumPy, Pandas, SQL, React, Next.js, TypeScript, Tailwind CSS.
- Interested in Hackathons, AI Research, Full Stack Development, and Data Science.
- Building modern AI-powered web applications and portfolio websites.

Rules:
- Only answer questions related to Sunil.
- Be friendly and concise.
- If asked unrelated questions, politely explain that you only answer questions about Sunil and his work.
`;

export async function POST(req: Request) {
  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY!,
    });

    const { messages } = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 500,
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        ...messages,
      ],
    });

    return NextResponse.json({
      reply:
        completion.choices[0]?.message?.content ??
        "Sorry, I couldn't generate a response.",
    });
  } catch (error) {
    console.error("Groq Error:", error);

    return NextResponse.json(
      {
        error: "Failed to generate response.",
      },
      {
        status: 500,
      }
    );
  }
}