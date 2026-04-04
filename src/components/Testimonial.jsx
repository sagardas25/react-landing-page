

const sideAvatars = [
  { src: "https://randomuser.me/api/portraits/men/11.jpg", size: 50 },
  { src: "https://randomuser.me/api/portraits/women/22.jpg", size: 60 },
  { src: "https://randomuser.me/api/portraits/men/55.jpg", size: 50 },
];

const rightAvatars = [
  { src: "https://randomuser.me/api/portraits/women/33.jpg", size: 70 },
  { src: "https://randomuser.me/api/portraits/men/77.jpg", size: 90 },
  {
    src: "https://randomuser.me/api/portraits/men/99.jpg",
    size: 110,
    highlight: true,
  },
];

function SideAvatar({ src, size, highlight }) {
  return (
    <div
      className={`rounded-full overflow-hidden shadow-lg flex-shrink-0 ${
        highlight ? "ring-[3px] ring-[#e8453c]" : ""
      }`}
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt="User avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function Testimonial() {
  return (
    <section className="py-16 md:py-24 bg-white">
      
      <div className="max-w-screen-xl mx-auto px-4 md:px-10">

        {/* Mobile layout */}
        <div className="flex flex-col items-center gap-8 md:hidden">
          
          {/* Top avatars */}
          <div className="flex gap-3">
            {sideAvatars.map((av, i) => (
              <SideAvatar key={i} {...av} />
            ))}
          </div>

          {/* Card */}
          <div className="text-center bg-[#ebf7e8da] rounded-[20px] px-5 py-6">
            
            <h2 className="heading-display text-[clamp(18px,5vw,30px)] mb-5 leading-tight">
              <span className="bg-[#b8d8b0] inline-block rounded-full">
                What
              </span>{" "}
              our customer

              <span className="block">
                says{" "}
                <span className="underline decoration-wavy decoration-orange-400">
                  About Us
                </span>
              </span>
            </h2>

            <p className="text-[14px] text-[#333] leading-6">
              “Elementum delivered the site within the timeline as requested.
              The client saw a 50% increase in traffic within days of launch.
              Their ability to adopt new technologies was impressive and reliable.”
            </p>
          </div>

          {/* Bottom avatars */}
          <div className="flex gap-3">
            {rightAvatars.map((av, i) => (
              <SideAvatar key={i} {...av} />
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-[100px_1fr_160px] gap-10 items-center">
          
          {/* Left avatars */}
          <div className="flex flex-col gap-4 items-center">
            {sideAvatars.map((av, i) => (
              <SideAvatar key={i} {...av} />
            ))}
          </div>

          {/* Card */}
          <div className="text-center bg-[#ebf7e8da] rounded-[20px] px-10 py-10">
            
            <h2 className="heading-display text-[clamp(20px,2.5vw,30px)] mb-6 leading-tight">
              <span className="bg-[#b8d8b0] inline-block rounded-full">
                What
              </span>{" "}
              our customer

              <span className="block">
                says{" "}
                <span className="underline decoration-wavy decoration-orange-400">
                  About Us
                </span>
              </span>
            </h2>

            <p className="text-[15px] text-[#333] leading-7">
              “Elementum delivered the site within the timeline as requested.
              The client saw a 50% increase in traffic within days of launch.
              Their ability to adopt new technologies was impressive and reliable.”
            </p>
          </div>

          {/* Right avatars */}
          <div className="flex flex-col gap-4 items-center">
            {rightAvatars.map((av, i) => (
              <SideAvatar key={i} {...av} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}