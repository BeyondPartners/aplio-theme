'use client'
import ServiceList from '@/data/serviceData'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaAngleRight, FaTimes } from 'react-icons/fa'
import ReactPlayer from 'react-player'

const ServiceContent = ({ data }) => {
  const [modal, setModal] = useState(false)
  const openModal = (e) => {
    e.preventDefault()
    setModal(!modal)
  }
  const { ServiceData } = ServiceList
  return (
    <>
      {modal ? (
        <div className="modal-bg">
          <div className="modal-align">
            <div className="modal-content">
              <button className="modal-close" onClick={openModal}>
                <FaTimes />
              </button>
              <div className="modal-video-align">
                <ReactPlayer url={data.videoLink} className="modal-video-item" width="100%" height="100%" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <section className="relative pt-[200px] pb-150 max-md:overflow-hidden max-md:pt-25 max-md:pb-20">
        <div className="absolute -top-8 right-0 left-0 h-full w-full bg-[url('/images/service-bg.png')] bg-cover bg-center bg-no-repeat opacity-70 sm:hidden"></div>
        <div className="relative z-10 container">
          <div className="absolute top-52 left-1/2 -z-10 flex -translate-x-1/2 max-md:hidden max-md:flex-col">
            <div className="bg-primary-200/20 rounded-full blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
            <div className="bg-primary-200/25 rounded-full blur-[145px] lg:-ml-[170px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
            <div className="lg-ml-[170px] bg-primary-200/20 rounded-full blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
          </div>

          <div className="grid auto-rows-max grid-cols-12 gap-y-15 md:gap-8 lg:gap-16">
            <div className="rounded-medium shadow-nav dark:bg-dark-200 self-start bg-white p-2.5 max-md:static max-md:col-span-full max-md:hidden md:sticky md:top-20 md:col-span-6 lg:col-span-4">
              <div className="dark:border-borderColour-dark rounded border border-dashed border-gray-100 px-10 pt-9 pb-7">
                <h3 className="mb-3">Categories</h3>
                <ul className="dark:[&>*:not(:last-child)]:border-borderColour-dark [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-gray-100">
                  {ServiceData?.map((services) => (
                    <li className={`group ${services.slug === data.slug ? 'tabActive' : ''}`} key={services.id}>
                      <Link
                        className="before:bg-paragraph relative flex items-center justify-between py-5 font-medium before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:before:bg-white"
                        href={`/services/${services.slug}`}>
                        {services.title}
                        <FaAngleRight className="hidden group-[.tabActive]:block" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative max-md:col-span-full md:col-span-6 lg:col-span-8">
              <div className="singlePage relative max-md:mt-20">
                <h2>{data.title}</h2>
                <p>{data.serviceDetails}</p>
                <div className="rounded-medium shadow-nav dark:bg-dark-200 bg-white p-2.5">
                  <Image
                    src={data.featureImage}
                    alt="service images"
                    className="w-full rounded"
                    width={788}
                    height={450}
                  />
                </div>

                <h3>What to Expect</h3>
                <p>{data.serviceExpectation}</p>
                <ul>
                  {data.serviceExpectationList?.map((items) => (
                    <li key={items}> {items.item} </li>
                  ))}
                </ul>

                <div className="rounded-medium shadow-nav dark:bg-dark-200 relative bg-white p-2.5">
                  <Image
                    src="/images/services/video-bg.png"
                    alt="service images"
                    className="aspect-video w-full rounded"
                    width={810}
                    height={405}
                  />
                  <Link
                    href=""
                    onClick={openModal}
                    className="absolute top-1/2 left-1/2 aspect-square w-[90px] -translate-x-1/2 -translate-y-1/2 max-md:w-15">
                    <Image src="/images/services/play.svg" alt="play" className="rounded-full" fill={true} />
                  </Link>
                </div>

                <h3>Qualifications & Requirements</h3>
                <p>{data.serviceQualifications}</p>
                <ul>
                  {data.serviceQualificationsList?.map((items) => (
                    <li key={items}> {items.item} </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceContent
