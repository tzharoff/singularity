// src/components/domains/DomainBadge.tsx
type Props = {
  label: string;
  color?: string;
};

export default function DomainBadge({ label, color }: Props) {
  return (
    <span
      style={{
        padding: "2px 6px",
        borderRadius: 4,
        background: color ?? "#e5e7eb",
        fontSize: 12,
      }}
    >
      {label}
    </span>
  );
}
