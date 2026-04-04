

export default function Progress() {
  return (
    <section className="py-16 md:py-24">
      
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

        {/* Left visual */}
        <div className="relative flex justify-center items-center order-1 md:order-none">
          
          {/* Decorative triangles (safe usage) */}
          <div className="hidden md:block triangle-red absolute bottom-[-10px] left-[30px] scale-[1.2]" />
          <div className="hidden md:block triangle-red absolute top-[20px] left-[60px] scale-90 opacity-70" />

          {/* Image */}
          <div className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative z-[2]">
            <img
              src="src/assets/img-02.png"
              alt="team working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right text */}
        <div className="text-center md:text-left order-2 md:order-none">
          
          <h2 className="heading-display text-[clamp(24px,5vw,42px)] leading-tight mb-4">
            
            <span className="bg-[#b8d8b0] inline-block rounded-full">
              See
            </span>{" "}
            how we can

            <span className="block">
              help you{" "}
              <span className="underline decoration-wavy decoration-orange-400">
                progress
              </span>
            </span>
          </h2>

          <p className="text-[14px] md:text-[13px] text-[#666] leading-6 md:leading-[1.8] mb-5 max-w-[500px] mx-auto md:mx-0">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design,
            digital, comms, and social research.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-[14px] md:text-[13px] text-[#111] border-b border-[#111] pb-[2px]"
          >
            Read more →
          </a>
        </div>

      </div>
    </section>
  );
}