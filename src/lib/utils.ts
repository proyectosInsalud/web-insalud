import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function eventRegisterGtm(name:string, params?: Record<string, unknown>) {
  // Notificacion a google tag manager
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: name,
      ...params,
    });
  }
};