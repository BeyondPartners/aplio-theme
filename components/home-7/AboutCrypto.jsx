import Image from 'next/image'
import aboutImage from '@/public/images/home-7-img/aboutCrypto.png'
import aboutImageDark from '@/public/images/home-7-img/aboutCrypto-dark.png'
import aboutImageShape from '@/public/images/home-7-img/aboutCrypto-shape.png'
import aboutImageShapeDark from '@/public/images/home-7-img/aboutCrypto-shape-dark.png'
import TabContent from './TabContent'

const AboutCrypto = () => {
  return (
    <section className="dark:bg-dark-300 relative overflow-hidden bg-white pb-150 max-md:pb-20">
      <div className="relative z-10 container">
        <div className="1xl:gap-x-24 grid grid-cols-2 items-center gap-10 max-md:grid-cols-1">
          <div className="relative flex items-center justify-end max-md:justify-center">
            <Image
              src={aboutImage}
              alt="crypto image"
              className="max-w-[250px] lg:max-w-[320px] xl:max-w-[420px] dark:hidden"
            />
            <Image
              src={aboutImageDark}
              alt="crypto image"
              className="hidden max-w-[250px] lg:max-w-[320px] xl:max-w-[420px] dark:inline-block"
            />
            <div className="absolute top-auto right-auto bottom-8 left-0 max-w-[180px] md:max-w-[250px] xl:max-w-[344px]">
              <Image src={aboutImageShape} alt="crypto image" className="dark:hidden" />
              <Image src={aboutImageShapeDark} alt="crypto image" className="hidden dark:inline-block" />
            </div>
          </div>
          <div>
            <p className="section-tagline">ABOUT</p>
            <h2 className="mb-8 max-md:mb-4">Crypto is the premier crowdsale service!</h2>
            <TabContent />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCrypto
