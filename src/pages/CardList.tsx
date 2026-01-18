// src/pages/CardList.tsx
import { useEffect, useState } from "react";
import { subscribeToActiveCards } from "@/domain/cards/cards.query";
import type { SingularityCard } from "@/domain/cards/SingularityCard";
import { parkCard } from "@/domain/cards/cards.mutations";

export default function CardList() {
  const [cards, setCards] = useState<SingularityCard[]>([]);

  useEffect(() => {
    const unsub = subscribeToActiveCards(setCards);
    return () => unsub();
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id}>
          <strong>{card.title}</strong>
          <button onClick={() => parkCard(card.id)}>
            Park
          </button>
        </div>
      ))}
    </div>
  );
}
