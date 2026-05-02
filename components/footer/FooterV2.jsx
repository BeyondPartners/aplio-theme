import BeyondPartnersLogo from '@/components/shared/BeyondPartnersLogo'
import { FooterData } from '@/data/footer'
import footerSeperator from '@/public/images/footer-seperator.svg'
import footerSeperatorDark from '@/public/images/footer-seperator-dark.svg'
import Image from 'next/image'
import Link from 'next/link'
const FooterV2 = () => {
  return (
    <footer className="dark:bg-dark-300 relative overflow-hidden bg-white pt-150 max-md:pt-20">
      <div className="relative z-10 container">
        <div className="absolute top-1/2 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:flex-col">
          <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] rounded-full blur-[145px]"></div>
          <div className="bg-primary-200/25 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
          <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
        </div>
        <div className="mb-10 flex items-center justify-between max-md:flex-col max-md:gap-y-10">
          <div className="max-md:text-center">
            <Link
              href="/"
              aria-label="BeyondPartners — accueil"
              className="mb-10 inline-block focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#612D3A]/35 focus-visible:outline-none">
              <BeyondPartnersLogo className="text-lg leading-none sm:text-xl" />
            </Link>
            <p className="max-w-[350px] max-lg:mx-auto">{FooterData.footerText}</p>
          </div>
          <div>
            <ul className="social-link flex items-center gap-4 max-lg:justify-center">
              {FooterData.socialLinks.map((items) => (
                <li key={items.id}>
                  <Link href={items.link} className="transiton-all">
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="seperator mb-10">
          <Image
            src={footerSeperator}
            alt="footer-seperator"
            className="w-full object-cover max-md:h-[1px] dark:hidden"
          />
          <Image
            src={footerSeperatorDark}
            alt="footer-seperator"
            className="hidden w-full object-cover max-md:h-[1px] dark:block"
          />
        </div>
        <div className="mb-20 grid grid-cols-12 max-lg:gap-y-10 max-lg:text-center">
          <div className="col-span-12 max-lg:text-center md:col-span-6 lg:col-span-2">
            <h3 className="mb-8 text-lg font-medium">Explore</h3>
            <ul className="[&>*:not(:last-child)]:mb-3">
              {FooterData.expolre.map((items) => (
                <li key={items.id}>
                  <Link
                    href={items.link}
                    className="text-paragraph before:bg-paragraph relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 max-lg:text-center md:col-span-6 lg:col-span-2">
            <h3 className="mb-8 text-lg font-medium">Resources</h3>
            <ul className="[&>*:not(:last-child)]:mb-3">
              {FooterData.resources.map((items) => (
                <li key={items.id}>
                  <Link
                    href={items.link}
                    className="text-paragraph before:bg-paragraph relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 max-lg:text-center md:col-span-6 lg:col-span-2">
            <h3 className="mb-8 text-lg font-medium">Get In touch</h3>
            <p className="mb-3">Need Support?</p>
            <p className="mb-3">
              <Link
                href={`mailto:${FooterData.email}`}
                className="text-paragraph before:bg-paragraph relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                {FooterData.email}
              </Link>
            </p>

            <p className="mb-3">
              <Link
                href={`tel:${FooterData.phone.split(' ').join('')}`}
                className="text-paragraph before:bg-paragraph relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                {FooterData.phone}
              </Link>
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <div className="1xl:pl-150">
              <h3 className="mb-8 text-lg font-medium">Newsletter</h3>
              <form>
                <div className="grid grid-cols-12 items-center max-lg:gap-y-5 lg:gap-x-6">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="placeholder:text-light text-light focus:border-primary dark:bg-dark-200 dark:focus:border-primary h-full rounded-[60px] border border-gray-200 bg-transparent bg-white ps-5 leading-[1.5] text-[#A1A49D] transition-all duration-300 outline-none focus:outline-none max-lg:col-span-full max-lg:py-3.5 lg:col-span-8 dark:border-[#31332F] dark:placeholder:text-[#A1A49D]"
                  />
                  <button className="btn max-lg:col-span-full lg:col-span-4">Get Started</button>
                </div>
              </form>
              <ul className="mt-6 flex items-center max-lg:justify-between max-lg:gap-y-2.5 max-md:flex-col lg:gap-5">
                <li className="flex items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3">
                    <path
                      d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                      stroke=""
                      className="stroke-paragraph dark:stroke-primary"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>No Credit Card Required</p>
                </li>
                <li className="flex items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3">
                    <path
                      d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                      stroke=""
                      className="stroke-paragraph dark:stroke-primary"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Free For 30 Day Trial.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="seperator">
          <Image
            src={footerSeperator}
            alt="footer-seperator"
            className="w-full object-cover max-md:h-[1px] dark:hidden"
          />
          <Image
            src={footerSeperatorDark}
            alt="footer-seperator"
            className="hidden w-full object-cover max-md:h-[1px] dark:block"
          />
        </div>

        <div className="py-10 max-lg:text-center">
          <div className="flex max-lg:flex-col lg:items-center">
            <p className="max-lg:mb-10">{FooterData.copyright}d</p>
            <ul className="flex items-center gap-15 max-lg:justify-center lg:ml-auto">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-paragraph before:bg-paragraph relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterV2
