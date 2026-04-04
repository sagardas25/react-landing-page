

export default function Newsletter() {
  return (
    <section className="relative bg-[#d6e8d0] py-24 px-10 text-center overflow-hidden">
      <div className="absolute right-16 top-10 w-20 h-[110px] bg-[#a78bda] opacity-85 rounded-[50%_50%_50%_50%/50%_60%_40%_40%] rotate-[15deg]" />

      <div className="relative z-10">
        <h2 className="heading-display text-[clamp(36px,5vw,60px)] mb-4 text-[#111]">
          Subscribe to<br />
          our newsletter
        </h2>
        <p className="text-[13px] text-[#666] mb-9">
          To make your stay special and even more memorable
        </p>
        <button className="inline-block bg-[#111] text-white text-[13px] font-medium px-9 py-[14px] rounded-full border-none cursor-pointer transition-colors hover:bg-[#333]">
          Subscribe Now
        </button>
      </div>
    </section>
  );
}
