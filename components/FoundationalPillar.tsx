import React from 'react';
import Image from 'next/image';

const pillars = [
  {
    title: "Standards Council",
    description: "Defining cross-border technical and ethical benchmarks for digital asset providers.",
    icon: <Image src="/svg/standard-council.svg" alt='standards-council' height={24} width={24}/>,
  },
  {
    title: "Virtual Assets Institute",
    description: "Executive education and professional certification for the next generation of finance leaders.",
    icon: <Image src="/svg/virtual-assets-institute.svg" alt='virtual-assets-institute' width={24} height={24} />,
  },
  {
    title: "Compliance Accelerator",
    description: "Tools and frameworks to streamline regulatory adherence for emerging fintechs.",
    icon: <Image src="/svg/compliance-accelerator.svg" alt='compliance-accelerator' width={24} height={24} />,
  },
  {
    title: "Policy & Compliance Advisory",
    description: "Strategic guidance for governments and institutions on digital asset legislation.",
    icon: <Image src="/svg/policy.svg" alt='policy' width={24} height={24} />,
  },
];

function FoundationalPillar() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 md:py-24 py-16">
        <div className="mb-16">
          <p className="tracking-[2.4px] font-(family-name:--font-inter) text-primary text-xs font-semibold uppercase mb-4">
            V.A.C.C Framework
          </p>
          <h2 className="text-text-secondary font-(family-name:--font-poppins) md:text-[3rem] text-[2.5rem] font-semibold leading-tight">
            Foundational Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 border border-border/30 backdrop-blur-sm">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title} 
              className={`p-10 flex flex-col gap-8 transition-colors hover:bg-white group
                ${index !== pillars.length - 1 ? 'md:border-r border-b md:border-b-0 border-border/30' : ''}`}
            >
              <div className="w-12 h-12 bg-primary/30 flex items-center justify-center rounded-sm group-hover:bg-white transition-colors duration-300">
                <div className="group-hover:text-white transition-colors">
                  {pillar.icon}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-primary font-bold text-xl font-(family-name:--font-poppins)">
                  {pillar.title}
                </h3>
                <p className="text-subtext text-sm leading-relaxed font-(family-name:--font-inter)">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoundationalPillar;