"use client";

interface ChoiceButtonProps {
  label: string;
  onClick: () => void;
  index: number;
}

export default function ChoiceButton({ label, onClick, index }: ChoiceButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        w-full text-left px-6 py-4 rounded-xl text-base font-medium
        bg-white/5 border border-emerald-400/40 text-[#f5f0e8]
        hover:bg-emerald-400/15 hover:border-emerald-400
        focus-visible:outline-none focus-visible:ring-4
        focus-visible:ring-emerald-400 focus-visible:ring-offset-2
        focus-visible:ring-offset-[#0a1628]
        active:scale-[0.99] transition-all cursor-pointer
        leading-relaxed
      "
    >
      <span className="text-emerald-400 font-bold mr-3" aria-hidden="true">
        {index + 1}.
      </span>
      {label}
    </button>
  );
}
