'use client'

import TestimonialAuthorAvatar from '@/components/shared/TestimonialAuthorAvatar'
import TestimonialList from '@/data/testimonial'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

function ChevronRightIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const testimonialArrowBtnClass =
  'border-zinc-200 text-paragraph hover:bg-zinc-50 flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border bg-white shadow-sm transition outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-default'

function useViewportWidth() {
  return useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener('resize', onStoreChange)
      return () => window.removeEventListener('resize', onStoreChange)
    },
    () => window.innerWidth,
    () => 1024,
  )
}

function getContainerLeftInset(viewportWidth) {
  if (viewportWidth < 576) return 16
  if (viewportWidth < 768) return 24
  if (viewportWidth < 992) return 32
  if (viewportWidth < 1200) return Math.max((viewportWidth - 1060) / 2, 32)
  if (viewportWidth < 1400) return Math.max((viewportWidth - 1240) / 2, 32)
  return Math.max((viewportWidth - 1400) / 2, 32)
}

const Testimonial = ({ anchorId, dict }) => {
  const { tagline, title, prev, next, pagination, items } = dict.testimonial
  const TestimonialData = items ?? TestimonialList.TestimonialData
  const [swiper, setSwiper] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)
  const viewportWidth = useViewportWidth()
  const isWideViewport = viewportWidth >= 1100
  const step = isWideViewport ? 2 : 1
  const slidesOffsetBefore = getContainerLeftInset(viewportWidth)
  const isMobileSwiperLayout = viewportWidth < 768
  const isTouchSwipeViewport = viewportWidth < 1100
  const swiperSlidesOffsetBefore = isMobileSwiperLayout ? 0 : slidesOffsetBefore
  const swiperSlidesOffsetAfter = isMobileSwiperLayout ? 0 : 320
  const lastSlideIndex = Math.max(TestimonialData.length - 1, 0)

  const getTotalSlides = useCallback(() => TestimonialData.length, [TestimonialData.length])

  const syncNavState = useCallback((instance) => {
    setActiveSlide(instance.activeIndex)
    setIsAtStart(instance.isBeginning)
    setIsAtEnd(instance.isEnd)
  }, [])

  const goPrev = useCallback(() => {
    if (!swiper) return
    const nextIndex = Math.max(swiper.activeIndex - step, 0)
    swiper.slideTo(nextIndex)
  }, [swiper, step])

  const goNext = useCallback(() => {
    if (!swiper) return
    if (swiper.isEnd) return
    const nextIndex = swiper.activeIndex + step >= lastSlideIndex ? lastSlideIndex : swiper.activeIndex + step
    swiper.slideTo(nextIndex)
  }, [swiper, lastSlideIndex, step])

  useEffect(() => {
    if (!swiper) return
    swiper.update()
    syncNavState(swiper)
  }, [step, swiper, syncNavState, isMobileSwiperLayout, swiperSlidesOffsetBefore, swiperSlidesOffsetAfter])

  return (
    <section id={anchorId} className="relative my-32 min-w-0 scroll-mt-32 overflow-x-clip bg-[#fdf5f0]">
      <div className="relative container">
        <div className="mx-auto mb-8 pt-14 text-center md:mb-0">
          <p className="section-tagline text-accent">{tagline}</p>
          <h2>{title}</h2>
        </div>

        <div className="relative z-10 mb-8 hidden items-center justify-end gap-4 md:flex">
          <button
            type="button"
            className={`${testimonialArrowBtnClass} ${isAtStart ? 'pointer-events-none invisible' : ''}`}
            aria-label={prev}
            aria-hidden={isAtStart}
            tabIndex={isAtStart ? -1 : 0}
            disabled={isAtStart}
            onClick={goPrev}>
            <span className="inline-flex rotate-180">
              <ChevronRightIcon />
            </span>
          </button>
          <button
            type="button"
            className={`${testimonialArrowBtnClass} ${isAtEnd ? 'pointer-events-none invisible' : ''}`}
            aria-label={next}
            aria-hidden={isAtEnd}
            tabIndex={isAtEnd ? -1 : 0}
            disabled={isAtEnd}
            onClick={goNext}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <div className="relative w-full min-w-0 overflow-x-clip px-4 sm:px-6 md:px-0">
        <Swiper
          className="testimonials-swiper w-full max-w-full min-w-0"
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={isMobileSwiperLayout}
          loop={false}
          allowTouchMove={isTouchSwipeViewport}
          simulateTouch={isTouchSwipeViewport}
          slidesOffsetBefore={swiperSlidesOffsetBefore}
          slidesOffsetAfter={swiperSlidesOffsetAfter}
          breakpoints={{
            768: {
              slidesPerView: 'auto',
              spaceBetween: 20,
              slidesOffsetBefore,
              slidesOffsetAfter: 320,
              centeredSlides: false,
            },
          }}
          onSwiper={(instance) => {
            setSwiper(instance)
            syncNavState(instance)
          }}
          onSlideChange={syncNavState}>
          {TestimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto!">
              <article className="testimonial-slide-inner rounded-medium flex min-h-[305px] w-full flex-col border border-zinc-200 bg-white">
                <div className="flex min-h-0 min-w-0 flex-1 flex-col p-8 md:p-11">
                  <blockquote className="mb-0 min-h-0 min-w-0 flex-1 pb-10 text-left text-[15px] leading-[1.62] font-normal wrap-break-word text-[#202132] md:text-base">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </blockquote>

                  <div className="mt-auto flex shrink-0 items-center justify-between gap-6 max-xl:flex-col max-xl:items-start max-xl:gap-4">
                    <div className="flex min-w-0 flex-1 items-center gap-4">
                      <TestimonialAuthorAvatar image={testimonial.author.image} name={testimonial.author.name} />
                      <div className="min-w-0">
                        <p className="text-[17px] leading-snug font-normal text-[#202132]">{testimonial.author.name}</p>
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
                      <p className="text-paragraph-light max-w-[130px] shrink-0 text-right text-sm leading-snug font-normal max-xl:text-left">
                        {testimonial.author.designation}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container pb-14">
        <div className="mt-8 flex items-center justify-center gap-4 md:hidden">
          <button
            type="button"
            className={`${testimonialArrowBtnClass} ${isAtStart ? 'pointer-events-none invisible' : ''}`}
            aria-label={prev}
            aria-hidden={isAtStart}
            tabIndex={isAtStart ? -1 : 0}
            disabled={isAtStart}
            onClick={goPrev}>
            <span className="inline-flex rotate-180">
              <ChevronRightIcon />
            </span>
          </button>
          <div className="flex items-center gap-2" aria-label={pagination}>
            {Array.from({ length: TestimonialData.length }).map((_, index) => (
              <span
                key={index}
                aria-hidden
                className={`h-2 rounded-full transition-all ${
                  activeSlide === index ? 'bg-accent w-6' : 'w-2 bg-zinc-300'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            className={`${testimonialArrowBtnClass} ${isAtEnd ? 'pointer-events-none invisible' : ''}`}
            aria-label={next}
            aria-hidden={isAtEnd}
            tabIndex={isAtEnd ? -1 : 0}
            disabled={isAtEnd}
            onClick={goNext}>
            <ChevronRightIcon />
          </button>
          <span className="sr-only">
            {activeSlide + 1} / {getTotalSlides()}
          </span>
        </div>
      </div>
    </section>
  )
}

Testimonial.propTypes = {
  anchorId: PropTypes.string.isRequired,
  dict: PropTypes.object.isRequired,
}

export default Testimonial
