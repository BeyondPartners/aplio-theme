'use client'
import HeroLine1 from '../icons/HeroLine1'
import HeroLine2 from '../icons/HeroLine2'
import HeroLine3 from '../icons/HeroLine3'
import HeroLine4 from '../icons/HeroLine4'
import HeroContent from './HeroContent'

const Hero = () => {
  return (
    <section
      className="hero max-mb:pb-[70px] max-mb:pb-[70px] bg-gray dark:bg-dark relative overflow-hidden pt-[230px] pb-[140px] max-lg:pt-[160px] max-lg:pb-25"
      id="scene">
      <div className="absolute top-0 left-1/2 max-w-[1612px] -translate-x-1/2 max-lg:hidden">
        <HeroLine1 />
      </div>
      <div className="absolute bottom-0 left-0 w-full max-lg:hidden">
        <HeroLine2 />
      </div>
      <div className="absolute top-0 left-1/2 max-w-[1612px] -translate-x-1/2 lg:hidden">
        <HeroLine3 />
      </div>
      <div className="absolute bottom-0 left-0 w-full lg:hidden">
        <HeroLine4 />
      </div>
      <div className="container">
        <HeroContent />
      </div>
    </section>
  )
}

export default Hero
