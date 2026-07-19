"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 2100;

export function Typewriter({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLength(phrases[0].length);
      return;
    }

    const phrase = phrases[index];
    let delay = deleting ? DELETE_MS : TYPE_MS;

    if (!deleting && length === phrase.length) delay = HOLD_MS;

    const timer = setTimeout(() => {
      if (!deleting && length === phrase.length) {
        setDeleting(true);
      } else if (deleting && length === 0) {
        setDeleting(false);
        setIndex((index + 1) % phrases.length);
      } else {
        setLength(length + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [phrases, index, length, deleting]);

  return (
    <span className="text-cyan-200">
      {phrases[index].slice(0, length)}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
