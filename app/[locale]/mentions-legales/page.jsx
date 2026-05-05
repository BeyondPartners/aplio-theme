import Footer from '@/components/footer/Footer'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { isValidLocale } from '@/lib/i18n/config'
import { getSiteUrl } from '@/lib/site-url'
import getMarkDownData from '@/utils/getMarkDownData'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export async function generateMetadata({ params }) {
  const { locale: raw } = await params
  const locale = isValidLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const base = getSiteUrl()
  return {
    title: dict.metadata.legal.title,
    description: dict.metadata.legal.description,
    alternates: {
      canonical: `${base}/${locale}/mentions-legales`,
      languages: {
        fr: `${base}/fr/mentions-legales`,
        en: `${base}/en/mentions-legales`,
        'x-default': `${base}/fr/mentions-legales`,
      },
    },
  }
}

export default async function MentionsLegales({ params }) {
  const { locale: raw } = await params
  const locale = isValidLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const folder = locale === 'en' ? 'content/mentions-legales/en/' : 'content/mentions-legales/'
  const pages = getMarkDownData(folder)

  return (
    <>
      <PrimaryNavbar locale={locale} dict={dict} />
      <main>
        <section className="relative overflow-hidden pt-[250px] pb-150 max-md:pt-150">
          <div className="absolute -top-[800px] right-0 left-0 h-full w-full bg-[url('/images/core-gradient.png')] bg-[length:600px_1000px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="relative container !max-w-[800px]">
            <div className="absolute top-20 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden">
              <div className="bg-primary-200/20 h-[442px] w-[442px] rounded-full blur-[145px]"></div>
              <div className="bg-primary-200/25 -ml-[170px] h-[442px] w-[442px] rounded-full blur-[145px]"></div>
              <div className="bg-primary-200/20 -ml-[170px] h-[442px] w-[442px] rounded-full blur-[145px]"></div>
            </div>

            <div className="singlePage">
              <h2 className="mb-3 max-w-[650px] leading-[1.33] font-semibold">{dict.legalPage.h2}</h2>
              <p className="text-tagline-2 mb-8">
                <Link href={`/${locale}`} className="text-primary-500 hover:underline">
                  {dict.legalPage.backHome}
                </Link>
              </p>
            </div>

            <div className="singlePage">
              {pages.map((item) => (
                <div key={item.slug}>
                  <div className="mb-6">
                    <ReactMarkdown>{item.content}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  )
}
