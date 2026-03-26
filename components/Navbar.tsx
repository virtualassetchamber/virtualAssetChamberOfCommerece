"use client"

import { useNewsletterModal } from "@/context/NewsletterModalContext";



export default function Navbar() {
  const { open } = useNewsletterModal();
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className={`text-2xl font-black tracking-tight font-(family-name:--font-poppins) text-primary`}>V. A .C .C.</span>
        </div>


        <div>
          <button type="button" onClick={open}
            className="font-(family-name:--font-poppins) bg-primary px-5 py-2 font-bold text-white transition-transform hover:scale-105 cursor-pointer">
            Join Chamber
          </button>
        </div>
      </div>
    </nav>
  );
}
