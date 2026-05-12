import { DEFAULT_LOCALE } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import footerSeperator from '@/public/images/footer-seperator.svg'
import footerLogo from '@/public/images/logo_beyond_partners.png'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import LanguageToggle from './LanguageToggle'

const Footer = ({ locale = DEFAULT_LOCALE, dict: dictProp }) => {
  const dict = dictProp ?? getDictionary(locale)
  const legalHref = `/${locale}/mentions-legales`

  return (
    <footer className="relative bg-white">
      <div className="container">
        <div className="seperator">
          <Image src={footerSeperator} alt="" className="w-full object-cover max-md:h-px" />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 py-7 max-sm:flex-col max-sm:gap-5 max-sm:py-6">
          <Link
            href={`/${locale}`}
            aria-label={dict.common.brandHomeAria}
            className="shrink-0 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#612D3A]/35 focus-visible:outline-none">
            <Image src={footerLogo} alt="Beyond Partners logo" className="xs:h-10 h-8 w-auto" priority={false} />
          </Link>

          <p className="text-paragraph order-last text-sm max-sm:order-last sm:order-none">{dict.footer.copyright}</p>

          <div className="flex flex-wrap items-center justify-center gap-6 max-sm:w-full">
            <LanguageToggle locale={locale} dict={dict} />
            <Link
              href={legalHref}
              className="text-paragraph hover:text-secondary cursor-pointer text-sm transition-colors duration-300">
              {dict.footer.legal}
            </Link>
            <ul className="flex items-center">
              <li>
                <Link
                  href="https://www.linkedin.com/company/beyond-partners-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={dict.footer.linkedInAria}
                  className="group block transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 28 28"
                    fill="none"
                    className="block">
                    <path
                      className="fill-paragraph group-hover:fill-secondary transition-colors duration-300"
                      d="M14.0037 2C9.04517 2 4.57804 4.9866 2.6827 9.56221C0.787361 14.1378 1.83395 19.409 5.33745 22.9125C8.84096 26.4161 14.1122 27.4626 18.6878 25.5673C23.2698 23.6783 26.2564 19.2112 26.2564 14.2527C26.2564 7.48819 20.7682 2 14.0037 2ZM10.4427 20.7045H7.76885V12.0893H10.4427V20.7045ZM9.1026 10.9151C8.47082 10.9151 7.90286 10.5386 7.66036 9.95787C7.41786 9.37715 7.54549 8.70708 7.9922 8.26036C8.43253 7.81365 9.1026 7.67964 9.68333 7.91576C10.2641 8.15188 10.6473 8.71984 10.6533 9.34524C10.6533 10.2131 9.96412 10.9087 9.1026 10.9151ZM20.4555 20.7045H17.7816V16.5118C17.7816 15.5099 17.7625 14.2336 16.3904 14.2336C15.0184 14.2336 14.7759 15.3184 14.7759 16.4416V20.7045H12.1147V12.0893H14.6801V13.2635H14.7184C15.0758 12.5871 15.9437 11.8724 17.2455 11.8724C19.9513 11.8724 20.4491 13.6528 20.4491 15.9694V20.7045H20.4555Z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  locale: PropTypes.oneOf(['fr', 'en']),
  dict: PropTypes.object,
}

export default Footer
