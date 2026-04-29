import Link from 'next/link'
import React from 'react'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import FadeUpOneByOneAnimation from '../animations/FadeUpOneByOneAnimation'
import Image from 'next/image'
export const ServicesData = [
  {
    id: 1,
    title: 'Effortless management',
    iconLight: '/images/services/investment.svg',
    iconDark: '/images/services/investment-dark.svg',
    desc: 'Automate workflows, lease tracking, and payments—all in one place.',
  },
  {
    id: 2,
    title: 'Lead generation',
    iconLight: '/images/services/sales.svg',
    iconDark: 'images/services/sales-dark.svg',
    desc: 'AI-powered tools to attract and convert high-quality tenants and buyers.',
  },
  {
    id: 3,
    title: 'Financial insights',
    iconLight: 'images/services/fund.svg',
    iconDark: 'images/services/fund-dark.svg',
    desc: 'Track revenue, expenses, and optimize ROI with real-time reporting.',
  },
]
const Services = () => {
  return (
    <section className="py-[50px] lg:py-[100px]">
      <div className="container">
        <FadeUpAnimation className="mb-[70px] space-y-5 text-center">
          <p className="section-tagline">Services</p>
          <div className="space-y-3">
            <h2>Core service features</h2>
            <p className="mx-auto max-w-[490px]">
              We&apos;re here to help you every step of the way. Whether your&apos;e looking for detailed documentation,
              community forums
            </p>
          </div>
        </FadeUpAnimation>
        <div className="relative z-10">
          <div className="absolute top-1/2 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] bg-primary-200/20 rounded-full blur-[145px]"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] bg-primary-200/25 -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] bg-primary-200/20 -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
          </div>
          <div className="grid grid-cols-12 gap-y-6 md:gap-8">
            {ServicesData.map((items, i) => (
              <FadeUpOneByOneAnimation i={i} className="col-span-12 md:col-span-6 lg:col-span-4" key={items.id}>
                <div className="dark:bg-dark-200 rounded-medium shadow-nav relative scale-100 bg-white p-2.5 text-center transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:scale-105">
                  <div className="dark:border-borderColour-dark space-y-4 rounded border border-dashed border-gray-100 p-10 max-lg:p-5 sm:space-y-6">
                    <div className="mx-auto w-fit">
                      <figure>
                        <Image
                          src={items.iconLight}
                          alt="image"
                          width={40}
                          height={40}
                          className="mb-6 inline-block dark:hidden"
                        />
                        <Image
                          src={items.iconDark}
                          alt="image"
                          width={40}
                          height={40}
                          className="mb-6 hidden dark:block"
                        />
                      </figure>
                    </div>
                    <div className="space-y-2">
                      <h3 className="xl:text-heading-5 text-heading-6">{items.title}</h3>
                      <p className="line-clamp-2">{items.desc}</p>
                    </div>
                    <div>
                      <Link href="/services" className="btn">
                        View service
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
