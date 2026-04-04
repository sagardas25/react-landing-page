
import AvatarCluster from "./AvatarCluster";

const avatars = [
  {
    src: "https://randomuser.me/api/portraits/men/32.jpg",
    size: 70,
    style: { top: "10%", left: "5%" },
  },
  {
    src: "https://randomuser.me/api/portraits/men/45.jpg",
    size: 90,
    style: { top: "0%", left: "35%" },
  },
  {
    src: "https://randomuser.me/api/portraits/men/12.jpg",
    size: 70,
    style: { top: "50%", left: "65%" },
  },
  {
    src: "https://randomuser.me/api/portraits/men/76.jpg",
    size: 80,
    style: { top: "20%", left: "80%" },
  },
];

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-screen-xl px-4 pt-16 pb-12 md:px-10 md:pt-20 md:pb-16 overflow-hidden">
      
      {/* Decorative line (hide on small screens) */}
      <svg
        className="hidden md:block absolute left-[-20px] top-[60px] pointer-events-none"
        width="60"
        height="180"
        viewBox="0 0 70 180"
        fill="none"
      >
        <path
          d="M40 10 C80 40, 60 80, 20 120 C-10 150, 40 170, 20 180"
          stroke="#e8453c"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Heading */}
      <div className="text-center mb-10 md:mb-16">
        <h1 className="heading-display text-[clamp(32px,6vw,64px)] leading-tight mb-4">
          
          <span>
            The{" "}
            <span className="underline decoration-wavy decoration-orange-400">
              thinkers
            </span>{" "}
            and
          </span>

          <span className="block">
            doers were Ch
            <span className="bg-[#f5a8c8] inline-block rounded-full">
              anging
            </span>
          </span>

          <span className="block">
            the{" "}
            <span className="bg-[#b8d8b0] inline-block rounded-full">
              status
            </span>{" "}
            Quo with
          </span>
        </h1>

        <p className="text-[14px] md:text-[13px] text-[#666] leading-6 md:leading-7 max-w-[600px] mx-auto">
          We are a team of strategists, designers, communicators, and researchers.
          Together, we believe that progress only happens when you refuse to play things safe.
        </p>
      </div>

      {/* Avatar cluster wrapper */}
      <div className="relative h-[180px] md:h-[250px]">
        <AvatarCluster avatars={avatars} />
      </div>
    </section>
  );
}