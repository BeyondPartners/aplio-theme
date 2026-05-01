'use client'

import TestimonialList from '@/data/testimonial'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

function ChevronRightIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const Testimonial = () => {
  const { TestimonialData } = TestimonialList
  const [swiper, setSwiper] = useState(null)

  const goNext = useCallback(() => {
    swiper?.slideNext()
  }, [swiper])

  const enableLoop = TestimonialData.length > 2

  return (
    <section className="dark:bg-dark-300 relative bg-[#f7f2ef] pt-150 pb-150 max-md:py-20">
      <div className="absolute top-1/2 right-0 left-0 h-full w-full -translate-y-1/2 bg-[url('/images/service-bg.png')] bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="relative container">
        <div className="mx-auto mb-14 max-w-[550px] text-center max-md:mb-12">
          <p className="section-tagline text-accent">Témoignages</p>
          <h2>Ce que nos clients disent de nous</h2>
        </div>

        <div className="relative z-10">
          <div className="max-lg:item-center absolute top-[37%] left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-lg:flex-col max-md:hidden">
            <div className="bg-primary-200/20 h-[350px] w-[350px] rounded-full blur-[80px] lg:h-[442px] lg:w-[442px] lg:blur-[145px]"></div>
            <div className="bg-primary-200/25 h-[350px] w-[350px] rounded-full blur-[80px] lg:ml-[-170px] lg:h-[442px] lg:w-[442px] lg:blur-[145px]"></div>
            <div className="bg-primary-200/20 h-[350px] w-[350px] rounded-full blur-[80px] lg:ml-[-170px] lg:h-[442px] lg:w-[442px] lg:blur-[145px]"></div>
          </div>

          <div className="relative md:pr-14">
            <Swiper
              className="testimonials-swiper"
              spaceBetween={20}
              slidesPerView={1}
              loop={enableLoop}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 28,
                },
              }}
              onSwiper={setSwiper}>
              {TestimonialData.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="h-auto!">
                  <article className="testimonial-slide-inner dark:bg-dark-200 flex min-h-[305px] w-full flex-col rounded-[4px] bg-white shadow-[0_10px_40px_rgba(24,24,27,0.04)]">
                    <div className="flex min-h-0 flex-1 flex-col p-8 md:p-11">
                      <blockquote className="mb-0 min-h-0 flex-1 pb-10 text-left text-[15px] leading-[1.62] font-normal text-[#202132] md:text-base dark:text-white/90">
                        &ldquo;{testimonial.testimonial}&rdquo;
                      </blockquote>

                      <div className="mt-auto flex shrink-0 items-center justify-between gap-6">
                        <div className="flex min-w-0 flex-1 items-center gap-4">
                          <Image
                            src={testimonial.author.image}
                            alt=""
                            className="size-14 shrink-0 rounded-full object-cover"
                            width={56}
                            height={56}
                          />
                          <div className="min-w-0">
                            <p className="text-[17px] leading-snug font-normal text-[#202132] dark:text-white">
                              {testimonial.author.name}
                            </p>
                          </div>
                        </div>
                        {testimonial.logoLight ? (
                          <Image
                            src={testimonial.logoLight}
                            alt=""
                            className="h-11 w-auto max-w-[118px] shrink-0 object-contain object-right md:max-w-[132px]"
                            width={120}
                            height={44}
                          />
                        ) : (
                          <p className="text-paragraph-light max-w-[130px] shrink-0 text-right text-sm leading-snug font-normal dark:text-white/60">
                            {testimonial.author.designation}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              className="dark:border-borderColour-dark text-paragraph dark:bg-dark-200 dark:hover:bg-dark-300 absolute top-1/2 right-0 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:bg-gray-50 md:flex dark:text-white"
              aria-label="Témoignage suivant"
              onClick={goNext}>
              <ChevronRightIcon />
            </button>
          </div>

          <button
            type="button"
            className="dark:border-borderColour-dark text-paragraph dark:bg-dark-200 dark:hover:bg-dark-300 mx-auto mt-8 flex size-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:bg-gray-50 md:hidden dark:text-white"
            aria-label="Témoignage suivant"
            onClick={goNext}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
