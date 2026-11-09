type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const PhoneIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M6.6 3.5h2.2l1.4 4-1.9 1.3a11 11 0 0 0 6.9 6.9l1.3-1.9 4 1.4v2.2a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z" />
  </svg>
);

export const MailIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const PinIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);

export const PhysioIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="4.5" r="1.8" />
    <path d="M5 9.5 12 8l7 1.5M12 8v5.5m0 0L9 21m3-7.5L15 21" />
  </svg>
);

export const FootIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M9.6 21c-2.4 0-3.8-2-3.8-4.7 0-2.2.9-3.8 1.3-5.5.4-1.7.4-3.2 1.4-4 .9-.7 2.2-.4 2.7.9.6 1.6.2 3.4-.3 5-.4 1.4-.6 2.5-.1 3.8.4 1.1 1.2 1.9 1.2 3 0 .9-.9 1.5-2.4 1.5z" />
    <circle cx="12.4" cy="3.6" r="1.1" />
    <circle cx="14.8" cy="4.6" r=".8" />
    <circle cx="16.5" cy="6.1" r=".7" />
    <circle cx="17.6" cy="7.9" r=".6" />
  </svg>
);

export const ChevronIcon = ({ className }: IconProps) => (
  <svg {...base} className={className} strokeWidth={2}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);
