type CreeperMarkProps = {
  className?: string;
};

export function CreeperMark({ className }: CreeperMarkProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      role="img"
      aria-label="TiffaCraft creeper"
    >
      <rect width="16" height="16" rx="3" fill="#8FBF6A" />
      <rect x="1" y="1" width="4" height="4" fill="#A8D48A" />
      <rect x="11" y="1" width="4" height="3" fill="#6F9A4C" />
      <rect x="3" y="4" width="3" height="3" fill="#1E2A1C" />
      <rect x="10" y="4" width="3" height="3" fill="#1E2A1C" />
      <rect x="3.4" y="5.7" width="0.9" height="0.9" fill="#C8E6A1" />
      <rect x="10.4" y="5.7" width="0.9" height="0.9" fill="#C8E6A1" />
      <rect x="6" y="8" width="4" height="2" fill="#1E2A1C" />
      <rect x="5" y="10" width="2" height="3" fill="#1E2A1C" />
      <rect x="9" y="10" width="2" height="3" fill="#1E2A1C" />
      <rect x="7" y="9" width="2" height="1" fill="#3D4A38" />
      <rect x="2" y="12" width="2" height="1" fill="#E8B8AE" opacity="0.85" />
      <rect x="12" y="12" width="2" height="1" fill="#E8B8AE" opacity="0.85" />
    </svg>
  );
}
