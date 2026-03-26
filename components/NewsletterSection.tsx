"use client"
import { submitEmail } from '@/lib/send-email';
import Image from 'next/image';
import React, { useState } from 'react';

const benefits = [
    "Regulatory & policy insights",
    "Education & training opportunities",
    "Ecosystem updates",
    "Invitations to forums & working groups",
    "Standards & certification news",
    "Chamber initiatives",
];

function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;
        setStatus("loading");
        try {
            const data = await submitEmail(email.trim(), "footer");
            setStatus("success");
            setMessage(data.message || "Welcome to V.A.C.C. — you're on the list!");
            setEmail("");
        } catch (err) {
            setStatus("error");
            setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        }
    };

    return (
        <section className="bg-white px-6 py-20">

            <div className="mx-auto max-w-7xl relative z-10 bg-[#3F0FA8] md:py-20 py-14 px-8 overflow-hidden">
                <div className="absolute md:top-[15%] top-0 right-0 w-[25.33rem] h-[25.33rem] bg-[#AA94FF]/20 skew-x-45 transform origin-top-right pointer-events-none" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-30">

                    <div className="space-y-8">
                        <h2 className="text-white font-(family-name:--font-poppins) md:text-[3rem] text-[2rem] font-semibold leading-12">
                            Subscribe for V.A.C.C.<br /> updates, event<br /> invitations, insights,<br /> & strategic<br /> perspectives.
                        </h2>
                        <p className="text-[#AA94FF]/80 font-(family-name:--font-inter) italic md:text-[1.25rem] max-w-md">
                            Gain exclusive access to the intelligence driving the African digital asset frontier.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 pt-4">
                        {benefits.map((benefit) => (
                            <div key={benefit} className="flex items-start gap-3 group">
                                <Image src="/svg/check.svg" alt='check' width={20} height={20} />
                                <span className="text-white font-(family-name:--font-inter) md:text-[1.5rem] font-medium leading-tight">
                                    {benefit}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 max-w-2xl mx-auto relative z-30">
                    {status === "success" ? (
                        <div className="flex items-center justify-center gap-3 py-4 bg-white/10 backdrop-blur-sm">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <p className="text-white font-(family-name:--font-poppins) md:text-lg font-semibold">
                                {message}
                            </p>
                        </div>
                    ) : (
                        <>
                            <form className="flex flex-col sm:flex-row gap-4 items-stretch" onSubmit={handleSubmit}>
                                <div className="grow">
                                    <input
                                        type="email"
                                        placeholder="Professional email address"
                                        value={email}
                                        className="w-full bg-white px-6 py-4 text-primary font-(family-name:--font-inter) outline-none border-2 border-transparent focus:border-[#AA94FF] transition-all placeholder:text-subtext"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={status === "loading"}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="bg-primary hover:bg-black text-white px-10 py-4 font-bold tracking-[2.4px] transition-all uppercase text-sm font-(family-name:--font-poppins) cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? "Subscribing..." : "Subscribe"}
                                </button>
                            </form>
                            {status === "error" && (
                                <p className="text-red-300 text-sm font-(family-name:--font-inter) mt-3 text-center">
                                    {message}
                                </p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default NewsletterSection;