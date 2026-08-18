export type CookieConsentValue = "accepted" | "rejected";

const STORAGE_KEY = "insalud_cookie_consent";
export const COOKIE_CONSENT_EVENT = "insalud-cookie-consent-change";

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function setCookieConsent(value: CookieConsentValue) {
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(
    new CustomEvent<CookieConsentValue | null>(COOKIE_CONSENT_EVENT, {
      detail: value,
    })
  );
}

export function resetCookieConsent() {
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(
    new CustomEvent<CookieConsentValue | null>(COOKIE_CONSENT_EVENT, {
      detail: null,
    })
  );
}
