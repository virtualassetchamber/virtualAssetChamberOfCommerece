import React from 'react'

function WelcomeSection() {
    return (
        <section className='bg-white'>
            <div className="mx-auto max-w-7xl px-6 py-24 flex items-start justify-between">
                <p className='text-primary font-(family-name:--font-poppins) font-semibold text-[2.25rem]'>Welcome to the new<br />
                    Virtual Assets<br />
                    Chamber of Commerce.</p>
                <div className='font-(family-name:--font-inter)'>
                    <p className='text-text-secondary font-bold text-[1.125rem] mb-6'>Building trust for the future of digital finance</p>

                    <p className='text-subtext text-[1.125rem] mb-8'>The future of virtual assets in Africa will be defined by those who can align<br /> innovation with credibility, policy with progress, and growth with responsible<br /> market structure.</p>
                    <p className='text-subtext text-[1.125rem] '>The Virtual Assets Chamber of Commerce exists to support that work through<br /> standards, education, compliance, and advisory services designed for a rapidly<br /> evolving sector.</p>
                </div>
            </div>
        </section>
    )
}

export default WelcomeSection