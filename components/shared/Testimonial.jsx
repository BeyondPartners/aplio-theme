import TestimonialList from '@/data/testimonial'
import Image from 'next/image'
import Link from 'next/link'
import FadeUpOneByOneAnimation from '../animations/FadeUpOneByOneAnimation'
import { RatingStars } from './Rating'

const Testimonial = () => {
  const { TestimonialData } = TestimonialList
  return (
    <section className="dark:bg-dark-300 relative bg-white pt-150 pb-150 max-md:py-20">
      <div className="absolute top-1/2 right-0 left-0 h-full w-full -translate-y-1/2 bg-[url('/images/service-bg.png')] bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="relative container">
        <div className="mx-auto mb-16 max-w-[550px] text-center">
          <p className="section-tagline">Testimonials</p>
          <h2> What our customer&rsquo;s say about our company </h2>
        </div>
        <div className="relative z-10">
          <div className="max-lg:item-center absolute top-[37%] left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-lg:flex-col max-md:hidden">
            <div className="bg-primary-200/20 h-[350px] w-[350px] rounded-full blur-[80px] lg:h-[442px] lg:w-[442px] lg:blur-[145px]"></div>
            <div className="bg-primary-200/25 h-[350px] w-[350px] rounded-full blur-[80px] lg:-ml-[170px] lg:h-[442px] lg:w-[442px] lg:blur-[145px]"></div>
            <div className="bg-primary-200/20 h-[350px] w-[350px] rounded-full blur-[80px] lg:-ml-[170px] lg:h-[442px] lg:w-[442px] lg:blur-[145px]"></div>
          </div>
          <div className="mb-12 flex flex-wrap justify-center gap-6 gap-y-8 max-md:flex-col">
            {TestimonialData.slice(0, 5).map((testimonial, i) => (
              <FadeUpOneByOneAnimation
                i={i}
                className="rounded-medium shadow-nav dark:bg-dark-200 bg-white p-2.5 md:w-[calc(50%_-_20px)] lg:w-[calc(33.33%_-_20px)]"
                key={testimonial.id}>
                <div className="dark:border-borderColour-dark h-full rounded border border-dashed border-gray-100 p-7">
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
                      ratingColor={'text-paragraph dark:text-white size-4'}
                      ratingEmptyColor={'text-[#A7A7B4] dark:text-[#646463] size-4'}
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
              </FadeUpOneByOneAnimation>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <Link href="/contact" className="btn-outline">
              Start Your jouney
            </Link>
          </div>
        </div>
        <div className="dark:to-dark-300 absolute bottom-15 left-0 z-10 h-[450px] w-full bg-gradient-to-b from-transparent to-white to-100%"></div>
      </div>
    </section>
  )
}

export default Testimonial
