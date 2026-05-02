import TestimonialList from '@/data/testimonial'
import Image from 'next/image'
import TestimonialAuthorAvatar from '@/components/shared/TestimonialAuthorAvatar'
import React from 'react'
import TestmonialBg from '../icons/TestmonialBg'
import FadeUpOneByOneAnimation from '../animations/FadeUpOneByOneAnimation'

const TestimonialV2 = () => {
  const { TestimonialData } = TestimonialList
  return (
    <section className="relative overflow-hidden pt-25 pb-25">
      <div className="relative container">
        <div className="mx-auto mb-15 max-w-[650px] text-center">
          <p className="text-accent leading-tight">Témoignages</p>
          <h2>Ce que nos clients disent de nous</h2>
        </div>
        <div className="relative z-10">
          <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
            <TestmonialBg />
          </div>
          <div className="grid grid-cols-3 items-stretch gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {TestimonialData.map((testimonial, i) => (
              <FadeUpOneByOneAnimation
                i={i}
                className="rounded-medium shadow-nav dark:bg-dark-200 flex h-full min-h-0 flex-col bg-white p-2.5"
                key={testimonial.id}>
                <div className="flex min-h-0 flex-1 flex-col rounded border border-dashed border-gray-100 p-8 dark:border-gray-600">
                  <div className="flex shrink-0 items-center pb-7">
                    {testimonial.logoLight ? (
                      <Image
                        src={testimonial.logoLight}
                        alt=""
                        className="mr-4 h-14 w-auto max-w-[132px] shrink-0 object-contain object-left"
                        width={140}
                        height={56}
                      />
                    ) : (
                      <TestimonialAuthorAvatar
                        image={testimonial.author.image}
                        name={testimonial.author.name}
                        className="mr-4 size-14 shrink-0 rounded-full object-cover"
                      />
                    )}
                    <div className="block">
                      <h3 className="text-base font-semibold">{testimonial.author.name}</h3>
                      <p className="font-jakarta text-paragraph-light text-sm font-medium dark:text-[#A1A49D]">
                        {testimonial.author.designation}
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-paragraph mb-0 min-h-0 flex-1 pb-7 leading-[1.75] italic dark:text-white">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </blockquote>
                  {testimonial.date ? (
                    <div className="mt-auto flex shrink-0 items-center justify-end border-t border-dashed border-gray-100 pt-7 dark:border-gray-600">
                      <p className="text-paragraph-light dark:text-paragraph-light text-sm">{testimonial.date}</p>
                    </div>
                  ) : null}
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
