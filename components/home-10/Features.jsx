import Image from 'next/image'
import React from 'react'
import FadeUpOneByOneAnimation from '../animations/FadeUpOneByOneAnimation'
import FadeUpAnimation from '../animations/FadeUpAnimation'
export const FeaturesData = [
  {
    id: 1,
    title: 'Drag & drop email builder',
    imageLight: '/images/home-6-img/chatbot-feature-2.png',
    imageDark: '/images/home-6-img/chatbot-feature-2-dark.png',
    desc: 'Design emails effortlessly, no coding needed.',
  },
  {
    id: 2,
    title: 'Transactional email API',
    imageLight: '/images/home-6-img/chatbot-feature-3.png',
    imageDark: '/images/home-6-img/chatbot-feature-3-dark.png',
    desc: 'Send real-time order confirmations, password resets',
  },
  {
    id: 3,
    title: 'SMTP relay & webhooks',
    imageLight: '/images/home-6-img/chatbot-feature-1.png',
    imageDark: '/images/home-6-img/chatbot-feature-1-dark.png',
    desc: 'Seamless, Exclusive email infrastructure for developers.',
  },
  {
    id: 4,
    title: 'Advanced A/B testing',
    imageLight: '/images/home-7-img/crypto-market-4.png',
    imageDark: '/images/home-7-img/crypto-market-4-dark.png',
    desc: 'Optimize subject lines, content, and send times.',
  },
  {
    id: 5,
    title: 'Deliverability management',
    imageLight: '/images/home-7-img/crypto-market-2.png',
    imageDark: '/images/home-7-img/crypto-market-2-dark.png',
    desc: 'Dedicated IPs, SPF, DKIM, and DMARC authentication.',
  },
]
const Features = () => {
  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[100px] xl:pb-[100px]">
      <div className="container">
        <FadeUpAnimation className="mb-12 text-center md:mb-[70px]">
          <p className="section-tagline">More features</p>
          <h2>Features that set Aplio apart</h2>
        </FadeUpAnimation>

        <div className="flex flex-wrap justify-center gap-6 gap-y-8 max-md:flex-col">
          {FeaturesData.map((items, i) => (
            <FadeUpOneByOneAnimation
              i={i}
              className="dark:bg-dark-200 rounded-medium shadow-nav col-span-12 w-full bg-white p-2.5 sm:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"
              key={items.id}>
              <div className="dark:border-borderColour-dark h-full rounded border border-dashed border-gray-100 p-5 max-lg:p-5">
                <figure className="mb-3">
                  <Image
                    src={items.imageLight}
                    alt="Transactional email API UI"
                    width={480}
                    height={222}
                    className="inline-block w-full rounded-lg max-lg:h-full dark:hidden"
                  />
                  <Image
                    src={items.imageDark}
                    alt="Transactional email API UI"
                    width={480}
                    height={222}
                    className="hidden w-full rounded-lg max-lg:h-full dark:inline-block"
                  />
                </figure>

                <h3 className="mb-1">{items.title}</h3>
                <p>{items.desc}</p>
              </div>
            </FadeUpOneByOneAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
