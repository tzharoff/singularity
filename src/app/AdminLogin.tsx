import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AdminLogin({
  error,
  onError,
}: {
  error: string | null;
  onError: (msg: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      onError(err.message);
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Singularity Admin</h2>

      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={login}>Sign in</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
