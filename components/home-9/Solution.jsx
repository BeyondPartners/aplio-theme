import React from 'react'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import Link from 'next/link'
import Image from 'next/image'
export const SolutionData = [
  {
    id: 1,
    title: 'Home Purchase Loans',
    iconLight: '/images/services/investment.svg',
    iconDark: '/images/services/investment-dark.svg',
    desc: 'Ideal for first-time buyers and repeat homeowners.',
  },
  {
    id: 2,
    title: ' Refinance Loans',
    iconLight: '/images/services/sales.svg',
    iconDark: '/images/services/sales-dark.svg',
    desc: 'Lower your monthly payments or shorten your term to save more over time.',
  },
  {
    id: 3,
    title: 'Reverse Mortgages',
    iconLight: 'images/services/loan.svg',
    iconDark: 'images/services/loan-dark.svg',
    desc: 'Tap into your home equity while staying right where you are.',
  },
]
const Solution = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[100px]" aria-label="Mortgage Solutions">
      <div className="container">
        <div className="space-y-10 md:space-y-[70px]">
          <FadeUpAnimation className="space-y-3 text-center">
            <h2 id="mortgage-solutions-heading">Tailored lending solutions, crafted just for you.</h2>
            <p className="mx-auto max-w-[472px] md:w-full">
              Our licensed experts help match you with the best mortgage for your financial situation.
            </p>
          </FadeUpAnimation>

          <div className="relative z-10 space-y-14">
            <div className="absolute top-1/2 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
              <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] bg-primary-200/20 rounded-full blur-[145px]"></div>
              <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] bg-primary-200/25 -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
              <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] bg-primary-200/20 -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
            </div>
            <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {SolutionData.map((items) => (
                <div className="dark:bg-dark-200 rounded-medium shadow-nav relative bg-white p-2.5" key={items.id}>
                  <div className="dark:border-borderColour-dark h-full rounded border border-dashed border-gray-100 p-10 max-lg:p-5">
                    <figure>
                      <Image
                        src={items.iconLight}
                        alt="image"
                        width={40}
                        height={40}
                        className="mb-6 inline-block dark:hidden"
                      />
                      <img
                        src={items.iconDark}
                        alt="image"
                        width={40}
                        height={40}
                        className="mb-6 hidden dark:inline-block"
                      />
                    </figure>

                    <div className="space-y-2 max-sm:mt-2">
                      <h3 id="home-purchase-heading" className="text-heading-6 md:text-heading-5">
                        {items.title}
                      </h3>
                      <p>{items.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <FadeUpAnimation className="text-center">
              <Link
                href="/career"
                className="btn-outline mx-auto w-[90%] md:w-auto"
                aria-label="Explore all mortgage loan types">
                Explore all loan types
              </Link>
            </FadeUpAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
