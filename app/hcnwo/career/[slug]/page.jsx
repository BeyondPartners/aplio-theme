import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import NewsLetter from '@/components/shared/NewsLetter'
import getMarkDownContent from '@/utils/getMarkDownContent'
import getMarkDownData from '@/utils/getMarkDownData'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export async function generateMetadata(props) {
  const params = await props.params
  const careerData = getMarkDownData('content/career')
  const careers = careerData.find((career) => career.slug === params.slug)
  return {
    title: careers?.data?.title,
  }
}

export async function generateStaticParams() {
  const careerData = getMarkDownData('content/career')
  return careerData.map((item) => ({
    slug: item.slug,
  }))
}

const CareerSinglePage = async (props) => {
  const dataFolder = 'content/career/'
  const slug = (await props.params).slug
  const careerDetails = getMarkDownContent(dataFolder, slug)
  const postParams = careerDetails.data

  return (
    <>
      <SecondaryNavbar />
      <main>
        <section className="hero relative overflow-hidden pt-[240px] pb-[60px] max-lg:pt-150">
          <div className="container">
            <div className="mx-auto max-w-[948px] text-center">
              <p className="mb-4 font-medium uppercase">CAREER SINGLE PAGE</p>
              <h1 className="mb-10 max-lg:mb-10">{postParams.title}</h1>
            </div>
          </div>
        </section>
        <section className="relative mb-150">
          <div className="absolute -top-[1000px] right-0 left-0 h-full w-full bg-[url('/images/core-gradient.png')] bg-[length:600px_1600px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="relative container">
            <div className="absolute top-20 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
              <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] rounded-full blur-[145px]"></div>
              <div className="bg-primary-200/25 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
              <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
            </div>
            <div className="grid grid-cols-12 max-lg:gap-y-25 lg:gap-16">
              <div className="singlePage col-span-full max-lg:order-2 lg:col-span-8">
                <ReactMarkdown>{careerDetails.content}</ReactMarkdown>
              </div>
              <div className="col-span-full self-start max-lg:order-1 lg:col-span-4">
                <div className="rounded-medium shadow-nav dark:bg-dark-200 bg-white p-2.5">
                  <div className="dark:border-borderColour-dark dark:bg-dark-200 rounded border border-dashed border-gray-100 bg-white px-8 py-10 max-md:p-5">
                    <h3 className="mb-1">Job Overview</h3>
                    <div className="[&>*:not(:last-child)]:border-borderColour dark:[&>*:not(:last-child)]:border-borderColour-dark [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed">
                      {postParams.publishDate && (
                        <div className="py-5">
                          <h4 className="mb-2 text-lg font-medium">Date Posted</h4>
                          <p>{postParams.publishDate}</p>
                        </div>
                      )}

                      {postParams.expirationDate && (
                        <div className="py-5">
                          <h4 className="mb-2 text-lg font-medium">Expiration Posted</h4>
                          <p>{postParams.expirationDate}</p>
                        </div>
                      )}
                      {postParams.address && (
                        <div className="py-5">
                          <h4 className="mb-2 text-lg font-medium">Location</h4>
                          <p>{postParams.address}</p>
                        </div>
                      )}

                      {postParams.salary && (
                        <div className="py-5">
                          <h4 className="mb-2 text-lg font-medium">Offered Salary</h4>
                          <p>{postParams.salary} / week</p>
                        </div>
                      )}
                      {postParams.experience && (
                        <div className="py-5">
                          <h4 className="mb-2 text-lg font-medium">Experience</h4>
                          <p>{postParams.experience} Years Experience</p>
                        </div>
                      )}
                      {postParams.qualification && (
                        <div className="py-5">
                          <h4 className="mb-2 text-lg font-medium">Qualification</h4>
                          <p>{postParams.qualification}</p>
                        </div>
                      )}
                      <div className="py-5">
                        <h4 className="mb-2 text-lg font-medium">Qualification</h4>
                        <p>Bachelor Degree, Art of Design</p>
                      </div>
                    </div>
                    <div className="mt-4 mb-12">
                      <h3 className="mb-8">Job Skills</h3>

                      <div className="flex w-full flex-wrap gap-3">
                        {postParams?.skills?.map((items, i) => (
                          <div key={i}>
                            <span className="border-borderColour text-paragraph-light dark:border-borderColour-dark inline-block w-full items-center justify-between rounded-[60px] border px-5 py-2 font-medium">
                              {items}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Link href="/" className="btn w-full text-center">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default CareerSinglePage
