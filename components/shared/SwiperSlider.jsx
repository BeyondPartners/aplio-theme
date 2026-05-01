'use client'
import TestimonialList from '@/data/testimonial'
import Image from 'next/image'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const SwiperSlider = () => {
  const { TestimonialData } = TestimonialList
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      spaceBetween={45}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 45,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 45,
        },
      }}
      className="swiper !py-16 md:!px-6">
      {TestimonialData.slice(0, 5).map((testimonial) => (
        <SwiperSlide
          key={testimonial.id}
          className="swiper-slide rounded-medium shadow-nav dark:bg-dark-200 flex h-auto flex-col bg-white p-2.5">
          <div className="dark:border-borderColour-dark flex min-h-0 flex-1 flex-col rounded border border-dashed border-gray-100 p-7">
            <blockquote className="text-paragraph min-h-0 flex-1 pb-7 leading-[1.75] italic dark:text-white">
              &ldquo;{testimonial.testimonial}&rdquo;
            </blockquote>

            <div className="dark:border-borderColour-dark mt-auto flex shrink-0 items-center border-t border-dashed border-gray-100 pt-7">
              {testimonial.logoLight ? (
                <Image
                  src={testimonial.logoLight}
                  alt=""
                  className="mr-4 h-14 w-auto max-w-[132px] shrink-0 object-contain object-left"
                  width={140}
                  height={56}
                />
              ) : (
                <Image src={testimonial.author.image} alt="" className="mr-4 rounded-full" width={56} height={56} />
              )}
              <div className="block">
                <h3 className="text-base font-semibold">{testimonial.author.name}</h3>
                <p className="font-jakarta text-paragraph-light text-sm font-medium dark:text-[#A1A49D]">
                  {testimonial.author.designation}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperSlider
