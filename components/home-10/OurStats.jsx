import React from 'react'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import CounterAnimation from '@/utils/CounterAnimation'

const OurStats = () => {
  return (
    <section className="relative z-10 py-16 max-xl:px-5 md:pt-0 md:pb-[100px]">
      <FadeUpAnimation className="dark:bg-dark-200 rounded-medium shadow-nav container bg-white p-2.5">
        <div className="dark:border-borderColour-dark flex flex-col items-center justify-between gap-8 rounded border border-dashed border-gray-100 py-6 md:flex-row md:gap-0">
          <div className="border-borderColour-dark/20 dark:border-borderColour/10 flex flex-1 flex-col items-center space-y-6 border-dashed py-6 md:border-r">
            <figure className="bg-primary flex h-[52px] w-20 items-center justify-center rounded-full px-7 py-3.5">
              <img src="images/avatar/check-circle.svg" alt="Project completed" className="size-6" />
            </figure>
            <h2 className="flex items-center gap-0.5 text-xl dark:text-white">
              <CounterAnimation number={85} />% Project completed
            </h2>
          </div>

          <div className="border-borderColour-dark/20 dark:border-borderColour/10 flex flex-1 flex-col items-center space-y-6 border-dashed py-6 md:border-r">
            <figure className="bg-primary flex h-[52px] w-20 items-center justify-center rounded-full px-7 py-3.5">
              <img src="images/avatar/users.svg" alt="Team members" className="size-6" />
            </figure>
            <h2 className="flex items-center gap-1 text-xl dark:text-white">
              <CounterAnimation number={25} />
              Team members
            </h2>
          </div>

          <div className="flex flex-1 flex-col items-center space-y-6 py-6">
            <figure className="bg-primary flex h-[52px] w-20 items-center justify-center rounded-full px-7 py-3.5">
              <img src="images/avatar/thumbs-up.svg" alt="Satisfied clients" className="size-6" />
            </figure>
            <h2 className="flex items-center gap-1 text-xl dark:text-white">
              <CounterAnimation number={75} />
              Satisfied clients
            </h2>
          </div>
        </div>
      </FadeUpAnimation>
    </section>
  )
}

export default OurStats
