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
  const [activeSlide, setActiveSlide] = useState(0)

  const enableLoop = TestimonialData.length > 2

  const getTotalSlides = useCallback(() => {
    if (!swiper) return TestimonialData.length
    return enableLoop ? swiper.slides.length - swiper.loopedSlides * 2 : swiper.slides.length
  }, [swiper, TestimonialData.length, enableLoop])

  const goPrev = useCallback(() => {
    swiper?.slidePrev()
  }, [swiper])

  const goNext = useCallback(() => {
    swiper?.slideNext()
  }, [swiper])

  return (
    <section className="dark:bg-dark-300 relative bg-white pt-150 pb-150 max-xl:py-24">
      <div className="relative container">
        <div className="mx-auto mb-14 max-w-[550px] text-center max-md:mb-12">
          <p className="section-tagline text-accent">Témoignages</p>
          <h2>Ce que nos clients disent de nous</h2>
        </div>

        <div className="relative z-10">
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
              onSwiper={setSwiper}
              onSlideChange={(instance) => setActiveSlide(instance.realIndex)}>
              {TestimonialData.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="h-auto!">
                  <article className="testimonial-slide-inner rounded-medium border-borderColour shadow-box dark:border-borderColour-dark/50 dark:bg-dark-200 flex min-h-[305px] w-full flex-col border bg-white">
                    <div className="flex min-h-0 flex-1 flex-col p-8 md:p-11">
                      <blockquote className="mb-0 min-h-0 flex-1 pb-10 text-left text-[15px] leading-[1.62] font-normal text-[#202132] md:text-base dark:text-white/90">
                        &ldquo;{testimonial.testimonial}&rdquo;
                      </blockquote>

                      <div className="mt-auto flex shrink-0 items-center justify-between gap-6 max-xl:flex-col max-xl:items-start max-xl:gap-4">
                        <div className="flex min-w-0 flex-1 items-center gap-4">
                          <Image
                            src={testimonial.author.image}
                            alt=""
                            className="size-14 shrink-0 rounded-full object-cover"
                            width={56}
                            height={56}
                            loading="lazy"
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
                            className="h-11 w-auto max-w-[118px] shrink-0 object-contain object-right max-xl:object-left md:max-w-[132px]"
                            width={120}
                            height={44}
                            loading="lazy"
                          />
                        ) : (
                          <p className="text-paragraph-light max-w-[130px] shrink-0 text-right text-sm leading-snug font-normal max-xl:text-left dark:text-white/60">
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
              className="dark:border-borderColour-dark text-paragraph dark:bg-dark-200 dark:hover:bg-dark-300 absolute top-1/2 right-0 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:bg-gray-50 max-xl:hidden md:flex dark:text-white"
              aria-label="Témoignage suivant"
              onClick={goNext}>
              <ChevronRightIcon />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 md:max-xl:mt-10 xl:hidden">
            <button
              type="button"
              className="dark:border-borderColour-dark text-paragraph dark:bg-dark-200 dark:hover:bg-dark-300 flex size-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:bg-gray-50 dark:text-white"
              aria-label="Témoignage précédent"
              onClick={goPrev}>
              <span className="inline-flex rotate-180">
                <ChevronRightIcon />
              </span>
            </button>
            <div className="flex items-center gap-2" aria-label="Pagination des témoignages">
              {Array.from({ length: TestimonialData.length }).map((_, index) => (
                <button
                  type="button"
                  key={index}
                  aria-label={`Aller au témoignage ${index + 1}`}
                  onClick={() => swiper?.slideToLoop(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeSlide === index ? 'bg-accent w-6' : 'bg-borderColour dark:bg-borderColour-dark w-2'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              className="dark:border-borderColour-dark text-paragraph dark:bg-dark-200 dark:hover:bg-dark-300 flex size-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:bg-gray-50 dark:text-white"
              aria-label="Témoignage suivant"
              onClick={goNext}>
              <ChevronRightIcon />
            </button>
            <span className="sr-only">
              {activeSlide + 1} / {getTotalSlides()}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
