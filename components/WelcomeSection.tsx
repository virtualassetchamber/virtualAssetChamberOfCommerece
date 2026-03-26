import React from 'react'

function WelcomeSection() {
    return (
        <section className='bg-white'>
            <div className="mx-auto max-w-7xl px-6 md:py-24 py-16 flex md:flex-row flex-col items-start justify-between">
                <p className='text-primary font-(family-name:--font-poppins) font-semibold md:text-[2.25rem] text-[2rem] md:mb-0 mb-10'>Welcome to the new<br />
                    Virtual Assets<br />
                    Chamber of Commerce.</p>
                <div className='font-(family-name:--font-inter)'>
                    <p className='text-text-secondary font-bold md:text-[1.125rem] md:mb-6 mb-3'>Building trust for the future of digital finance</p>

                    <p className='text-subtext md:text-[1.125rem] mb-8'>The future of virtual assets in Africa will be defined by those who can align<br /> innovation with credibility, policy with progress, and growth with responsible<br /> market structure.</p>
                    <p className='text-subtext md:text-[1.125rem] '>The Virtual Assets Chamber of Commerce exists to support that work through<br /> standards, education, compliance, and advisory services designed for a rapidly<br /> evolving sector.</p>
                </div>
            </div>
        </section>
    )
}

export default WelcomeSection