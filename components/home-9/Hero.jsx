import React from 'react'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import PaymentImageDark from '@/public/images/payment/payment-hero-dark.png'
import PaymentImageDeviceDark from '@/public/images/payment/payment-hero-device-dark.png'
import PaymentImageDevice from '@/public/images/payment/payment-hero-device.png'
import PaymentImage from '@/public/images/payment/payment-hero.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative mt-3 max-md:overflow-hidden" aria-label="Mortgage Solutions Hero" id="scene">
      <div className="mx-auto max-w-[1600px]">
        <div className="md:rounded-t-medium mb-16 bg-[url('/images/home-9/hero-bg.svg')] bg-cover bg-no-repeat md:mb-25 dark:bg-[url('/images/home-9/hero-bg-dark.svg')]">
          <div className="container">
            <FadeUpAnimation className="pt-[140px] pb-[50px] text-center max-lg:pb-20 sm:pt-[170px] md:pb-20 lg:pt-44 lg:pb-25">
              <h1 className="mx-auto mb-4 max-w-[976px] md:w-full">
                Smart, simple, and stress-free mortgage solutions.
              </h1>
              <p className="mx-auto mb-14 max-w-[719px] md:w-full">
                Take the hassle out of home financing. With Aplio, you get personalized mortgage plans, expert support
                every step of the way, and lightning-fast approval.
              </p>

              <div className="hero-form relative z-20 mx-auto flex w-[90%] items-center justify-center md:w-auto">
                <form>
                  <div className="dark:bg-dark-200 border-borderColour focus-within:border-primary dark:focus-within:border-primary grid w-full max-w-[520px] grid-cols-12 items-center rounded-[60px] border bg-white pe-1 pt-1 pb-1 pl-4 transition-all duration-300 sm:pl-5 dark:border-[#31332F]">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="xs:col-span-8 placeholder:text-light text-light col-span-8 bg-transparent leading-[1.75] text-[#A1A49D] outline-hidden focus:outline-hidden dark:placeholder:text-[#A1A49D]"
                    />
                    <button className="btn xs:col-span-4 col-span-4 max-lg:px-3! max-lg:text-sm!">Get Started</button>
                  </div>
                </form>
              </div>
            </FadeUpAnimation>

            <FadeUpAnimation className="relative mx-auto mt-25 max-w-[600px] md:z-10">
              <div className="absolute top-1/2 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden">
                <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] bg-primary-200/20 rounded-full blur-[145px] max-lg:hidden"></div>
                <div className="max-1xl:h-[335px] max-1xl:blur-[80px] 1xl:w-[442px] 1xl:h-[442px] bg-primary-200/25 -mt-150 -ml-[170px] rounded-full blur-[145px] max-lg:w-[335px] max-md:ml-0"></div>
                <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] bg-primary-200/20 -ml-[170px] rounded-full blur-[145px] max-lg:hidden"></div>
              </div>
              <div className="absolute -bottom-150 left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
              <div className="h-full w-full">
                <div className="relative">
                  <Image
                    src={PaymentImage}
                    alt="hero Image"
                    className="rounded-medium shadow-nav inline-block w-full dark:hidden"
                  />
                  <Image
                    src={PaymentImageDark}
                    alt="hero Image"
                    className="rounded-medium shadow-nav hidden w-full dark:inline-block"
                  />
                  <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 max-lg:w-4/5 max-md:w-[285px] lg:aspect-video lg:w-[285px]">
                    <Image
                      src={PaymentImageDevice}
                      alt="hero Image"
                      className="rounded-t-medium inline-block w-full dark:hidden"
                    />
                    <Image
                      src={PaymentImageDeviceDark}
                      alt="hero Image"
                      className="rounded-t-medium hidden w-full dark:inline-block"
                    />
                  </div>
                </div>
              </div>
            </FadeUpAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
