import { useEffect, useState } from "react";
import {
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import AdminLogin from "@/app/AdminLogin";

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setReady(true);
      } else {
        setReady(false);
      }
    });

    return unsub;
  }, []);

  if (!ready) {
    return <AdminLogin onError={setError} error={error} />;
  }

  return <>{children}</>;
}
