import TestimonialList from '@/data/testimonial'
import Image from 'next/image'
import React from 'react'
import TestmonialBg from '../icons/TestmonialBg'
import FadeUpOneByOneAnimation from '../animations/FadeUpOneByOneAnimation'

const TestimonialV2 = () => {
  const { TestimonialData } = TestimonialList
  return (
    <section className="relative overflow-hidden pt-25 pb-25">
      <div className="relative container">
        <div className="mx-auto mb-15 max-w-[550px] text-center">
          <p className="section-tagline">Testimonials</p>
          <h2>What our customer’s say about our company</h2>
        </div>
        <div className="relative z-10">
          <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
            <TestmonialBg />
          </div>
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {TestimonialData.map((testimonial, i) => (
              <FadeUpOneByOneAnimation
                i={i}
                className="rounded-medium shadow-nav dark:bg-dark-200 bg-white p-2.5"
                key={testimonial.id}>
                <div className="dark:border-borderColour-dark h-full rounded border border-dashed border-gray-100 p-8">
                  <div className="flex items-center pb-7">
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

                  <blockquote className="text-paragraph mb-7 leading-[1.75] italic dark:text-white">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </blockquote>
                  <div className="dark:border-borderColour-dark flex items-center justify-between border-t border-dashed border-gray-100 pt-7">
                    <div>
                      <Image
                        src={testimonial.logoLight}
                        alt="image"
                        className="inline-block dark:hidden"
                        width={110}
                        height={35}
                      />
                      <Image
                        src={testimonial.logoDark}
                        alt="image"
                        className="hidden dark:inline-block"
                        width={110}
                        height={35}
                      />
                    </div>
                    <p className="text-paragraph-light dark:text-paragraph-light text-sm">{testimonial.date}</p>
                  </div>
                </div>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialV2
