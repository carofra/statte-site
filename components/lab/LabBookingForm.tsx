"use client";

import { buildBookingMessageWithSession, buildBookingSubject } from "@/lib/booking";
import { FormEvent, useMemo, useState } from "react";

const labelClass =
  "text-[10px] font-medium uppercase tracking-[0.22em] text-black/65 md:text-[11px]";
const inputClass =
  "mt-2 w-full border border-black/70 bg-background px-3 py-2.5 text-sm text-black outline-none transition-colors placeholder:text-black/40 focus:border-black";
const submitClass =
  "mt-4 inline-flex w-full items-center justify-center border border-black bg-[#1d1d1b] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-60";

type Props = {
  labTitle: string;
  bookingType?: "laboratorio" | "masterclass";
  bookingSubject: string;
  defaultMessage: string;
  recipientEmail: string;
  sessions?: string[];
  sessionLabel?: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

export default function LabBookingForm({
  labTitle,
  bookingType = "laboratorio",
  bookingSubject,
  defaultMessage,
  recipientEmail,
  sessions,
  sessionLabel = "Data e orario",
}: Props) {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorDetail, setErrorDetail] = useState("");
  const availableSessions = useMemo(
    () => (sessions ?? []).map((line) => line.trim()).filter(Boolean),
    [sessions],
  );
  const singleSession = availableSessions.length === 1 ? availableSessions[0] : "";
  const [selectedSession, setSelectedSession] = useState(singleSession);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setErrorDetail("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim();
    if (!accessKey) {
      setState("error");
      setErrorDetail("Configurazione invio email mancante.");
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const session = String(data.get("session") ?? selectedSession).trim();

    if (availableSessions.length > 0 && !session) {
      setState("error");
      setErrorDetail("Seleziona data e orario della sessione.");
      return;
    }

    const subject = buildBookingSubject(labTitle, session, bookingType) || bookingSubject;
    const fullMessage = buildBookingMessageWithSession(message, session);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject,
          from_name: name,
          name,
          email,
          replyto: email,
          message: fullMessage,
          laboratorio: labTitle || "Stattð 2026",
          sessione: session,
          destinatario: recipientEmail,
          botcheck: "",
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        setState("error");
        setErrorDetail(result.message ?? "Invio non riuscito. Riprova tra poco.");
        return;
      }

      setState("success");
      form.reset();
      setSelectedSession(singleSession);
    } catch {
      setState("error");
      setErrorDetail("Errore di rete. Controlla la connessione e riprova.");
    }
  }

  if (state === "success") {
    return (
      <div
        className="mt-4 border border-black/20 bg-black/[0.015] p-4 md:p-5"
        role="status"
      >
        <p className="text-sm font-medium text-black">Prenotazione inviata</p>
        <p className="mt-2 text-sm leading-relaxed text-black/75">
          Grazie! Ti risponderemo all&apos;indirizzo che hai indicato.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 space-y-3 border border-black/20 bg-black/[0.015] p-4 md:p-5"
    >
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      {availableSessions.length > 1 ? (
        <label className="block">
          <span className={labelClass}>{sessionLabel}</span>
          <select
            className={inputClass}
            name="session"
            required
            disabled={state === "loading"}
            value={selectedSession}
            onChange={(event) => setSelectedSession(event.target.value)}
          >
            <option value="">Scegli un&apos;opzione</option>
            {availableSessions.map((session) => (
              <option key={session} value={session}>
                {session}
              </option>
            ))}
          </select>
        </label>
      ) : singleSession ? (
        <>
          <input type="hidden" name="session" value={singleSession} />
          <p className="text-sm leading-relaxed text-black/80">
            <span className={labelClass}>{sessionLabel}</span>
            <span className="mt-2 block">{singleSession}</span>
          </p>
        </>
      ) : null}

      <label className="block">
        <span className={labelClass}>Nome</span>
        <input
          className={inputClass}
          type="text"
          name="name"
          required
          disabled={state === "loading"}
          placeholder="Il tuo nome"
        />
      </label>

      <label className="block">
        <span className={labelClass}>Email</span>
        <input
          className={inputClass}
          type="email"
          name="email"
          required
          disabled={state === "loading"}
          placeholder="tuamail@example.com"
        />
      </label>

      <label className="block">
        <span className={labelClass}>Messaggio</span>
        <textarea
          className={`${inputClass} min-h-[110px] resize-y`}
          name="message"
          required
          disabled={state === "loading"}
          defaultValue={defaultMessage}
        />
      </label>

      {state === "error" ? (
        <p className="text-sm text-red-800" role="alert">
          {errorDetail}
        </p>
      ) : null}

      <button type="submit" className={submitClass} disabled={state === "loading"}>
        {state === "loading" ? "INVIO IN CORSO…" : "INVIA PRENOTAZIONE"}
      </button>
    </form>
  );
}
