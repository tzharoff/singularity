// src/pages/CardList.tsx
import { useEffect, useState } from "react";
import {
  subscribeToCardsByStatus,
} from "@/domain/cards/cards.query";
import type { SingularityCard, CardStatus } from "@/domain/cards/SingularityCard";
import { setCardStatus } from "@/domain/cards/cards.mutations";
import CardStatusSelect from "@/components/cards/CardStatusSelect";

export default function CardList() {
  const [cards, setCards] = useState<SingularityCard[]>([]);
  const [statusView, setStatusView] = useState<CardStatus>("active");

  useEffect(() => {
    const unsub = subscribeToCardsByStatus(statusView, setCards);
    return () => unsub();
  }, [statusView]);

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <strong>View:</strong>{" "}
        <CardStatusSelect
          value={statusView}
          onChange={setStatusView}
        />
      </div>

      {cards.map((card) => (
        <div key={card.id}>
          <strong>{card.title}</strong>{" "}
          <CardStatusSelect
            value={card.status}
            onChange={(s) => setCardStatus(card.id, s)}
          />
        </div>
      ))}
    </div>
  );
}
