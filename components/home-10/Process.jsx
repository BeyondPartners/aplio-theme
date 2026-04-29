import React from 'react'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import Image from 'next/image'
import FadeUpOneByOneAnimation from '../animations/FadeUpOneByOneAnimation'
export const ProcessData = [
  {
    id: 1,
    title: 'Connect your platform',
    iconLight: '/images/home-7-img/sales.svg',
    iconDark: '/images/home-7-img/sales-dark.svg',
    desc: 'Easy integration with Shopify, WooCommerce, HubSpot, and more.',
  },
  {
    id: 2,
    title: 'Design & automate',
    iconLight: '/images/home-7-img/loan.svg',
    iconDark: '/images/home-7-img/loan-dark.svg',
    desc: 'Use our AI-powered email builder and pre-made automation templates.',
  },
  {
    id: 3,
    title: 'Optimize & scale',
    iconLight: '/images/home-7-img/fund.svg',
    iconDark: '/images/home-7-img/fund-dark.svg',
    desc: 'Monitor email performance with real-time analytics and predictive insights.',
  },
]
const Process = () => {
  return (
    <section className="pt-14 pb-14 max-md:overflow-x-hidden md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="container">
        <FadeUpAnimation className="mx-auto mb-[70px] space-y-5 text-center">
          <p className="section-tagline">Process</p>
          <h2 className="mx-auto max-w-[540px]">Follow the minimalistic steps of installation</h2>
        </FadeUpAnimation>
        <div className="relative z-10">
          <div className="absolute top-1/2 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] bg-primary-200/20 rounded-full blur-[145px]"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] bg-primary-200/25 -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] bg-primary-200/20 -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
          </div>
          <article className="flex flex-col items-center justify-center gap-4 max-lg:flex-wrap md:flex-row md:gap-8">
            {ProcessData.map((items, i) => (
              <FadeUpOneByOneAnimation
                i={i}
                className="dark:bg-dark-200 rounded-medium shadow-nav max-w-[408px] flex-1 bg-white p-2.5"
                key={items.id}>
                <div className="dark:border-borderColour-dark h-full rounded border border-dashed border-gray-100 p-10 max-lg:p-5">
                  <div className="mb-5 flex items-center justify-between sm:mb-8">
                    <span className="tagline-2 dark:text-white">Step {items.id}</span>
                    <figure>
                      <Image src={items.iconLight} alt="image" width={40} height={40} className="dark:hidden" />
                      <Image
                        src={items.iconDark}
                        alt="image"
                        width={40}
                        height={40}
                        className="hidden dark:inline-block"
                      />
                    </figure>
                  </div>
                  <h3 className="mb-2">{items.title}</h3>
                  <p>{items.desc}</p>
                </div>
              </FadeUpOneByOneAnimation>
            ))}
          </article>
        </div>
      </div>
    </section>
  )
}

export default Process
