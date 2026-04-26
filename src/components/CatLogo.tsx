interface CatLogoProps {
  size?: number;
}

export default function CatLogo({ size = 40 }: CatLogoProps) {
  const c = 'var(--color-cta)'; // color-cta from palette
  const w = '2.2';              // stroke width

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
      className="cat-logo"
    >
      {/* Ears */}
      <polygon points="20,45 30,10 45,40" fill="none" stroke={c} strokeWidth={w} strokeLinejoin="round" />
      <polygon points="80,45 70,10 55,40" fill="none" stroke={c} strokeWidth={w} strokeLinejoin="round" />
      {/* Head */}
      <circle cx="50" cy="58" r="32" fill="none" stroke={c} strokeWidth={w} />
      {/* Eyes */}
      <ellipse cx="38" cy="54" rx="3.5" ry="4" fill="none" stroke={c} strokeWidth={w} />
      <ellipse cx="62" cy="54" rx="3.5" ry="4" fill="none" stroke={c} strokeWidth={w} />
      {/* Nose */}
      <polygon points="50,62 47,66 53,66" fill="none" stroke={c} strokeWidth={w} strokeLinejoin="round" />
      {/* Mouth */}
      <path d="M47,66 Q50,71 53,66" fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="18" y1="60" x2="35" y2="62" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="66" x2="35" y2="66" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="82" y1="60" x2="65" y2="62" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="82" y1="66" x2="65" y2="66" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
