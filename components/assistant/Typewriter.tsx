"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
};

export default function Typewriter({
  text,
}: Props) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      index++;

      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(timer);
      }
    }, 15);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span>{displayed}</span>
  );
}