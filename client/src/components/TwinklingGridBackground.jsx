// Stars: [left%, top-px, sizeClass, colorClass, animClass]
// top values are within 0–80px (~5rem)
const stars = [
  [3,  8,  "star-sm", "star-white",  "t1"],
  [8,  40, "star-xs", "star-blue",   "t3"],
  [13, 15, "star-md", "star-white",  "t2"],
  [18, 55, "star-xs", "star-purple", "t5"],
  [22, 20, "star-sm", "star-cyan",   "t4"],
  [27, 48, "star-xs", "star-white",  "t7"],
  [31, 10, "star-sm", "star-blue",   "t1"],
  [36, 62, "star-xs", "star-white",  "t6"],
  [40, 25, "star-md", "star-purple", "t9"],
  [45, 50, "star-xs", "star-cyan",   "t3"],
  [50, 12, "star-sm", "star-white",  "t2"],
  [54, 68, "star-xs", "star-blue",   "t8"],
  [58, 30, "star-sm", "star-white",  "t5"],
  [63, 18, "star-xs", "star-purple", "t4"],
  [67, 58, "star-md", "star-cyan",   "t10"],
  [72, 8,  "star-xs", "star-white",  "t1"],
  [76, 44, "star-sm", "star-blue",   "t6"],
  [81, 22, "star-xs", "star-white",  "t3"],
  [85, 65, "star-sm", "star-purple", "t7"],
  [89, 14, "star-xs", "star-cyan",   "t2"],
  [93, 38, "star-sm", "star-white",  "t5"],
  [97, 52, "star-xs", "star-blue",   "t4"],
  [10, 72, "star-xs", "star-white",  "t11"],
  [20, 35, "star-sm", "star-cyan",   "t12"],
  [47, 75, "star-xs", "star-purple", "t6"],
  [60, 42, "star-sm", "star-white",  "t8"],
  [75, 70, "star-xs", "star-blue",   "t3"],
  [88, 28, "star-sm", "star-white",  "t11"],
];

export default function TwinklingGridBackground() {
  return (
    <>
      {/* dot grid fading downward */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, transparent 15%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, transparent 15%)",
        }}
      />

      {/* soft blue glow at top center */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 h-32 w-[600px] opacity-[0.06]"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(147,197,253,1) 0%, transparent 70%)",
        }}
      />

      {/* stars clipped to top ~5rem */}
      <div
        className="absolute inset-x-0 top-0 overflow-hidden"
        style={{ height: "5rem" }}
      >
        {stars.map(([l, t, size, color, anim], i) => (
          <div
            key={i}
            className={`star ${size} ${color} ${anim}`}
            style={{ left: `${l}%`, top: `${t}px` }}
          />
        ))}
      </div>
    </>
  );
}
