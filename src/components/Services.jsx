

import ServiceRow from "./ServiceRow";

const services = [
  {
    label: "Office of multiple interest content",
    title: "Collaborative & partnership",
  },
  {
    label: "The hanger US Air force digital experiments",
    title: "We talk about our weight",
  },
  {
    label: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

export default function Services() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      
      <div className="max-w-screen-xl mx-auto px-4 md:px-10">

        {/* Decoration (safe) */}
        <svg
          className="hidden md:block absolute top-[-70px] right-0 w-4/6 opacity-80 pointer-events-none scale-y-[-1]"
          viewBox="0 0 500 100"
          fill="none"
        >
          <path
            d="M30 100 C70 0 , 200 90, 300 50 C400 10, 500 80, 550 100"
            stroke="#e8453c"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Heading */}
        <h2 className="heading-display text-[clamp(28px,6vw,64px)] leading-tight mb-10 md:mb-14 text-center md:text-left">
          
          <span>
            What we{" "}
            <span className="bg-[#b8d8b0] px-1 rounded-sm">
              can
            </span>
          </span>

          <span className="block">
            <span className="underline decoration-wavy decoration-orange-400">
              offer
            </span>{" "}
            you!
          </span>
        </h2>

        {/* Service rows */}
        <div className="border-b border-[#ddd]">
          {services.map((s, i) => (
            <ServiceRow key={i} label={s.label} title={s.title} />
          ))}
        </div>

      </div>
    </section>
  );
}
