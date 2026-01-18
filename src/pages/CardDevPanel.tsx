// src/pages/CardDevPanel.tsx
import { createCard } from "@/domain/cards/cards.service";

export default function CardDevPanel() {
  return (
    <button
      onClick={() => createCard("First Singularity Card")}
    >
      Create Card
    </button>
  );
}
