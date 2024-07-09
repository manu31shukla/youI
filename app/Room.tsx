"use client";	
import { ReactNode } from "react";
import {	
  LiveblocksProvider,	
  RoomProvider,	
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Room({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_3SKFr6kZIfLBWyMAuGwNWVA49lYu9r2ovM7HPT3OB-F1LdPbGIJg_m6km_uoi5tx"}>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>	
    </LiveblocksProvider>
  );	
}