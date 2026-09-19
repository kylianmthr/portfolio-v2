export function AmbientOrbs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute -top-[220px] -left-[140px] h-[750px] w-[750px]"
        style={{
          background:
            "radial-gradient(circle, hsla(255,55%,72%,.04) 0%, transparent 62%)",
          animation: "pulse-glow 11s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[38%] -right-[200px] h-[650px] w-[650px]"
        style={{
          background:
            "radial-gradient(circle, hsla(220,55%,75%,.03) 0%, transparent 62%)",
          animation: "pulse-glow 14s ease-in-out infinite 3.5s",
        }}
      />
      <div
        className="absolute bottom-[8%] left-[35%] h-[500px] w-[500px]"
        style={{
          background:
            "radial-gradient(circle, hsla(255,55%,72%,.025) 0%, transparent 62%)",
          animation: "pulse-glow 17s ease-in-out infinite 7s",
        }}
      />
    </div>
  );
}
