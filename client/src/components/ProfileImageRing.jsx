export default function ProfileImageRing({ image }) {
  return (
    <div className="relative cursor-pointer">
      <div
        className="h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] rounded-full p-[5px] bg-[conic-gradient(from_0deg,_#22c55e,_#3b82f6,_#ef4444,_#eab308,_#22c55e)] shadow-[0_0_40px_rgba(255,255,255,0.08)]"
      >
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-black p-[10px]">
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