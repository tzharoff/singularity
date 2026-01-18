// src/domain/cards/cards.query.ts
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { auth } from "@/lib/firebase";
import type { CardStatus, SingularityCard } from "./SingularityCard";

export function subscribeToActiveCards(
  callback: (cards: SingularityCard[]) => void
) {
  const user = auth.currentUser;
  if (!user) return () => {};

  const q = query(
    collection(db, "cards"),
    where("ownerId", "==", user.uid),
    where("status", "==", "active"),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(q, (snapshot) => {
    const cards = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<SingularityCard, "id">),
    }));
    callback(cards);
  });
}

export function subscribeToParkedCards(
  callback: (cards: SingularityCard[]) => void
) {
  const user = auth.currentUser;
  if (!user) return () => {};

  const q = query(
    collection(db, "cards"),
    where("ownerId", "==", user.uid),
    where("status", "==", "parked"),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(q, (snapshot) => {
    const cards = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<SingularityCard, "id">),
    }));
    callback(cards);
  });
}

export function subscribeToCardsByStatus(
  status: CardStatus,
  callback: (cards: SingularityCard[]) => void
) {
  const user = auth.currentUser;
  if (!user) return () => {};

  const q = query(
    collection(db, "cards"),
    where("ownerId", "==", user.uid),
    where("status", "==", status),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(q, (snapshot) => {
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<SingularityCard, "id">),
      }))
    );
  });
}
