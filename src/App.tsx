// App.tsx
import AuthGate from "@/app/AuthGate";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <AuthGate>
      <HomePage />
    </AuthGate>
  );
}
