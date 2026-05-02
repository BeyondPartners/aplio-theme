'use client'
import BeyondPartnersLogo from '@/components/shared/BeyondPartnersLogo'
import NavbarItem from '@/data/navbar'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { FaAngleDown, FaTimes } from 'react-icons/fa'

/** Primary navbar is only used on `/`; hash targets home sections. Next.js Link needs `/#id`, not `#id`. */
function homeSectionHref(href) {
  if (typeof href !== 'string' || !href.startsWith('#')) return href
  return `/${href}`
}

const PrimaryNavbar = () => {
  const { menuData } = NavbarItem
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [sticky, setSticky] = useState(false)

  const closeMobileMenuAndScrollToHash = useCallback((hashPath) => {
    const id = hashPath.replace(/^#/, '')
    setShowMobileMenu(false)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.replaceState(null, '', `#${id}`)
      })
    })
  }, [])

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
          'fixed left-0 z-50 w-full bg-transparent transition-all duration-500 max-lg:z-[500]',
          sticky ? 'nav-sticky' : 'pt-8',
        )}>
        <nav className="relative container flex !max-w-[min(100%,1360px)] items-center lg:px-4 xl:px-6 2xl:max-w-[min(100%,1420px)]! 2xl:px-8">
          <div className="nav-logo flex shrink-0 items-center lg:min-w-[200px] xl:min-w-[220px] 2xl:min-w-[266px]">
            <Link
              href="/"
              aria-label="BeyondPartners — accueil"
              className="inline-flex items-center leading-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#612D3A]/35 focus-visible:outline-none">
              <BeyondPartnersLogo className="text-base leading-none sm:text-lg xl:text-xl" />
            </Link>
          </div>

          <ul className="nav-list rounded-large shadow-nav mx-auto hidden shrink-0 bg-white p-2.5 lg:flex [&>*:not(:last-child)]:me-1">
            {menuData.menuContent.map((menuItem) => (
              <li className={cn(menuItem.megaMenu ? 'group' : menuItem.path ? '' : 'group relative')} key={menuItem.id}>
                {menuItem.path ? (
                  <Link
                    href={homeSectionHref(menuItem.path)}
                    className={cn(
                      'rounded-large font-Inter text-paragraph flex items-center border border-transparent px-3 py-[5px] text-sm leading-7 font-medium whitespace-nowrap capitalize transition-colors duration-500 hover:bg-zinc-100 hover:duration-500 lg:px-2 xl:px-3 xl:text-base xl:leading-8 2xl:px-5',
                    )}>
                    {menuItem.title}
                  </Link>
                ) : menuItem.megaMenu ? (
                  <>
                    <Link
                      href="#"
                      className={cn(
                        'group rounded-large font-Inter text-paragraph flex items-center border border-transparent px-3 py-[5px] text-sm leading-7 font-medium whitespace-nowrap transition-colors duration-500 hover:bg-zinc-100 hover:duration-500 lg:px-2 xl:px-3 xl:text-base xl:leading-8 2xl:px-5',
                        menuItem.title === 'page' ? 'active' : '',
                      )}>
                      {menuItem.title}
                      <FaAngleDown className="text-paragraph mt-1 ml-1 duration-500 group-hover:rotate-180" />
                    </Link>
                    <div className="rounded-medium absolute top-12 left-0 z-10 grid w-full origin-top scale-y-0 items-center gap-15 bg-white p-2.5 text-gray-900 opacity-0 shadow-lg duration-500 group-hover:scale-y-100 group-hover:opacity-100 md:grid-cols-12">
                      <ul className="col-span-8 columns-3 gap-10 px-15">
                        {menuItem.submenu.map((submenuItem) => (
                          <li
                            className="text-paragraph before:bg-paragraph relative overflow-hidden py-2.5 text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
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
                          className="!w-full rounded-2xl"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      href="#"
                      className={cn(
                        'rounded-large font-Inter text-paragraph flex items-center border border-transparent px-3 py-[5px] text-sm leading-7 font-medium whitespace-nowrap capitalize transition-colors duration-500 hover:bg-zinc-100 hover:duration-500 lg:px-2 xl:px-3 xl:text-base xl:leading-8 2xl:px-5',
                        menuItem.title === 'home' ? 'active' : '',
                      )}>
                      {menuItem.title}
                      <FaAngleDown className="text-paragraph mt-1 ml-1 duration-500 group-hover:rotate-180" />
                    </Link>
                    <ul className="absolute top-12 left-0 z-10 min-w-[250px] origin-top scale-y-0 rounded-md bg-white p-5 opacity-0 duration-500 group-hover:scale-y-100 group-hover:opacity-100 [&>*:not(:first-child)]:mt-2.5 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-gray-200">
                      {menuItem.submenu.map((submenuItem) => (
                        <li
                          className="text-paragraph before:bg-paragraph relative overflow-hidden pb-2.5 text-base capitalize duration-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
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

          <ul className="ml-auto flex shrink-0 items-center [&>*:not(:last-child)]:me-2.5">
            <li className="flex items-center max-lg:hidden">
              <Link
                href={homeSectionHref(menuData.btnLlink)}
                className="btn btn-navbar btn-sm text-sm whitespace-nowrap xl:text-base">
                Nous Contacter
              </Link>
            </li>
            <li className="flex items-center lg:hidden">
              <button
                type="button"
                className="mobile-menu-button relative flex size-10 cursor-pointer items-center justify-center rounded-full bg-white outline-none"
                onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" className="size-5">
                  <path
                    d="M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1C22 1.55228 21.5523 2 21 2H1C0.447716 2 0 1.55228 0 1Z"
                    fill=""
                    className="fill-paragraph"
                  />
                  <path
                    d="M8 7C8 6.44772 8.44772 6 9 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H9C8.44772 8 8 7.55228 8 7Z"
                    fill=""
                    className="fill-paragraph"
                  />
                  <path
                    d="M4 13C4 12.4477 4.44772 12 5 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H5C4.44772 14 4 13.5523 4 13Z"
                    fill=""
                    className="fill-paragraph"
                  />
                </svg>
              </button>
            </li>
          </ul>

          <div className={cn('mobile-menu max-lg:overflow-y-auto max-lg:!bg-white', showMobileMenu ? 'open' : 'close')}>
            <button
              type="button"
              className="navbar-toggle-close absolute top-5 right-6 flex size-10 cursor-pointer items-center justify-center rounded-full bg-white outline-none"
              onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <FaTimes />
            </button>
            <ul className="nav-list mt-28 flex w-full max-w-full flex-col gap-5 landscape:h-full">
              {menuData.menuContent.map((menuItem) => (
                <li className={cn(menuItem.path ? 'relative' : 'group relative')} key={menuItem.id}>
                  {menuItem.path ? (
                    <Link
                      href={homeSectionHref(menuItem.path)}
                      className={cn(
                        'rounded-large font-Inter text-paragraph flex items-center border border-transparent px-5 py-[5px] text-base leading-8 font-medium transition-colors duration-500 hover:bg-zinc-100 hover:duration-500 lg:px-4 xl:px-5',
                      )}
                      onClick={(e) => {
                        if (menuItem.path.startsWith('#')) {
                          e.preventDefault()
                          closeMobileMenuAndScrollToHash(menuItem.path)
                        } else {
                          setShowMobileMenu(false)
                        }
                      }}>
                      {menuItem.title}
                    </Link>
                  ) : menuItem.megaMenu ? (
                    <>
                      <Link
                        href="#"
                        className="group rounded-large font-Inter text-paragraph flex items-center border border-transparent px-5 py-[5px] text-base leading-8 font-medium transition-colors duration-500 hover:bg-zinc-100 hover:duration-500 lg:px-4 xl:px-5">
                        {menuItem.title}
                        <FaAngleDown className="text-paragraph mt-1 ml-auto duration-500 group-hover:rotate-180" />
                      </Link>
                      <div className="rounded-medium absolute top-12 left-0 z-10 w-full origin-top scale-y-0 items-center bg-white p-6 text-gray-900 opacity-0 shadow-lg duration-500 group-hover:scale-y-100 group-hover:opacity-100">
                        <ul className="mb-15 columns-2 gap-10">
                          {menuItem.submenu.map((submenuItem) => (
                            <li
                              className="text-paragraph before:bg-paragraph relative overflow-hidden py-2.5 text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
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
                            className="!w-full rounded-2xl"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        href="#"
                        className="rounded-large font-Inter text-paragraph flex items-center border border-transparent px-5 py-[5px] text-base leading-8 font-medium transition-colors duration-500 hover:bg-zinc-100 hover:duration-500 lg:px-4 xl:px-5">
                        {menuItem.title}
                        <FaAngleDown className="text-paragraph mt-1 ml-auto duration-500 group-hover:rotate-180" />
                      </Link>
                      <ul className="absolute top-12 left-0 z-10 min-w-full origin-top scale-y-0 rounded-3xl bg-white p-8 opacity-0 duration-500 group-hover:scale-y-100 group-hover:opacity-100 [&>*:not(:first-child)]:mt-2.5 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-gray-200">
                        {menuItem.submenu.map((submenuItem) => (
                          <li
                            className="text-paragraph before:bg-paragraph relative overflow-hidden pb-2.5 text-base capitalize duration-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
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
                <Link
                  href={homeSectionHref(menuData.btnLlink)}
                  className="btn btn-navbar btn-sm"
                  onClick={(e) => {
                    if (menuData.btnLlink.startsWith('#')) {
                      e.preventDefault()
                      closeMobileMenuAndScrollToHash(menuData.btnLlink)
                    } else {
                      setShowMobileMenu(false)
                    }
                  }}>
                  Nous contacter
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
