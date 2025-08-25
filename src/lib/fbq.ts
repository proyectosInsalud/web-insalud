// src/lib/fbq.ts

export type FbqEvents = "PageView" | "Lead" | "Purchase" | "Contact" | (string & {});

type Fbq = (command: "track", event: FbqEvents, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

export function fbqTrack(event: FbqEvents, params: Record<string, unknown> = {}): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, params);
  }
}
