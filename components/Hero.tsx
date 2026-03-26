"use client"
import { useNewsletterModal } from "@/context/NewsletterModalContext";
import Image from "next/image";



export default function Hero() {
  const { open } = useNewsletterModal();
  return (
    <>
      <section className="flex flex-col items-center md:h-screen md:pb-0 pb-6 h-fit">
        <div className="mx-auto flex md:flex-row flex-col max-w-7xl h-full items-center justify-between px-6 md:pt-16 pt-4">
          <div>
            <p className="tracking-[2.8px] font-(family-name:--font-inter) text-primary text-sm font-semibold uppercase mb-6">VIRTUAL ASSET CHAMBER OF COMMERCE</p>

            <p className="md:text-[72px] text-[2rem] text-primary font-(family-name:--font-poppins) font-semibold leading-19 mb-6">Shaping the Future<br />
              of Virtual Assets<br />
              in Africa</p>

            <p className="text-subtext font-(family-name:--font-inter) md:text-[20px] text-[15px] mb-10">A new chamber for standards, education, compliance, and<br />
              policy leadership across Africa&apos;s emerging digital asset<br />
              economy.</p>

            <div className="flex items-center gap-x-4 mb-[4.175rem]">
              <button type="button"  onClick={open} className="font-(family-name:--font-poppins) bg-primary md:px-8 md:py-4 px-4 py-2 md:text-[18px] font-bold text-white transition-transform hover:scale-105 cursor-pointer">
                Sign up for updates
              </button>

            </div>
          </div>

          <div className="flex justify-center">
            <div className="md:w-lg md:h-128 w-[20rem] h-80 overflow-hidden pl-7">
              <Image src="/img/hero.jpg" alt="mordern-architecture" width={512} height={512} className="w-full h-full object-cover" />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
