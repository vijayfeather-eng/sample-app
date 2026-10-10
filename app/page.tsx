"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "./components/Header";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <Header />

      <main style={{ padding: "50px", textAlign: "center" }}>
        <h1>Welcome to Nova</h1>
        <p>You are successfully logged in.</p>
      </main>
    </>
  );
}