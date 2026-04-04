export default function ServiceRow({ label, title }) {
  return (
    <div>
      <hr className="border-none border-t border-[#ddd] m-0" />
      <div className="grid grid-cols-[200px_1fr_40px] md:grid-cols-[200px_1fr_40px] items-center py-7 gap-5 hover:bg-[#fafafa] transition-colors">
        {/* Label */}
        <span className="hidden md:block text-[12px] text-[#666] leading-[1.5]">
          {label}
        </span>
        {/* Title */}
        <span className="font-display font-normal text-[clamp(20px,2.2vw,28px)] text-[#111]">
          {title}
        </span>
        {/* Arrow */}
        <button
          aria-label="Go"
          className="flex items-center justify-end bg-transparent border-none cursor-pointer transition-transform hover:translate-x-1"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10h12M11 5l5 5-5 5"
              stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
