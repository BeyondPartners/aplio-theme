'use client'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import analyticsDark2 from '@/public/images/integration/analytics-hero-dark-2.png'
import analyticsDark3 from '@/public/images/integration/analytics-hero-dark-3.png'
import analyticsDark from '@/public/images/integration/analytics-hero-dark.png'
import analyticsLight2 from '@/public/images/integration/analytics-hero-light-2.png'
import analyticsLight3 from '@/public/images/integration/analytics-hero-light-3.png'
import analyticsLight from '@/public/images/integration/analytics-hero-light.png'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import { useRef } from 'react'
const Hero = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  const ref2 = useRef(null)
  const controlAnimation2 = useWhileInView(ref2)
  const ref3 = useRef(null)
  const controlAnimation3 = useWhileInView(ref3)
  return (
    <>
      <section
        className="hero-section relative overflow-hidden pt-[150px] pb-[100px] lg:pt-[220px]"
        aria-label="Hero section">
        <div className="absolute top-[10%] left-1/2 z-[-1] h-full w-full -translate-x-1/2 lg:top-[13%] 2xl:-top-5">
          <img
            src="images/home-10/hero-bg-pattern.svg"
            alt="Hero background pattern"
            className="block w-full dark:hidden"
          />
          <img
            src="images/home-10/hero-bg-pattern-dark.svg"
            alt="Hero background pattern"
            className="hidden w-full dark:block"
          />
        </div>
        <div className="relative z-10 container">
          <FadeUpAnimation className="mb-12 flex flex-col items-center justify-center md:mb-[72px]">
            <p className="section-tagline">Keep an eye on your finances</p>
            <div className="mx-auto mt-5 mb-10 w-full max-w-6xl space-y-4 text-center md:mb-14">
              <h1>Transform your email marketing with AI-powered precision</h1>
              <p className="mx-auto max-w-[652px]">
                Supercharge your email marketing and transactional emails with AI-driven automation, unmatched
                deliverability, and real-time analytics.
              </p>
            </div>
            <ul className="hero-buttons flex flex-col gap-4 max-md:w-full md:flex-row">
              <li className="max-md: mx-auto max-md:w-[90%] md:w-auto">
                <Link href="/" className="btn w-full md:w-auto" aria-label="Get started for free">
                  Get started for free
                </Link>
              </li>
              <li className="max-md:mx-auto max-md:w-[90%] md:w-auto">
                <Link href="/" className="btn-outline w-full md:w-auto" aria-label="Explore features">
                  Explore features
                </Link>
              </li>
            </ul>
          </FadeUpAnimation>
        </div>
      </section>
      <section className="dark:bg-dark-300 container mx-auto my-10 flex items-center justify-center gap-5 lg:my-0">
        <motion.div initial="initial" ref={ref} animate={controlAnimation} variants={fadeUpAnimation}>
          <Image
            src={analyticsLight}
            alt="Analytics-hero-light"
            className="rounded-medium shadow-nav inline-block h-auto w-auto dark:hidden"
          />
          <Image
            src={analyticsDark}
            alt="Analytics-hero-light"
            className="rounded-medium hidden h-auto w-auto dark:inline-block"
          />
        </motion.div>

        <div className="flex flex-col gap-y-5">
          <motion.figure initial="initial" ref={ref2} animate={controlAnimation2} variants={fadeUpAnimation}>
            <Image
              src={analyticsLight2}
              alt="Analytics-hero-light2"
              className="rounded-medium shadow-nav inline-block h-auto w-auto dark:hidden"
            />
            <Image
              src={analyticsDark2}
              alt="Analytics-hero-dark2"
              className="rounded-medium hidden h-auto w-auto dark:inline-block"
            />
          </motion.figure>
          <motion.figure initial="initial" ref={ref3} animate={controlAnimation3} variants={fadeUpAnimation}>
            <Image
              src={analyticsLight3}
              alt="Analytics-hero-light3"
              className="rounded-medium shadow-nav inline-block h-auto w-auto dark:hidden"
            />
            <Image
              src={analyticsDark3}
              alt="Analytics-hero-dark3"
              className="rounded-medium hidden h-auto w-auto dark:inline-block"
            />
          </motion.figure>
        </div>
      </section>
    </>
  )
}

export default Hero
