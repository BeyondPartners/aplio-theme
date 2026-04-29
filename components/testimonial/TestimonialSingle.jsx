'use client'
import { fadeUpAnimation } from '@/data/animation'
import TestimonialList from '@/data/testimonial'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { RatingStars } from '../shared/Rating'

const TestimonialSingle = () => {
  const { TestimonialData } = TestimonialList
  return (
    <section className="relative pb-25">
      <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="relative container">
        <div className="relative z-10">
          <div className="absolute top-0 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] rounded-full blur-[145px]"></div>
            <div className="bg-primary-200/25 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
            <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
          </div>
          <div className="grid grid-cols-3 gap-11 max-lg:grid-cols-2 max-md:grid-cols-1">
            {TestimonialData.map((testimonial) => (
              <motion.div
                className="rounded-medium shadow-nav dark:bg-dark-200 bg-white p-2.5"
                key={testimonial.id}
                initial="initial"
                animate="animate"
                variants={fadeUpAnimation}>
                <div className="dark:border-borderColour-dark rounded border border-dashed border-gray-100 p-7">
                  <Image
                    src={testimonial.logoLight}
                    alt="service logo"
                    className="mb-6 inline-block dark:hidden"
                    width={120}
                    height={35}
                  />
                  <Image
                    src={testimonial.logoDark}
                    alt="service logo"
                    className="mb-6 hidden dark:inline-block"
                    width={110}
                    height={35}
                  />
                  <blockquote className="text-paragraph mb-5 leading-[1.75] italic dark:text-white">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </blockquote>
                  <div className="mb-7">
                    <RatingStars
                      rating={testimonial.rating}
                      ratingColor={'text-paragraph dark:text-white'}
                      ratingEmptyColor={'text-[#A7A7B4] dark:text-[#646463]'}
                    />
                  </div>

                  <div className="dark:border-borderColour-dark flex items-center border-t border-dashed border-gray-100 pt-7">
                    <Image
                      src={testimonial.author.image}
                      alt="avatar"
                      className="mr-4 rounded-full"
                      width={56}
                      height={56}
                    />
                    <div className="block">
                      <h3 className="text-base font-semibold">{testimonial.author.name}</h3>
                      <p className="font-jakarta text-paragraph-light text-sm font-medium dark:text-[#A1A49D]">
                        {testimonial.author.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSingle
