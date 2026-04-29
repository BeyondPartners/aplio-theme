import { cn } from '@/utils/cn'
import Image from 'next/image'

const PaymentFeatures = ({
  sectionTag,
  sectionTitle,
  features,
  className = 'bg-white dark:bg-dark-300 pb-150 pt-150',
}) => {
  return (
    <section className={cn(className)}>
      <div className="absolute top-25 right-0 left-0 h-full w-full bg-[url('/images/core-gradient.png')] bg-[length:600px_1000px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[575px] text-center">
          {sectionTag && <p className="section-tagline">{sectionTag}</p>}
          {sectionTitle && <h2>{sectionTitle}</h2>}
        </div>

        <div className="relative z-10">
          <div className="absolute top-1/2 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] rounded-full blur-[145px]"></div>
            <div className="bg-primary-200/25 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
            <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
          </div>
          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {features.map((items) => (
              <div className="rounded-medium shadow-box dark:bg-dark-200 bg-white p-2.5" key={items.id}>
                <div className="dark:border-borderColour-dark h-full rounded border border-dashed border-gray-100 p-10 text-center max-lg:p-5">
                  <Image
                    src={items.iconLight}
                    alt="payment logo"
                    className="mb-6 inline-block h-auto w-auto dark:hidden"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={items.iconDark}
                    alt="payment logo"
                    className="mb-6 hidden h-auto w-auto dark:inline-block"
                    width={40}
                    height={40}
                  />
                  <h3 className="mb-2.5">{items.title}</h3>
                  <p>{items.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentFeatures
