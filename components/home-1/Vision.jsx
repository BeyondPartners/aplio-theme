import Link from 'next/link'

import { FaCheck } from 'react-icons/fa'
import VisionLine1 from '../icons/VisionLine1'
import VisionLine2 from '../icons/VisionLine2'
import VisionLine3 from '../icons/VisionLine3'
import VisionLine4 from '../icons/VisionLine4'
import VisionAnimation from './VisionAnimation'

const Vision = () => {
  return (
    <section className="bg-gray dark:bg-dark relative -mt-24 overflow-hidden pt-[300px] pb-150 max-md:-mt-60 max-md:pt-[320px] max-md:pb-20 dark:-mt-24 dark:max-md:-mt-60">
      <div className="absolute top-0 left-0 max-w-[1612px] max-md:hidden">
        <VisionLine1 />
      </div>
      <div className="absolute top-0 right-0 max-w-[1612px] max-md:hidden">
        <VisionLine2 />
      </div>
      <div className="absolute top-0 left-0 max-w-[1612px] md:hidden">
        <VisionLine3 />
      </div>
      <div className="absolute top-0 right-0 max-w-[1612px] md:hidden">
        <VisionLine4 />
      </div>
      <div className="relative z-10 container">
        <div className="1xl:gap-x-24 grid grid-cols-2 items-end gap-10 max-md:grid-cols-1">
          <div>
            <p className="section-tagline">Data Integrations</p>
            <h2 className="mb-8 max-lg:mb-4">A strong vision is crucial for the analysis of wealth.</h2>
            <p className="mb-11 max-lg:mb-5">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before & After
              magazine.
            </p>
            <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4">
              <li className="flex items-center gap-x-2">
                <span className="shadow-icon item-center dark:bg-dark-200 relative flex h-7 w-7 justify-center rounded-full bg-white">
                  <FaCheck className="text-paragraph dark:text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </span>
                <span className="font-jakarta font-medium dark:text-white">Guided Payment Procurement</span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="shadow-icon item-center dark:bg-dark-200 relative flex h-7 w-7 justify-center rounded-full bg-white">
                  <FaCheck className="text-paragraph dark:text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </span>
                <span className="font-jakarta font-medium dark:text-white">Guided Payment Procurement</span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="shadow-icon item-center dark:bg-dark-200 relative flex h-7 w-7 justify-center rounded-full bg-white">
                  <FaCheck className="text-paragraph dark:text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </span>

                <span className="font-jakarta font-medium dark:text-white">Guided Payment Procurement</span>
              </li>
            </ul>
            <Link href="/contact" className="btn">
              Start Your Journey
            </Link>
          </div>
          <VisionAnimation />
        </div>
      </div>
    </section>
  )
}

export default Vision
