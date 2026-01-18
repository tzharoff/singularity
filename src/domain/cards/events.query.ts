// src/domain/cards/events.query.ts
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { CardEvent } from "./CardEvent";

export function subscribeToCardEvents(
  cardId: string,
  callback: (events: CardEvent[]) => void
) {
  const q = query(
    collection(db, "cards", cardId, "events"),
    orderBy("at", "desc")
  );

  return onSnapshot(q, (snap) => {
    callback(
      snap.docs.map((d) => d.data() as CardEvent)
    );
  });
}
