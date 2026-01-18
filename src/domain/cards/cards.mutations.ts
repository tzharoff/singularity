// src/domain/cards/cards.mutations.ts
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function parkCard(cardId: string) {
  await updateDoc(doc(db, "cards", cardId), {
    status: "parked",
    updatedAt: serverTimestamp(),
  });
}
