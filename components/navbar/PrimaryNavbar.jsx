'use client'
import NavbarItem from '@/data/navbar'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaAngleDown, FaTimes } from 'react-icons/fa'

const PrimaryNavbar = () => {
  const { menuData } = NavbarItem
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [sticky, setSticky] = useState(false)

  const handleStickyNavbar = () => {
    if (window.scrollY >= 20) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar)

    return () => {
      window.removeEventListener('scroll', handleStickyNavbar)
    }
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed left-0 z-50 w-full bg-transparent pt-8 transition-all duration-500 max-md:z-[500]',
          sticky ? 'nav-sticky' : '',
        )}>
        <nav className="relative container flex items-center">
          <div className="nav-logo xl:min-w-[266px]">
            <Link href="/">
              <Image src={menuData.logoLight} alt="logo" className="dark:hidden" width={70} height={29} />
              <Image
                src={menuData.logoDark}
                alt="logo dark version"
                className="hidden dark:inline-block"
                width={70}
                height={29}
              />
            </Link>
          </div>

          <ul className="nav-list rounded-large shadow-nav dark:bg-dark-200 mx-auto hidden bg-white p-2.5 lg:flex [&>*:not(:last-child)]:me-1">
            {menuData.menuContent.map((menuItem) => (
              <li className={cn(menuItem.megaMenu ? 'group' : menuItem.path ? '' : 'group relative')} key={menuItem.id}>
                {menuItem.path ? (
                  <Link
                    href={menuItem.path}
                    className={cn(
                      'rounded-large font-Inter text-paragraph hover:border-borderColour dark:hover:border-borderColour/10 dark:hover:bg-dark-200 flex items-center border border-transparent px-5 py-[5px] text-base leading-8 font-medium capitalize transition-colors duration-500 hover:bg-white hover:duration-500 lg:px-4 xl:px-5 dark:text-white',
                    )}>
                    {menuItem.title}
                  </Link>
                ) : menuItem.megaMenu ? (
                  <>
                    <Link
                      href="#"
                      className={cn(
                        'hover:border-borderColour dark:hover:border-borderColour/10 group rounded-large font-Inter text-paragraph dark:hover:bg-dark-200 flex items-center border border-transparent px-5 py-[5px] text-base leading-8 font-medium transition-colors duration-500 hover:bg-white hover:duration-500 lg:px-4 xl:px-5 dark:text-white',
                        menuItem.title === 'page' ? 'active' : '',
                      )}>
                      {menuItem.title}
                      <FaAngleDown className="text-paragraph mt-1 ml-1 duration-500 group-hover:rotate-180 dark:text-white" />
                    </Link>
                    <div className="rounded-medium dark:bg-dark-200 absolute top-12 left-0 z-10 grid w-full origin-top scale-y-0 items-center gap-15 bg-white p-2.5 text-gray-900 opacity-0 shadow-lg duration-500 group-hover:scale-y-100 group-hover:opacity-100 md:grid-cols-12 dark:text-white">
                      <ul className="col-span-8 columns-3 gap-10 px-15">
                        {menuItem.submenu.map((submenuItem) => (
                          <li
                            className="text-paragraph before:bg-paragraph relative overflow-hidden py-2.5 text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:before:bg-white"
                            key={submenuItem.id}>
                            <Link href={submenuItem.path} className="flex">
                              {submenuItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="relative col-span-4 h-full">
                        <Image
                          src={menuItem.imageLight}
                          width={350}
                          height={350}
                          alt="navbar"
                          className="!w-full rounded-2xl dark:hidden"
                        />
                        <Image
                          src={menuItem.imageDark}
                          width={350}
                          height={350}
                          alt="navbar"
                          className="hidden !w-full rounded-2xl dark:block"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      href="#"
                      className={cn(
                        'rounded-large font-Inter text-paragraph hover:border-borderColour dark:hover:border-borderColour/10 dark:hover:bg-dark-200 flex items-center border border-transparent px-5 py-[5px] text-base leading-8 font-medium capitalize transition-colors duration-500 hover:bg-white hover:duration-500 lg:px-4 xl:px-5 dark:text-white',
                        menuItem.title === 'home' ? 'active' : '',
                      )}>
                      {menuItem.title}
                      <FaAngleDown className="text-paragraph mt-1 ml-1 duration-500 group-hover:rotate-180 dark:text-white" />
                    </Link>
                    <ul className="dark:bg-dark-200 [&>*:not(:last-child)]:border-borderColour dark:[&>*:not(:last-child)]:border-borderColour-dark absolute top-12 left-0 z-10 min-w-[250px] origin-top scale-y-0 rounded-md bg-white p-5 opacity-0 duration-500 group-hover:scale-y-100 group-hover:opacity-100 [&>*:not(:first-child)]:mt-2.5 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed">
                      {menuItem.submenu.map((submenuItem) => (
                        <li
                          className="text-paragraph before:bg-paragraph relative overflow-hidden pb-2.5 text-base capitalize duration-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:before:bg-white"
                          key={submenuItem.id}>
                          <Link href={submenuItem.path} className="flex">
                            {submenuItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>

          <ul className="ml-auto flex items-center [&>*:not(:last-child)]:me-2.5">
            <li className="flex items-center max-lg:hidden">
              <Link href="/request-demo" className="btn btn-navbar btn-sm">
                Request Demo
              </Link>
            </li>
            <li className="max-lg:inline-block lg:hidden">
              <button
                className="mobile-menu-button dark:bg-dark-200 relative flex size-10 items-center justify-center rounded-full bg-white outline-none"
                onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" className="size-5">
                  <path
                    d="M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1C22 1.55228 21.5523 2 21 2H1C0.447716 2 0 1.55228 0 1Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                  <path
                    d="M8 7C8 6.44772 8.44772 6 9 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H9C8.44772 8 8 7.55228 8 7Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                  <path
                    d="M4 13C4 12.4477 4.44772 12 5 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H5C4.44772 14 4 13.5523 4 13Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                </svg>
              </button>
            </li>
          </ul>

          <div className={cn('mobile-menu max-lg:overflow-y-auto', showMobileMenu ? 'open' : 'close')}>
            <button
              className="navbar-toggle-close dark:bg-dark-200 absolute top-5 right-6 flex size-10 items-center justify-center rounded-full bg-white outline-none"
              onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <FaTimes />
            </button>
            <ul className="nav-list mt-28 flex w-full max-w-full flex-col gap-5 landscape:h-full">
              {menuData.menuContent.map((menuItem) => (
                <li className={cn(menuItem.path ? 'relative' : 'group relative')} key={menuItem.id}>
                  {menuItem.path ? (
                    <Link
                      href={menuItem.path}
                      className={cn(
                        'rounded-large font-Inter text-paragraph hover:border-borderColour dark:hover:border-borderColour/10 dark:hover:bg-dark-200 flex items-center border border-transparent px-5 py-[5px] text-base leading-8 font-medium transition-colors duration-500 hover:bg-white hover:duration-500 lg:px-4 xl:px-5 dark:text-white',
                      )}
                      onClick={() => setShowMobileMenu(!showMobileMenu)}>
                      {menuItem.title}
                    </Link>
                  ) : menuItem.megaMenu ? (
                    <>
                      <Link
                        href="#"
                        className="hover:border-borderColour dark:hover:border-borderColour/10 group rounded-large font-Inter text-paragraph dark:hover:bg-dark-200 flex items-center border border-transparent px-5 py-[5px] text-base leading-8 font-medium transition-colors duration-500 hover:bg-white hover:duration-500 lg:px-4 xl:px-5 dark:text-white">
                        {menuItem.title}
                        <FaAngleDown className="text-paragraph mt-1 ml-auto duration-500 group-hover:rotate-180 dark:text-white" />
                      </Link>
                      <div className="rounded-medium dark:bg-dark-200 absolute top-12 left-0 z-10 w-full origin-top scale-y-0 items-center bg-white p-6 text-gray-900 opacity-0 shadow-lg duration-500 group-hover:scale-y-100 group-hover:opacity-100 dark:text-white">
                        <ul className="mb-15 columns-2 gap-10">
                          {menuItem.submenu.map((submenuItem) => (
                            <li
                              className="text-paragraph before:bg-paragraph relative overflow-hidden py-2.5 text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:before:bg-white"
                              key={submenuItem.id}>
                              <Link
                                href={submenuItem.path}
                                className="flex"
                                onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                {submenuItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="relative max-w-full">
                          <Image
                            src={menuItem.imageLight}
                            width={350}
                            height={350}
                            alt="navbar"
                            className="!w-full rounded-2xl dark:hidden"
                          />
                          <Image
                            src={menuItem.imageDark}
                            width={350}
                            height={350}
                            alt="navbar"
                            className="hidden !w-full rounded-2xl dark:block"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        href="#"
                        className="rounded-large font-Inter text-paragraph hover:border-borderColour dark:hover:border-borderColour/10 dark:hover:bg-dark-200 flex items-center border border-transparent px-5 py-[5px] text-base leading-8 font-medium transition-colors duration-500 hover:bg-white hover:duration-500 lg:px-4 xl:px-5 dark:text-white">
                        {menuItem.title}
                        <FaAngleDown className="text-paragraph mt-1 ml-auto duration-500 group-hover:rotate-180 dark:text-white" />
                      </Link>
                      <ul className="dark:bg-dark-200 [&>*:not(:last-child)]:border-borderColour dark:[&>*:not(:last-child)]:border-borderColour-dark absolute top-12 left-0 z-10 min-w-full origin-top scale-y-0 rounded-3xl bg-white p-8 opacity-0 duration-500 group-hover:scale-y-100 group-hover:opacity-100 [&>*:not(:first-child)]:mt-2.5 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed">
                        {menuItem.submenu.map((submenuItem) => (
                          <li
                            className="text-paragraph before:bg-paragraph relative overflow-hidden pb-2.5 text-base capitalize duration-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:before:bg-white"
                            key={submenuItem.id}>
                            <Link
                              href={submenuItem.path}
                              className="flex"
                              onClick={() => setShowMobileMenu(!showMobileMenu)}>
                              {submenuItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}

              <li>
                <Link href="/request-demo" className="btn btn-navbar btn-sm">
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default PrimaryNavbar
