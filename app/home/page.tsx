"use client";

import Header from "../components/Header";

export default function HomePage() {
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