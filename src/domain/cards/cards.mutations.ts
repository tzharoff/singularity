// src/domain/cards/cards.mutations.ts
import {
  doc,
  updateDoc,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase";


export async function parkCard(cardId: string) {
  const user = auth.currentUser;
  if (!user) throw new Error("No auth");

  await updateDoc(doc(db, "cards", cardId), {
    status: "parked",
    updatedAt: serverTimestamp(),
  });

  await addDoc(collection(db, "cards", cardId, "events"), {
    type: "PARKED",
    at: serverTimestamp(),
    by: user.uid,
  });
}

export async function assignDomain(
  cardId: string,
  domainId: string
) {
  const user = auth.currentUser;
  if (!user) throw new Error("No auth");

  // 1. Mutate current state
  await updateDoc(doc(db, "cards", cardId), {
    domain: domainId,
    updatedAt: serverTimestamp(),
  });

  // 2. Record the immutable event
  await addDoc(collection(db, "cards", cardId, "events"), {
    type: "UPDATED",
    at: serverTimestamp(),
    by: user.uid,
    meta: { domain: domainId },
  });
}



