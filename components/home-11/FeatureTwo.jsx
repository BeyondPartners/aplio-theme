import React from 'react'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import CounterAnimation from '@/utils/CounterAnimation'

const FeatureTwo = () => {
  return (
    <section className="py-[50px] lg:py-[100px]">
      <div className="container">
        <div className="relative z-10">
          <div className="absolute top-1/2 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] bg-primary-200/20 rounded-full blur-[145px]"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] bg-primary-200/25 -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] bg-primary-200/20 -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
          </div>
          <FadeUpAnimation className="mb-[70px] space-y-5 text-center">
            <p className="section-tagline">Real results</p>
            <div className="space-y-3">
              <h2 className="mx-auto max-w-[658px]">
                Increase occupancy rates & drive
                <br className="hidden lg:block" />
                higher revenue
              </h2>
              <p className="mx-auto max-w-[658px]">
                Aplio helps property managers and real estate professionals boost efficiency, improve customer
                satisfaction, and increase profitability.
              </p>
            </div>
          </FadeUpAnimation>
          <div>
            <FadeUpAnimation className="dark:bg-dark-200 rounded-medium shadow-nav bg-white p-2.5">
              <div className="dark:border-borderColour-dark flex flex-col items-center justify-between gap-8 rounded border border-dashed border-gray-100 py-6 md:flex-row md:gap-0">
                <div className="border-borderColour-dark/20 dark:border-borderColour/10 flex flex-1 flex-col items-center space-y-6 border-dashed py-6 md:border-r">
                  <figure className="bg-primary flex h-[52px] w-20 items-center justify-center rounded-full px-7 py-3.5">
                    <img src="images/avatar/check-circle.svg" alt="Project completed" className="size-6" />
                  </figure>
                  <h2 className="flex items-center gap-0.5 text-xl font-normal dark:text-white">
                    <CounterAnimation number={30} />% Faster tenant onboarding
                  </h2>
                </div>

                <div className="border-borderColour-dark/20 dark:border-borderColour/10 flex flex-1 flex-col items-center space-y-6 border-dashed py-6 md:border-r">
                  <figure className="bg-primary flex h-[52px] w-20 items-center justify-center rounded-full px-7 py-3.5">
                    <img src="images/avatar/users.svg" alt="Team members" className="size-6" />
                  </figure>
                  <h2 className="flex items-center gap-1 text-xl font-normal dark:text-white">
                    <CounterAnimation number={2} />x More lead conversion
                  </h2>
                </div>

                <div className="flex flex-1 flex-col items-center space-y-6 py-6">
                  <figure className="bg-primary flex h-[52px] w-20 items-center justify-center rounded-full px-7 py-3.5">
                    <img src="images/avatar/thumbs-up.svg" alt="Satisfied clients" className="size-6" />
                  </figure>
                  <h2 className="flex items-center gap-1 text-xl font-normal dark:text-white">
                    <CounterAnimation number={99} />% System Uptime
                  </h2>
                </div>
              </div>
            </FadeUpAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureTwo
