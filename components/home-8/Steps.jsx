import React from 'react'
import FadeUpOneByOneAnimation from '../animations/FadeUpOneByOneAnimation'
export const StepsData = [
  {
    id: 1,
    title: 'Sign up for a free account',
    details: 'Get started quickly by creating a free is of account with just your email address.',
  },
  {
    id: 2,
    title: 'Personalize and enhance',
    details: 'Discover our user-friendly customization tools. Designs, add your personal flair.',
  },
  {
    id: 3,
    title: 'Scale your business quickly',
    details: 'watching your vision come to life as a stunning digital masterpiece.',
  },
]
const Steps = () => {
  return (
    <section className="dark:bg-dark-300 relative bg-white pb-150 max-md:overflow-hidden max-md:pb-25">
      <div className="absolute top-25 right-0 left-0 h-full w-full bg-[url('/images/core-gradient.png')] bg-[length:600px_1000px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container">
        <div className="mx-auto mb-12 text-center">
          <p className="section-tagline">How it works</p>

          <h2 className="mb-8">Easy steps, endless possibilities</h2>
          <p>Armed with concepts, we carefully design and refine every detail to align with your vision and goals.</p>
        </div>

        <div className="relative z-10">
          <div className="absolute top-1/2 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] rounded-full blur-[145px]"></div>
            <div className="bg-primary-200/25 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
            <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
          </div>
          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {StepsData?.map((items, i) => (
              <FadeUpOneByOneAnimation
                i={i}
                key={items.id}
                className="rounded-medium shadow-box dark:bg-dark-200 bg-white p-2.5">
                <div className="dark:border-borderColour-dark h-full rounded border border-dashed border-gray-100 p-10 text-center max-lg:p-5">
                  <div className="bg-primary shadow-box dark:bg-primary/5 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
                    <div className="dark:border-borderColour-dark flex h-15 w-15 items-center justify-center rounded-full border border-dashed border-white">
                      <span className="font-jakarta text-[36px] leading-normal font-bold">{items.id}</span>
                    </div>
                  </div>
                  <h3 className="mb-2.5">{items.title}</h3>
                  <p>{items.details}</p>
                </div>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
