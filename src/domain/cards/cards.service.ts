// src/domain/cards/cards.service.ts
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
//import type { SingularityCard } from "./SingularityCard";
import { auth } from "@/lib/firebase";

export async function createCard(title: string) {
  const user = auth.currentUser;
  if (!user) throw new Error("No auth");

  return addDoc(collection(db, "cards"), {
    title,
    status: "active",
    ownerId: user.uid,
    createdAt: serverTimestamp(),
  });
}
