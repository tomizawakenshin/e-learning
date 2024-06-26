'use client';

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import SignInPanels from "./components/signInPage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/waiting");
    }
  }, [user, router]);

  return (
    <div>
      {user ? (
        <div></div>
      ) : (
        <SignInPanels />
      )}
    </div>
  );
}