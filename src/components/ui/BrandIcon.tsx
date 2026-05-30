export function BrandIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#18181b" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <path
        d="M10 9h12v3.5H14v4h7v3.5H14v6.5h-4V9z"
        fill="#fafafa"
      />
    </svg>
  );
}
