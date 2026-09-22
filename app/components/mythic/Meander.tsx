export default function Meander({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 240 16"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      <path
        d="M0 8H10V0H26V16H42V0H58V16H74V0H90V16H106V0H122V16H138V0H154V16H170V0H186V16H202V0H218V16H230V8H240"
        stroke="var(--myth-line-strong)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
