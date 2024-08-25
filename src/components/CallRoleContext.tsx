'use client'
import { createContext, useState } from "react";
import { CallRole, CallRoleContext } from "@/types/types";

export const RoleContext = createContext<CallRoleContext | null>(null);

export default function CallRoleContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [callRole, setCallRole] = useState<CallRole>(CallRole.USER);

  return (
    <RoleContext.Provider value={{ callRole, setCallRole}}>
      {children}
    </RoleContext.Provider>
  )
}