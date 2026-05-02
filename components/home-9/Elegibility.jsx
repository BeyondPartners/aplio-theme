import React from 'react'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import VisionAnimation from '../home-1/VisionAnimation'
import Link from 'next/link'

const Elegibility = () => {
  return (
    <section className="py-16 md:py-[90px] lg:py-[100px]" aria-label="Eligibility Check">
      <div className="container">
        <div className="1xl:gap-x-24 max-xs:overflow-hidden grid grid-cols-2 items-end gap-10 max-md:grid-cols-1">
          <FadeUpAnimation className="space-y-3">
            <h2 className="w-full text-center md:max-w-[461px] md:text-start">Check your eligibility in seconds.</h2>
            <p className="mb-8 text-center md:text-start">
              Track key indicators, spot trends early, and turn data into action.
            </p>

            <ul className="mb-14 space-y-4" aria-label="Eligibility requirements">
              <li className="flex items-center gap-3.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" fill="" className="fill-primary"></rect>
                  <path
                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                    fill=""
                    className="fill-paragraph"></path>
                </svg>

                <span>Minimum credit score: 620</span>
              </li>

              <li className="flex items-center gap-3.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" fill="" className="fill-primary"></rect>
                  <path
                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                    fill=""
                    className="fill-paragraph"></path>
                </svg>

                <span>Proof of stable income or employment</span>
              </li>
              <li className="flex items-center gap-3.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" fill="" className="fill-primary"></rect>
                  <path
                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                    fill=""
                    className="fill-paragraph"></path>
                </svg>

                <span>Minimum 3% down payment</span>
              </li>
              <li className="flex items-center gap-3.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" fill="" className="fill-primary"></rect>
                  <path
                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                    fill=""
                    className="fill-paragraph"></path>
                </svg>

                <span>Property meets FHA/VA/conventional guidelines.</span>
              </li>
            </ul>

            <FadeUpAnimation className="text-center md:text-start">
              <Link
                href="/services"
                rel="noopener noreferrer"
                className="btn-outline w-[90%] md:w-auto"
                aria-label="Check eligibility now">
                Check eligibility now
              </Link>
            </FadeUpAnimation>
          </FadeUpAnimation>

          <VisionAnimation />
        </div>
      </div>
    </section>
  )
}

export default Elegibility
