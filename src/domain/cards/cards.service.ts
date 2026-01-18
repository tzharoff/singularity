// cards.service.ts
import { auth, db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export async function createCard(title: string) {
  const user = auth.currentUser;
  if (!user) throw new Error("No auth");

  const cardRef = await addDoc(collection(db, "cards"), {
    title,
    status: "active",
    ownerId: user.uid,
    createdAt: serverTimestamp(),
  });

  await addDoc(collection(db, "cards", cardRef.id, "events"), {
    type: "CREATED",
    at: serverTimestamp(),
    by: user.uid,
  });

  return cardRef;
}
