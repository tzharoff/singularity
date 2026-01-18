// src/pages/CreateCardPage.tsx
import { useState } from "react";
import { createCard } from "@/domain/cards/cards.service";

export default function CreateCardPage({
  onDone,
}: {
  onDone: () => void;
}) {
  const [title, setTitle] = useState("");

  async function handleCreate() {
    if (!title.trim()) return;
    await createCard(title.trim());
    onDone();
  }

  return (
    <div>
      <h2>Create Card</h2>

        <textarea
        autoFocus
        placeholder="What’s on your mind?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        rows={3}
        style={{
            width: "100%",
            resize: "none",
            fontSize: 16,
            padding: 8,
        }}
        onInput={(e) => {
            const el = e.currentTarget;
            el.style.height = "auto";
            el.style.height = el.scrollHeight + "px";
        }}
        />


      <div>
        <button onClick={handleCreate}>Create</button>
        <button onClick={onDone}>Cancel</button>
      </div>
    </div>
  );
}
