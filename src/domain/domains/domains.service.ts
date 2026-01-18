// src/domain/domains/domains.service.ts
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { auth } from "@/lib/firebase";

export async function seedDefaultDomains() {
  const user = auth.currentUser;
  if (!user) return;

  const domains = [
    { label: "Ops", color: "#ef4444" },
    { label: "Build", color: "#3b82f6" },
    { label: "Ideas", color: "#22c55e" },
  ];

  for (const d of domains) {
    await addDoc(collection(db, "domains"), {
      ...d,
      ownerId: user.uid,
    });
  }
}
