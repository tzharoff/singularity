// src/components/cards/CardStatusSelect.tsx
import type { CardStatus } from "@/domain/cards/SingularityCard";
import { CARD_STATUSES } from "@/domain/cards/SingularityCard";

type Props = {
  value: CardStatus;
  onChange: (status: CardStatus) => void;
};

export default function CardStatusSelect({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as CardStatus)}
    >
      {CARD_STATUSES.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
}
