import { createContext, useContext, type ReactNode } from "react";

const UserIdContext = createContext<number | null>(null);

export const UserIdProvider = ({ userId, children }: { userId: number; children: ReactNode }) => (
  <UserIdContext.Provider value={userId}>{children}</UserIdContext.Provider>
);

export const useUserId = () => {
  const userId = useContext(UserIdContext);

  if (!userId) {
    throw new Error("You should have this component within UserIdProvider");
  }

  return userId;
};
