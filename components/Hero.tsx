"use client"
import { useNewsletterModal } from "@/context/NewsletterModalContext";
import Image from "next/image";



export default function Hero() {
  const { open } = useNewsletterModal();
  return (
    <>
      <section className="flex flex-col items-center h-screen">
        <div className="mx-auto flex max-w-7xl items-end justify-between px-6 md:pt-16">
          <div>
            <p className="tracking-[2.8px] font-(family-name:--font-inter) text-primary text-sm font-semibold uppercase mb-6">VIRTUAL ASSET CHAMBER OF COMMERCE</p>

            <p className="text-[72px] text-primary font-(family-name:--font-poppins) font-semibold leading-19 mb-6">Shaping the Future<br />
              of Virtual Assets<br />
              in Africa</p>

            <p className="text-subtext font-(family-name:--font-inter) text-[20px] mb-10">A new chamber for standards, education, compliance, and<br />
              policy leadership across Africa&apos;s emerging digital asset<br />
              economy.</p>

            <div className="flex items-center gap-x-4 mb-[4.175rem]">
              <button type="button"  onClick={open} className="font-(family-name:--font-poppins) bg-primary px-8 py-4 text-[18px] font-bold text-white transition-transform hover:scale-105 cursor-pointer">
                Sign up for updates
              </button>

            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-lg h-lg overflow-hidden pl-7">
              <Image src="/img/hero.jpg" alt="mordern-architecture" width={512} height={512} className="w-full h-full object-cover" />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
