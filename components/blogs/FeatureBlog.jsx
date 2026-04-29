'use client'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

const FeatureBlog = ({ featureBlog }) => {
  const featuredBlogFiltered = featureBlog.filter((blog) => blog.data.featured === true)

  return (
    <div className="relative">
      <div className="absolute -top-150 left-1/2 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="relative container pb-150 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:content-[url('/images/blog/blog-seperator.svg')] max-lg:max-w-full max-md:pb-10 max-md:after:hidden dark:after:content-[url('/images/blog/blog-seperator-dark.svg')]">
        <div className="relative z-10">
          <div className="absolute top-1/2 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-lg:max-w-full max-md:hidden">
            <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] rounded-full blur-[145px]"></div>
            <div className="bg-primary-200/25 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
            <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="swiper !pb-20 md:!px-6">
            {featuredBlogFiltered.map((blogItem) => (
              <SwiperSlide key={blogItem.slug}>
                <article className="swiper-slide rounded-medium shadow-nav dark:bg-dark-200 bg-white p-2.5">
                  <div className="dark:border-borderColour-dark rounded border border-dashed border-gray-100 p-6 max-md:p-4">
                    <div className="grid grid-cols-2 items-center gap-12 max-md:grid-cols-1 max-md:gap-y-5">
                      <div className="relative h-full w-full xl:min-h-[330px]">
                        <Image
                          src={blogItem.data.thumbnail}
                          alt="blog image"
                          className="w-full rounded-lg max-md:h-[350px] max-md:object-cover max-md:object-center"
                          fill={true}
                        />
                      </div>

                      <div className="">
                        <Link href={`/tags/${blogItem.data.tags}`} className="badge">
                          {blogItem.data.tags}
                        </Link>

                        <Link href={`/blog/${blogItem.slug}`} className="block">
                          <h3 className="mb-3 leading-[1.33] font-semibold">{blogItem.data.title}</h3>
                        </Link>
                        <div className="mb-4 flex items-center gap-x-2">
                          <p>{blogItem.data.author}</p>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                              <circle cx="2.5" cy="3" r="2.5" fill="" className="fill-[#D8DBD0] dark:fill-[#3B3C39]" />
                            </svg>
                          </span>
                          <p>{blogItem.data.date}</p>
                        </div>
                        <ReactMarkdown className="mb-6">{blogItem.content.slice(0, 150)}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default FeatureBlog
