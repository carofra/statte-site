"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { labProgramDisplayCore } from "@/components/lab/LabProgramFrame";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

function web3FormsMessage(data) {
  if (!data || typeof data !== "object") return null;
  if (typeof data.message === "string" && data.message.trim()) return data.message.trim();
  if (data.body && typeof data.body.message === "string" && data.body.message.trim()) {
    return data.body.message.trim();
  }
  return null;
}

/**
 * @typedef {object} BookingModalProps
 * @property {string} labTitle
 * @property {string} dateDisplay
 * @property {string} timeRange
 * @property {boolean} isOpen
 * @property {() => void} onClose
 */

/**
 * Drawer destro (stile listing tipo desina.it).
 * @param {BookingModalProps} props
 */
export default function BookingModal({ labTitle, dateDisplay, timeRange, isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [successEmail, setSuccessEmail] = useState("");
  const [entered, setEntered] = useState(false);
  const titleId = useId();

  const reset = useCallback(() => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);
    setSubmitError(null);
    setSuccess(false);
    setSuccessEmail("");
    setEntered(false);
  }, []);

  const handleClose = useCallback(() => {
    reset();
    onClose();
  }, [onClose, reset]);

  useEffect(() => {
    if (!isOpen) return;
    setEntered(false);
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setEntered(true));
    });
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, handleClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    const accessKey =
      typeof process.env.NEXT_PUBLIC_WEB3FORMS_KEY === "string"
        ? process.env.NEXT_PUBLIC_WEB3FORMS_KEY.trim()
        : "";
    if (!accessKey) {
      setSubmitError("Chiave Web3Forms non configurata (NEXT_PUBLIC_WEB3FORMS_KEY in .env.local).");
      return;
    }

    setIsSubmitting(true);
    const emailTrimmed = email.trim();

    const messageBody = [
      "Nuova richiesta di prenotazione",
      "",
      `Laboratorio: ${labTitle}`,
      `Data: ${dateDisplay}`,
      `Orari: ${timeRange}`,
      "",
      message.trim() ? `Messaggio (opzionale):\n${message.trim()}` : "Messaggio (opzionale): —",
    ].join("\n");

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Prenotazione — ${labTitle} · ${dateDisplay} · ${timeRange}`,
          name: name.trim(),
          email: emailTrimmed,
          replyto: emailTrimmed,
          message: messageBody,
        }),
      });

      const rawText = await res.text();
      let data = {};
      try {
        data = rawText ? JSON.parse(rawText) : {};
      } catch {
        data = {};
      }

      const blockedByCf =
        !res.ok &&
        typeof rawText === "string" &&
        (rawText.includes("Just a moment") || rawText.includes("challenge"));

      if (blockedByCf) {
        throw new Error(
          "Servizio temporaneamente non raggiungibile. Riprova tra poco o aggiorna la pagina.",
        );
      }

      const failed = !res.ok || data.success === false;
      if (failed) {
        const errMsg =
          web3FormsMessage(data) ||
          (rawText && rawText.length < 280 ? rawText.trim() : null) ||
          `Invio non riuscito (HTTP ${res.status}).`;
        throw new Error(errMsg);
      }

      setSuccessEmail(emailTrimmed);
      setSuccess(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Invio non riuscito.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const fieldClass =
    "w-full border-0 border-b border-black bg-transparent py-3 text-lg font-normal text-black placeholder:text-gray-400 focus:border-black focus:outline-none focus-visible:outline-none disabled:opacity-45 md:py-3.5 md:text-xl";

  return (
    <div className="fixed inset-0 z-40">
      <button
        type="button"
        className="absolute inset-0 z-40 h-full w-full cursor-default border-0 bg-black/20 p-0 backdrop-blur-sm"
        aria-label="Chiudi pannello"
        onClick={handleClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={[
          "fixed top-0 right-0 z-50 flex h-full w-full flex-col overflow-hidden border-l border-black bg-white shadow-2xl transition-transform duration-300 ease-out md:w-[450px]",
          entered ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <header className="mb-10 flex shrink-0 items-center justify-between gap-4 border-b border-black/10 px-8 pt-8">
          <p className="min-w-0 flex-1 text-left text-[10px] font-normal uppercase leading-snug tracking-[0.28em] text-black md:text-[11px] md:tracking-[0.3em]">
            {labTitle}
          </p>
          <button
            type="button"
            onClick={handleClose}
            className="shrink-0 border-0 bg-transparent text-right text-[10px] font-normal uppercase tracking-[0.22em] text-black transition-opacity hover:opacity-60 md:text-[11px] md:tracking-[0.26em]"
          >
            ✕ CHIUDI
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-8 pb-10">
          {success ? (
            <div className="flex flex-col gap-10">
              <p
                id={titleId}
                className="text-balance text-lg font-normal leading-relaxed text-black md:text-xl md:leading-relaxed"
              >
                Richiesta ricevuta. Ti risponderemo su{" "}
                <span className="font-medium text-foreground">{successEmail}</span>.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="w-full rounded-none border-0 bg-[#1d1d1b] px-6 py-5 text-center text-sm font-normal uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90 md:py-6 md:text-base md:tracking-[0.22em]"
              >
                ← TORNA AL LABORATORIO
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              <h2
                id={titleId}
                className={`text-balance text-xl font-normal uppercase leading-tight tracking-[0.06em] text-black md:text-2xl ${labProgramDisplayCore}`}
              >
                PRENOTA IL TUO POSTO
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                {submitError ? (
                  <p className="text-sm font-normal text-red-700" role="alert">
                    {submitError}
                  </p>
                ) : null}

                <div className="flex flex-col gap-8">
                  <div>
                    <label htmlFor="booking-name" className="sr-only">
                      Nome e cognome
                    </label>
                    <input
                      id="booking-name"
                      name="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nome e cognome"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="booking-email"
                      name="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-message" className="sr-only">
                      Messaggio (opzionale)
                    </label>
                    <textarea
                      id="booking-message"
                      name="message"
                      rows={4}
                      disabled={isSubmitting}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Messaggio (opzionale)"
                      className={`${fieldClass} resize-none`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-none border-0 bg-[#1d1d1b] py-4 text-center text-xs font-normal uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 md:py-5 md:text-sm"
                >
                  {isSubmitting ? "INVIO IN CORSO…" : "INVIA"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
