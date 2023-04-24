"use client";
import { use } from "react";

import { useUserId } from "@/lib/UserIdContext";
import { fetchUser } from "@/lib/fetchUser";

export default function FirstName() {
  const id = useUserId();

  if (!id) {
    return null;
  }
  const data = use(fetchUser(id));

  return <div>First: {data.first}</div>;
}
