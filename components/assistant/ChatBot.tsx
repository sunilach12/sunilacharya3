"use client";

import { useState } from "react";
import { Bot, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ChatWindow from "./ChatWindow";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50"
          >
            <ChatWindow />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-cyan-500 text-white shadow-lg hover:scale-110 transition"
      >
        {open ? <X size={28} /> : <Bot size={28} />}
      </button>
    </>
  );
}