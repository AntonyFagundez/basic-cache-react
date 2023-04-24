"use client";
import { useState } from "react";

import FirstName from "@/components/FirstName";
import LastName from "@/components/LastName";
import { UserIdProvider } from "@/lib/UserIdContext";

export default function Home() {
  const [userId, setUserId] = useState(1);

  return (
    <main>
      <UserIdProvider userId={userId}>
        <button onClick={() => setUserId(1)}>User Id 1 </button>
        <button onClick={() => setUserId(2)}>user Id 2</button>
        <FirstName />
        <LastName />
      </UserIdProvider>
    </main>
  );
}
