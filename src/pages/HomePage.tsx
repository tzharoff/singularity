// src/pages/HomePage.tsx
import { useState } from "react";
import CardList from "@/pages/CardList";
import CreateCardPage from "@/pages/CreateCardPage";

export default function HomePage() {
  const [mode, setMode] = useState<"list" | "create">("list");

  return (
    <div style={{ padding: 24 }}>
      {mode === "list" && (
        <>
          <h1>Singularity</h1>
          <button onClick={() => setMode("create")}>
            Create Card
          </button>
          <CardList />
        </>
      )}

      {mode === "create" && (
        <CreateCardPage onDone={() => setMode("list")} />
      )}
    </div>
  );
}
