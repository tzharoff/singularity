import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function SmokeTest() {
  async function testWrite() {
    await addDoc(collection(db, "smokeTests"), {
      createdAt: new Date(),
      note: "Singularity online",
    });
    alert("Firestore write successful");
  }

  return <button onClick={testWrite}>Test Firestore</button>;
}
