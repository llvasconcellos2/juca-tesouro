import { RefObject } from "react";

interface SceneViewProps {
  text: string;
  headingRef: RefObject<HTMLHeadingElement | null>;
  sceneLabel: string;
}

export default function SceneView({ text, headingRef, sceneLabel }: SceneViewProps) {
  const paragraphs = text.split("\n\n").filter(Boolean);

  return (
    <article className="space-y-5">
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="sr-only focus:not-sr-only focus:outline-none"
      >
        {sceneLabel}
      </h2>
      {paragraphs.map((para, i) => (
        <p
          key={i}
          className="text-[#f5f0e8] leading-[1.85] text-lg"
          style={{ fontFamily: "var(--font-story)" }}
        >
          {para}
        </p>
      ))}
    </article>
  );
}
