

export default function Tomorrow() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Left text */}
        <div className="text-center md:text-left">
          <h2 className="heading-display text-[clamp(26px,5vw,44px)] leading-tight mb-4">
            
            <span className="underline decoration-wavy decoration-orange-400">
              Tomorrow
            </span>{" "}
            should

            <span className="block">
              be better than{" "}
              <span className="bg-[#b8d8b0] inline-block rounded-full">
                today
              </span>
            </span>
          </h2>

          <p className="text-[14px] md:text-[13px] text-[#666] leading-6 md:leading-[1.8] mb-5 max-w-[500px] mx-auto md:mx-0">
            We are a team of strategists, designers, communicators, and researchers.
            Together, we believe that progress only happens when you refuse to play things safe.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-[14px] md:text-[13px] text-[#111] border-b border-black pb-[2px]"
          >
            Read more →
          </a>
        </div>

        {/* Right visual */}
        <div className="relative flex justify-center items-center">
          
          {/* Glow  */}
          <div className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] bg-[radial-gradient(circle,rgba(245,168,200,0.35)_0%,transparent_70%)] rounded-full top-[-20px] md:top-[-40px] right-[10%] md:right-[-20px]" />

          {/* Triangle  */}
          <div className="hidden md:block triangle-red absolute top-[-20px] right-10 z-[1]" />

          {/* Image */}
          <div className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden relative z-[2] shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <img
              src="/img-01.png"
              alt="meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Decorative curv */}
      <svg
        className="hidden md:block absolute bottom-[-50px] right-0 w-4/6 opacity-80 pointer-events-none"
        viewBox="0 0 500 100"
        fill="none"
      >
        <path
          d="M30 100 C70 0 , 200 90, 300 50 C400 10, 500 80, 530 100"
          stroke="#e8453c"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </section>
  );
}
