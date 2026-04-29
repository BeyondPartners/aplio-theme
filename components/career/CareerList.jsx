import getMarkDownData from '@/utils/getMarkDownData'
import Link from 'next/link'

const CareerList = () => {
  const careerData = getMarkDownData('content/career')
  return (
    <section className="relative pb-150 max-md:overflow-hidden">
      <div className="absolute top-0 right-0 left-0 h-full w-full bg-[url('/images/core-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="relative container">
        <div className="absolute top-1/2 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
          <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] rounded-full blur-[145px]"></div>
          <div className="bg-primary-200/25 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
          <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
        </div>
        <div className="mb-14 text-center">
          <p className="section-tagline">Open Positions</p>
          <h2>Become part of the dream team</h2>
        </div>
        <div className="[&>*:not(:last-child)]:mb-10">
          {careerData.map((carerItem) => (
            <div
              className="rounded-medium shadow-nav dark:bg-dark-200 mx-auto max-w-[1050px] bg-white p-2.5"
              key={carerItem.slug}>
              <div className="dark:border-borderColour-dark dark:bg-dark-200 rounded border border-dashed border-gray-100 bg-white px-5 py-6 xl:px-8">
                <div className="grid grid-cols-12 items-center max-md:gap-y-5">
                  <div className="col-span-full lg:col-span-4">
                    <h3 className="text-xl">{carerItem.data.title}</h3>
                  </div>
                  <div className="col-span-full sm:col-span-full md:col-span-5 lg:col-span-3">
                    {carerItem.data.shortDesc && <p className="text-light font-jakarta"> {carerItem.data.shortDesc}</p>}
                  </div>

                  <div className="col-span-full flex items-center gap-2 sm:col-span-9 md:col-span-4 lg:col-span-3">
                    {carerItem.data.location && (
                      <span className="rounded-medium border-paragraph bg-primary text-paragraph border px-4 py-1 text-sm font-medium">
                        {carerItem.data.location}
                      </span>
                    )}
                    {carerItem.data.jobType && (
                      <span className="rounded-medium border-paragraph bg-primary text-paragraph border px-4 py-1 text-sm font-medium">
                        {carerItem.data.jobType}
                      </span>
                    )}
                  </div>
                  <div className="col-span-full sm:col-span-3 lg:col-span-2">
                    <Link href={`/career/${carerItem.slug}`} className="btn-outline btn-sm">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareerList
