// src/components/cards/CardHistory.tsx
import { useEffect, useState } from "react";
import type { CardEvent } from "@/domain/cards/CardEvent";
import { subscribeToCardEvents } from "@/domain/cards/events.query";

export default function CardHistory({ cardId }: { cardId: string }) {
  const [events, setEvents] = useState<CardEvent[]>([]);

  useEffect(() => {
    return subscribeToCardEvents(cardId, setEvents);
  }, [cardId]);

  return (
    <ul>
      {events.map((e, i) => (
        <li key={i}>
          {e.type} @ {String(e.at?.toDate?.())}
        </li>
      ))}
    </ul>
  );
}
