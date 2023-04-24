"use client";
import { use } from "react";

import { useUserId } from "@/lib/UserIdContext";
import { fetchUser } from "@/lib/fetchUser";

export default function LastName() {
  const id = useUserId();

  if (!id) {
    return null;
  }
  const data = use(fetchUser(id));

  return <div>Last: {data.last}</div>;
}
