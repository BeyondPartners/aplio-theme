import solutionImageDark from '@/public/images/solution/solution-dark.png'
import solutionImage from '@/public/images/solution/solution.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa'

import FeatureThreeAnimation from './FeatureThreeAnimation'

const FeatureThree = () => {
  return (
    <section className="dark:bg-dark-300 relative overflow-hidden bg-white pt-[160px] pb-150 max-lg:pt-20 max-lg:pb-150 lg:pb-15">
      <div className="container">
        <div className="1xl:gap-x-24 grid grid-cols-2 items-center gap-10 max-md:grid-cols-1">
          <div className="max-md:order-2">
            <div className="relative pt-150 lg:px-150 lg:py-150">
              <div className="relative mx-auto aspect-video w-[250px] lg:w-[300px]">
                <Image src={solutionImage} alt="vision image" className="dark:hidden" />
                <Image src={solutionImageDark} alt="vision image" className="hidden dark:inline-block" />
                <FeatureThreeAnimation />
              </div>
            </div>
          </div>
          <div className="max-md:order-1 lg:-mt-15">
            <p className="section-tagline">Expand your reach</p>
            <h2 className="mb-8 max-lg:mb-4">Market your properties like a pro</h2>
            <p className="mb-11 max-lg:mb-6">
              Leverage Aplio&apos;s built-in marketing tools to advertise vacancies, nurture leads, and secure high
              quality tenants faster than ever.
            </p>
            <ul className="mb-14 flex max-lg:mb-6 max-md:flex-col max-md:gap-y-5 lg:items-center lg:[&>*:not(:last-child)]:mr-10">
              <li className="relative flex items-center gap-x-2">
                <FaCheck className="text-paragraph dark:text-primary" />
                <span className="font-jakarta font-medium dark:text-white">Top Rental platform</span>
              </li>
              <li className="relative flex items-center gap-x-2">
                <FaCheck className="text-paragraph dark:text-primary" />
                <span className="font-jakarta font-medium dark:text-white">AI Lead scoring</span>
              </li>
              <li className="relative flex items-center gap-x-2">
                <FaCheck className="text-paragraph dark:text-primary" />
                <span className="font-jakarta font-medium dark:text-white">Performance reports</span>
              </li>
            </ul>
            <Link href="/contact" className="btn-outline">
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureThree
