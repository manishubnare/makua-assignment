"use client";

import Button from "@/components/Button";
import PostModal from "@/view/PostModal";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => setShowModal(true)} type="button" secondary={true}>Open Modal</Button>
      <PostModal showModal={showModal} setShowModal={setShowModal} />
    </main>
  );
}