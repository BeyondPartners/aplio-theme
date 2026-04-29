import React from 'react'
import handMobile from '@/public/images/home-9/hold-mobile.png'

import FadeUpAnimation from '../animations/FadeUpAnimation'
import FadeUpOneByOneAnimation from '../animations/FadeUpOneByOneAnimation'
import Image from 'next/image'
export const WhyUsData = [
  {
    id: 1,
    title: 'Simple process',
    iconLight: 'images/payment/receipts.svg',
    iconDark: 'images/payment/receipts-dark.svg',
    desc: 'Apply in minutes from any device—no paperwork, no hassle.',
  },
  {
    id: 2,
    title: 'Personalized guidance',
    iconLight: 'images/payment/expens.svg',
    iconDark: 'images/payment/receipts-dark.svg',
    desc: 'Our specialists guide you every step of the way, tailored to your needs.',
  },
  {
    id: 3,
    title: 'Competitive interest rates',
    iconLight: 'images/payment/invoice.svg',
    iconDark: 'images/payment/invoice-dark.svg',
    desc: 'Get access to fair rates with zero hidden fees or surprises.',
  },
  {
    id: 4,
    title: 'Fast pre-approvals',
    iconLight: 'images/payment/insight.svg',
    iconDark: 'images/payment/insight-dark.svg',
    desc: 'Know where you stand quickly—get pre-approved in hours, not days.',
  },
  {
    id: 5,
    title: 'Simple process',
    iconLight: 'images/payment/inventory.svg',
    iconDark: 'images/payment/inventory-dark.svg',
    desc: 'Apply in minutes from any device—no paperwork, no hassle.',
  },
  {
    id: 6,
    title: 'Ongoing support',
    iconLight: 'images/payment/app.svg',
    iconDark: 'images/payment/app-dark.svg',
    desc: 'We stay with you post-closing to ensure a smooth transition.',
  },
]
const WhyUs = () => {
  return (
    <section className="py-20 md:py-[90px] lg:py-[100px]" aria-label="Why choose Aplio">
      <div className="container">
        <div className="dark:bg-dark-200 rounded-medium shadow-nav relative bg-white p-2.5">
          <div className="dark:border-borderColour-dark rounded border border-dashed border-gray-100 px-10 pt-10 pb-0 max-lg:px-5 max-lg:pt-5">
            <div className="space-y-[70px]">
              <FadeUpAnimation className="space-y-[20px] text-center md:text-left">
                <p className="section-tagline">Why choose Aplio?</p>
                <div className="space-y-3">
                  <h2>Stress-free mortgage solutions.</h2>
                  <p>Smart solutions and human support—everything you need for a stress-free mortgage experience.</p>
                </div>
              </FadeUpAnimation>

              <div className="mx-auto flex max-w-[1178px] flex-col items-center gap-10 lg:flex-row lg:gap-0">
                <div className="flex w-full flex-col gap-8 md:flex-row lg:flex-col">
                  {WhyUsData.slice(0, 3).map((items) => (
                    <FadeUpOneByOneAnimation className="w-full space-y-3 md:max-w-[300px]" key={items.id}>
                      <figure>
                        <Image
                          src={items.iconLight}
                          width={40}
                          height={40}
                          alt="image"
                          className="inline-block dark:hidden"
                        />
                        <Image
                          src={items.iconDark}
                          width={40}
                          height={40}
                          alt="image"
                          className="hidden dark:inline-block"
                        />
                      </figure>

                      <div>
                        <h3 id="passcode-policy-heading" className="text-tagline-1">
                          {items.title}
                        </h3>
                        <p className="text-tagline-2">{items.desc}</p>
                      </div>
                    </FadeUpOneByOneAnimation>
                  ))}
                </div>

                <FadeUpAnimation className="order-first w-full shrink-0 lg:order-0 lg:mt-[66px] lg:mr-6 lg:h-[640px] lg:w-[538.95px] xl:mt-0 xl:mr-0">
                  <Image
                    src={handMobile}
                    alt="Investment platform interface showing key features"
                    className="size-full object-cover"
                  />
                </FadeUpAnimation>

                <div className="flex w-full flex-col gap-8 md:flex-row lg:ml-4 lg:flex-col xl:ml-0">
                  {WhyUsData.slice(3, 6).map((items) => (
                    <FadeUpOneByOneAnimation className="w-full space-y-3 md:max-w-[300px]" key={items.id}>
                      <figure>
                        <Image
                          src={items.iconLight}
                          width={40}
                          height={40}
                          alt="image"
                          className="inline-block dark:hidden"
                        />
                        <Image
                          src={items.iconDark}
                          width={40}
                          height={40}
                          alt="image"
                          className="hidden dark:inline-block"
                        />
                      </figure>

                      <div>
                        <h3 id="passcode-policy-heading" className="text-tagline-1">
                          {items.title}
                        </h3>
                        <p className="text-tagline-2">{items.desc}</p>
                      </div>
                    </FadeUpOneByOneAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
