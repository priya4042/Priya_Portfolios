import { useEffect, useState } from "react";

/**
 * Simple typewriter hook.
 * words: array of strings
 * typingSpeed: ms per character
 */
export default function useTypewriter(words = [], typingSpeed = 100, pause = 1500){
  const [index, setIndex] = useState(0);      // which word
  const [subIndex, setSubIndex] = useState(0); // which char
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const currentWord = words[index];

    if (!reverse) {
      if (subIndex < currentWord.length) {
        const timeout = setTimeout(() => setSubIndex(prev => prev + 1), typingSpeed);
        return () => clearTimeout(timeout);
      }
      // pause at full word
      const timeout = setTimeout(() => setReverse(true), pause);
      return () => clearTimeout(timeout);
    } else {
      if (subIndex > 0) {
        const timeout = setTimeout(() => setSubIndex(prev => prev - 1), typingSpeed / 2);
        return () => clearTimeout(timeout);
      }
      // move to next word
      const timeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [subIndex, index, reverse, words, typingSpeed, pause]);

  // caret blink
  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(t);
  }, []);

  return {
    text: words.length ? words[index].substring(0, subIndex) : "",
    cursor: blink ? "|" : " "
  };
}
