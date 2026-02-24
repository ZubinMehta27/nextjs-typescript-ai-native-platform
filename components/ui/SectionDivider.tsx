"use client";

export default function SectionDivider() {
  return (
    <div className="relative h-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-white" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[200px] bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.04),_transparent_70%)]" />
    </div>
  );
}