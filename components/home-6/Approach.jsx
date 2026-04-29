'use client'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import ApproachImageDark from '@/public/images/home-6-img/chatbot-approach-dark.png'
import ApproachImage from '@/public/images/home-6-img/chatbot-approach.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { FaCheck } from 'react-icons/fa'

const Approach = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <section className="relative pt-150 pb-25 max-md:pb-20">
      <div className="relative z-10 container">
        <div className="1xl:gap-x-24 grid grid-cols-2 gap-10 max-md:grid-cols-1">
          <div className="relative">
            <p className="section-tagline">Customer service approach</p>

            <h2 className="mb-8">Data-driven insights for better decision-making.</h2>
            <p className="mb-11">
              Monitor chatbot performance with detailed analytics and reports. Provide live chat support to your
              customers.
            </p>
            <ul className="mb-14 max-w-[490px] [&>*:not(:last-child)]:mb-5">
              <li className="dark:border-borderColour-dark flex items-center gap-x-2 rounded border border-dashed border-gray-100 p-2.5">
                <span className="shadow-icon dark:bg-dark-200 relative h-10 w-10 gap-6 rounded-full bg-[#F3F8E8]">
                  <FaCheck className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </span>
                <span className="font-jakarta font-semibold"> Scalable Systems </span>
              </li>
              <li className="dark:border-borderColour-dark flex items-center gap-x-2 rounded border border-dashed border-gray-100 p-2.5">
                <span className="shadow-icon dark:bg-dark-200 relative h-10 w-10 gap-6 rounded-full bg-[#F3F8E8]">
                  <FaCheck className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </span>
                <span className="font-jakarta font-semibold"> Adaptable Technologies </span>
              </li>
              <li className="dark:border-borderColour-dark flex items-center gap-x-2 rounded border border-dashed border-gray-100 p-2.5">
                <span className="shadow-icon dark:bg-dark-200 relative h-10 w-10 gap-6 rounded-full bg-[#F3F8E8]">
                  <FaCheck className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </span>
                <span className="font-jakarta font-semibold"> Versatile Tools </span>
              </li>
            </ul>
            <Link href="/contact" className="btn">
              Get Started
            </Link>
          </div>

          <div className="relative flex aspect-square items-center justify-end max-md:justify-center">
            <motion.div ref={ref} initial="initial" animate={controlAnimation} variants={fadeUpAnimation}>
              <Image src={ApproachImage} alt="company image" className="dark:hidden" />
              <Image src={ApproachImageDark} alt="company image" className="hidden dark:inline-block" />
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -z-10 flex w-full -translate-x-1/2 -translate-y-1/2 max-md:flex-col">
              <div className="bg-primary-200/25 h-[442px] w-full rounded-full blur-[145px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach
