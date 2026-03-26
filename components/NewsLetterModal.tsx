"use client";

import { useState, useEffect, useRef } from "react";
import { useNewsletterModal } from "@/context/NewsletterModalContext";
import { submitEmail } from "@/lib/send-email";

export default function NewsletterModal() {
  const { isOpen, close } = useNewsletterModal();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setStatus("idle");
      setEmail("");
      setMessage("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, close]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const data = await submitEmail(email.trim(), "modal");
      setStatus("success");
      setMessage(data.message || "Welcome to V.A.C.C. — you're on the list!");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]"
        onClick={close}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-lg mx-4 bg-white shadow-2xl animate-[slideUp_300ms_ease-out]">
        <div className="h-1.5 w-full bg-brazil-yellow" />

        <button
          onClick={close}
          className="absolute top-4 right-4 p-2 text-subtext hover:text-primary transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4l12 12M16 4L4 16" />
          </svg>
        </button>

        <div className="p-8 pt-10">
          {status === "success" ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary font-(family-name:--font-poppins) mb-2">
                You&apos;re In
              </h3>
              <p className="text-subtext font-(family-name:--font-inter) mb-8">
                {message}
              </p>
              <button
                onClick={close}
                className="bg-primary text-white px-8 py-3 font-bold font-(family-name:--font-poppins) hover:scale-105 transition-transform cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <p className="text-xs tracking-[2.4px] uppercase font-semibold text-subtext font-(family-name:--font-inter) mb-3">
                Virtual Asset Chamber of Commerce
              </p>
              <h3 className="text-[1.75rem] font-bold text-primary font-(family-name:--font-poppins) leading-tight mb-3">
                Stay Ahead of the Curve
              </h3>
              <p className="text-subtext font-(family-name:--font-inter) text-base mb-8">
                Get regulatory insights, event invitations, and strategic
                perspectives on Africa&apos;s digital asset economy — delivered
                to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    ref={inputRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your professional email"
                    className="w-full border-2 border-primary/15 px-5 py-4 font-(family-name:--font-inter) text-primary outline-none focus:border-primary transition-colors placeholder:text-subtext/60"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm font-(family-name:--font-inter)">
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary text-white py-4 font-bold text-sm tracking-[2.4px] uppercase font-(family-name:--font-poppins) hover:scale-[1.02] transition-transform cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              <p className="text-xs text-subtext/60 font-(family-name:--font-inter) mt-4 text-center">
                No spam. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}