import Image from 'next/image'
import React from 'react'

function TrustSection() {
    return (
        <section>
            <div className="mx-auto max-w-7xl px-6 md:py-24 py-16 flex md:flex-row flex-col md:items-center justify-between">
                <Image src="/img/testimonial.jpg" alt='testimonial' width={576} height={324} className='md:mb-0 mb-16 md:w-xl md:h-81 w-[90dvh] h-auto' />
                <div>
                    <p className='text-primary font-(family-name:--font-poppins) font-semibold md:text-[3rem] text-[2.25rem] mb-6 leading-12'>Building trust for the<br />
                        future of digital finance</p>

                    <p className='text-subtext md:text-[1.25rem] mb-8 leading-[32.5px]'>
                        Trust is the bedrock of any financial system. At VACC, we<br />
                        foster this trust through radical transparency, rigorous peer-<br />
                        review of standards, and constant engagement with<br />
                        international governing bodies.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TrustSection