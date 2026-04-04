import FooterColumn from './FooterColumn';

const columns = [
  {
    heading: 'Company',
    links: ['Home', 'About', 'Studio', 'Services', 'Blog'],
  },
  {
    heading: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Custom', 'Accessbility'],
  },
  {
    heading: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
  },
  {
    heading: 'Terms & Policies',
    isAddress: true,
    address: '1498a Hubarik, ST\nZD-Okruga, IL 43847',
    phone: '220-4647813030',
    email: 'Info@elementum.com',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#d6e8d0] border-t border-black/10 pt-16 pb-8">
      {/* 4-column grid */}
      <div className="max-w-content mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {columns.map((col, i) => (
          <FooterColumn key={i} {...col} />
        ))}
      </div>

      {/* Bottom bar */}
      <div className="max-w-content mx-auto px-10 border-t border-black/10 pt-5 text-center">
        <span className="text-[11px] text-[#666]">
          ©2025 Elementum. All rights reserved.
        </span>
      </div>
    </footer>
  );
}