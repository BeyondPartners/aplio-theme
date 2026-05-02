import { cn } from '@/utils/cn'
import SwiperSlider from './SwiperSlider'

const TestimonialSlider = ({ className = 'pt-0' }) => {
  return (
    <section className={cn('relative pb-150 max-md:overflow-hidden', className)}>
      <div className="relative container">
        <div className="mx-auto max-w-[550px] text-center">
          <p className="section-tagline">Testimonials</p>
          <h2>What our customer&rsquo;s say about our company</h2>
        </div>
        <div className="relative z-10">
          <div className="absolute top-[37%] left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] rounded-full blur-[145px]"></div>
            <div className="bg-primary-200/25 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
            <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
          </div>
          <div className="absolute -top-150 left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
          <SwiperSlider />
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider
