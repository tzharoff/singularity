// App.tsx
import AuthGate from "@/app/AuthGate";

export default function App() {
  return (
    <AuthGate>
      <h1>Singularity</h1>
    </AuthGate>
  );
}
