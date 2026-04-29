'use client'
import {
  fadeFromLeftAnimation,
  fadeFromLeftAnimation2,
  fadeFromLeftAnimation3,
  fadeUpAnimation,
} from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import possibilitiesExpenseDark from '@/public/images/payment/expense-dark.png'
import possibilitiesExpenseLight from '@/public/images/payment/expense.png'
import possibilitiesBaseDark from '@/public/images/payment/explore-dark.png'
import possibilitiesBaseLight from '@/public/images/payment/explore.png'
import possibilitiesPaymentDark from '@/public/images/payment/payment-dark.png'
import possibilitiesPaymentLight from '@/public/images/payment/payment.png'
import possibilitiesSummeryDark from '@/public/images/payment/summery-dark.png'
import possibilitiesSummeryLight from '@/public/images/payment/summery.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { FaCheck } from 'react-icons/fa'
import FadeUpAnimation from '../animations/FadeUpAnimation'

const Feature = () => {
  const ref2 = useRef(null)
  const controlAnimation2 = useWhileInView(ref2)
  const ref3 = useRef(null)
  const controlAnimation3 = useWhileInView(ref3)
  const ref4 = useRef(null)
  const controlAnimation4 = useWhileInView(ref4)
  const ref5 = useRef(null)
  const controlAnimation5 = useWhileInView(ref5)
  return (
    <section className="relative overflow-x-hidden pt-[200px] pb-[100px]">
      <div className="container">
        <div className="1xl:gap-x-24 grid grid-cols-2 items-end gap-25 max-md:grid-cols-1">
          <FadeUpAnimation className="relative max-md:order-1 md:order-2">
            <p className="section-tagline">Reasons to select us</p>

            <h2 className="mb-8">Why thousands trust us to build their apps</h2>

            <ul className="mb-14 max-w-[490px] [&>*:not(:last-child)]:mb-5">
              <li className="dark:border-borderColour-dark flex items-center gap-x-5 rounded border border-dashed border-gray-100 p-2.5">
                <span className="dark:bg-dark-200 relative h-10 w-10 shrink-0 gap-6 rounded-full bg-[#F3F8E8] drop-shadow">
                  <FaCheck className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </span>
                <span className="font-jakarta font-semibold"> Ai-powered recommendations </span>
              </li>
              <li className="dark:border-borderColour-dark flex items-center gap-x-2 rounded border border-dashed border-gray-100 p-2.5">
                <span className="dark:bg-dark-200 relative h-10 w-10 shrink-0 gap-6 rounded-full bg-[#F3F8E8] drop-shadow">
                  <FaCheck className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </span>
                <span className="font-jakarta font-semibold"> Seamless tenant communication </span>
              </li>
              <li className="dark:border-borderColour-dark flex items-center gap-x-2 rounded border border-dashed border-gray-100 p-2.5">
                <span className="dark:bg-dark-200 relative h-10 w-10 shrink-0 gap-6 rounded-full bg-[#F3F8E8] drop-shadow">
                  <FaCheck className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </span>
                <span className="font-jakarta font-semibold"> Automated rent collection </span>
              </li>
              <li className="dark:border-borderColour-dark flex items-center gap-x-2 rounded border border-dashed border-gray-100 p-2.5">
                <span className="dark:bg-dark-200 relative h-10 w-10 shrink-0 gap-6 rounded-full bg-[#F3F8E8] drop-shadow">
                  <FaCheck className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </span>
                <span className="font-jakarta font-semibold"> Integrated hosting and application deployment </span>
              </li>
            </ul>
          </FadeUpAnimation>
          <div className="relative max-md:order-2 md:order-1">
            <motion.div
              className="w-full lg:h-[500px] lg:w-[420px]"
              ref={ref2}
              initial="initial"
              animate={controlAnimation2}
              variants={fadeUpAnimation}>
              <Image src={possibilitiesBaseLight} alt="explore" className="rounded-medium dark:hidden" />
              <Image src={possibilitiesBaseDark} alt="explore" className="rounded-medium hidden dark:inline-block" />
            </motion.div>
            <motion.div
              className="rounded-medium absolute max-lg:-top-20 max-lg:-right-12 max-lg:max-w-[275px] lg:-top-[170px] lg:right-0"
              ref={ref3}
              initial="initial"
              animate={controlAnimation3}
              variants={fadeFromLeftAnimation}>
              <Image src={possibilitiesSummeryLight} alt="summery" className="dark:hidden" />
              <Image src={possibilitiesSummeryDark} alt="summery" className="hidden dark:inline-block" />
            </motion.div>
            <motion.div
              className="rounded-medium max-xs:top-[75px] absolute max-lg:top-[80px] max-lg:-right-12 max-lg:max-w-[275px] lg:top-[280px] lg:right-0"
              ref={ref4}
              initial="initial"
              animate={controlAnimation4}
              variants={fadeFromLeftAnimation2}>
              <Image src={possibilitiesPaymentLight} alt="summery" className="dark:hidden" />
              <Image src={possibilitiesPaymentDark} alt="summery" className="hidden dark:inline-block" />
            </motion.div>
            <motion.div
              className="rounded-medium max-xs:top-[170px] absolute max-lg:top-[220px] max-lg:-right-12 max-lg:max-w-[275px] lg:top-[75px] lg:right-0"
              ref={ref5}
              initial="initial"
              animate={controlAnimation5}
              variants={fadeFromLeftAnimation3}>
              <Image src={possibilitiesExpenseLight} alt="summery" className="dark:hidden" />
              <Image src={possibilitiesExpenseDark} alt="summery" className="hidden dark:inline-block" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
