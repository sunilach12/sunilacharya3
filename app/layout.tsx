import "./globals.css";
import { Inter } from "next/font/google";
import ChatBot from "@/components/assistant/ChatBot";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Sunil Acharya | AI Enthusiast",
  description: "Portfolio of Sunil Acharya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#080B16] text-white`}>
         
        <main className="pt-20">
          {children}
           
        </main>

        <ChatBot />
      </body>
    </html>
  );
}
