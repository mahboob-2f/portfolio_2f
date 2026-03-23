export default function ProfileImageRing({ image }) {
  return (
    <div className="relative">
      <div
        className="h-[180px] w-[180px] rounded-full bg-[conic-gradient(#22c55e_0deg,#3b82f6_110deg,#ef4444_220deg,#eab308_300deg,#22c55e_360deg)] p-[4px] shadow-[0_0_40px_rgba(255,255,255,0.06)] sm:h-[210px] sm:w-[210px]" // FIXED: reduced image size
      >
        <div className="flex h-full w-full items-center justify-center rounded-full bg-black p-[8px]">
          <img
            src={image}
            alt="profile"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}