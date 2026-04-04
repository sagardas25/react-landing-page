export default function FooterColumn({ heading, links, isAddress, address, phone, email }) {
  return (
    <div>
      <h4 className="text-[12px] font-semibold capitalize mb-4 text-[#111] tracking-wide">
        {heading}
      </h4>

      {isAddress ? (
        <address className="not-italic flex flex-col gap-2 text-[12px] text-[#666] leading-relaxed">
          <p className="whitespace-pre-line">{address}</p>
          <a href={`tel:${phone}`}    className="text-[#666] no-underline hover:text-[#111] transition-colors">{phone}</a>
          <a href={`mailto:${email}`} className="text-[#666] no-underline hover:text-[#111] transition-colors">{email}</a>
        </address>
      ) : (
        <ul className="list-none flex flex-col gap-[10px]">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="text-[12px] text-[#666] no-underline hover:text-[#111] transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
