import React from 'react'
import HeroBg from './HeroBg'
import Link from 'next/link'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import Image from 'next/image'
import heroShapeWorld from '@/public/images/home-7-img/crypto-hero-world.svg'
import heroShapeWorldDark from '@/public/images/home-7-img/crypto-hero-world-dark.svg'
import heroGraph from '@/public/images/home-7-img/crypto-hero-graph.png'
import heroGraphDark from '@/public/images/home-7-img/crypto-hero-graph-dark.png'
import heroDevice from '@/public/images/home-7-img/crypto-hero-device.png'
import heroDeviceDark from '@/public/images/home-7-img/crypto-hero-device-dark.png'
import heroShapeCoin from '@/public/images/home-7-img/coin.png'

const Hero = () => {
  return (
    <section className="dark:bg-paragraph relative bg-white pt-[180px] pb-[100px] lg:pt-[210px] lg:pb-[100px]">
      <div className="relative z-10 container">
        <div className="space-y-5 text-center">
          <p className="section-tagline">Keep an eye on your finances</p>
          <div
            className="space-y-3"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-once="true">
            <h1 className="mx-auto max-w-[400px] leading-[1.3] sm:max-w-[600px] md:max-w-[900px] xl:max-w-[1110px]">
              <span className="hero-text-gradient hero-text-color-2 block">
                Elevate your property management game with Aplio!
              </span>
            </h1>
            <p className="mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-full">
              All-in-one cloud-based software to streamline operations, boost sales, and generate leads effortlessly.
            </p>
          </div>
        </div>
        <div className="relative z-12 flex justify-center py-[72px]">
          <Link href="/price" className="btn">
            Get a free demo
          </Link>
        </div>
        <div className="relative z-10 grid grid-cols-12 items-center gap-5 max-lg:gap-y-10">
          <FadeUpAnimation className="dark:after:from-dark-gradient/0 dark:after:via-dark-gradient/60 dark:after:to-dark-gradient/100 relative col-span-10 col-start-2 mx-auto h-full after:absolute after:top-0 after:left-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-b after:from-white/0 after:from-10% after:via-white/60 after:via-30% after:to-white/100 after:to-100%">
            <div className="relative z-10">
              <div className="absolute top-20 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
                <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] bg-primary-200/25 rounded-full blur-[145px] max-md:ml-0"></div>
              </div>
              <div className="absolute -top-150 left-1/2 -z-20 -translate-x-1/2">
                <Image src={heroShapeWorld} alt="crypto-hero-light" className="inline-block dark:hidden" />
                <Image src={heroShapeWorldDark} alt="crypto-hero-light" className="hidden dark:inline-block" />
              </div>
              <div className="w-10/12">
                <Image
                  src={heroGraph}
                  alt="crypto-hero-light"
                  className="rounded-medium inline-block w-full dark:hidden"
                />
                <Image
                  src={heroGraphDark}
                  alt="crypto-hero-light"
                  className="rounded-medium hidden w-full dark:inline-block"
                />
              </div>
              <div className="absolute -top-15 right-0 w-2/5">
                <Image src={heroShapeCoin} alt="" className="absolute top-16 -left-16" />
                <Image
                  src={heroDevice}
                  alt="crypto-hero-light"
                  className="rounded-medium inline-block w-full dark:hidden"
                />
                <Image
                  src={heroDeviceDark}
                  alt="crypto-hero-light"
                  className="rounded-medium hidden w-full dark:inline-block"
                />
              </div>
            </div>
          </FadeUpAnimation>
        </div>
      </div>
      <HeroBg />
    </section>
  )
}

export default Hero
