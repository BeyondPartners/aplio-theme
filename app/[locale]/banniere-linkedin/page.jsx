import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import BeyondPartnersLogo from '@/components/shared/BeyondPartnersLogo'
import NewsLetter from '@/components/shared/NewsLetter'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { isValidLocale } from '@/lib/i18n/config'
import { getSiteUrl } from '@/lib/site-url'
import Link from 'next/link'

const BANNER_PREVIEW_WIDTH = Math.round(1128 * 0.8)
const BANNER_PREVIEW_HEIGHT = 191

export async function generateMetadata({ params }) {
  const { locale: raw } = await params
  const locale = isValidLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const base = getSiteUrl()
  return {
    title: dict.metadata.banner.title,
    description: dict.metadata.banner.description,
    alternates: {
      canonical: `${base}/${locale}/banniere-linkedin`,
      languages: {
        fr: `${base}/fr/banniere-linkedin`,
        en: `${base}/en/banniere-linkedin`,
        'x-default': `${base}/fr/banniere-linkedin`,
      },
    },
  }
}

export default async function BanniereLinkedInPage({ params }) {
  const { locale: raw } = await params
  const locale = isValidLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const b = dict.bannerPage

  const specs = [
    {
      label: b.specsDimensionsLabel,
      value: b.specsDimensionsTemplate
        .replace('{width}', BANNER_PREVIEW_WIDTH.toLocaleString(locale === 'fr' ? 'fr-FR' : 'en-US'))
        .replace('{height}', String(BANNER_PREVIEW_HEIGHT)),
    },
    { label: b.specsFormatsLabel, value: b.specsFormats },
    { label: b.specsSafeZoneLabel, value: b.specsSafeZone },
  ]

  return (
    <>
      <SecondaryNavbar locale={locale} dict={dict} />
      <main>
        <section className="relative overflow-hidden pt-[200px] pb-24 max-md:pt-36">
          <div className="absolute -top-[600px] right-0 left-0 h-full w-full bg-[url('/images/core-gradient.png')] bg-[length:600px_1000px] bg-center bg-no-repeat opacity-60 md:opacity-70" />

          <div className="relative container max-w-[960px]">
            <p className="text-tagline-2 mb-2">
              <Link href={`/${locale}`} className="text-secondary hover:underline">
                {b.backHome}
              </Link>
            </p>
            <h1 className="font-jakarta text-paragraph mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
              {b.h1}
            </h1>
            <p className="text-paragraph-light mb-10 max-w-[720px] text-base leading-relaxed">{b.intro}</p>

            <div className="border-stroke-1 shadow-box dark:border-borderColour-dark dark:bg-dark-200/80 mb-12 border bg-white/80 p-6 backdrop-blur-sm">
              <h2 className="font-jakarta text-paragraph mb-4 text-lg font-semibold">{b.specsTitle}</h2>
              <ul className="text-paragraph-light space-y-3 text-sm">
                {specs.map((row) => (
                  <li key={row.label}>
                    <span className="text-paragraph font-medium">{row.label}</span>
                    <span className="text-stroke-2 mx-2 dark:text-gray-200">—</span>
                    {row.value}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-jakarta text-paragraph mb-4 text-xl font-semibold">
              {b.mockupTitleTemplate
                .replace('{width}', String(BANNER_PREVIEW_WIDTH))
                .replace('{height}', String(BANNER_PREVIEW_HEIGHT))}
            </h2>
            <p className="text-paragraph-light mb-4 text-sm">{b.mockupHint}</p>

            <div
              className="border-stroke-1 dark:border-borderColour-dark shadow-box mx-auto w-full overflow-hidden border"
              style={{ maxWidth: `${BANNER_PREVIEW_WIDTH}px` }}>
              <div
                className="relative flex w-full items-stretch overflow-hidden"
                style={{
                  aspectRatio: `${BANNER_PREVIEW_WIDTH} / ${BANNER_PREVIEW_HEIGHT}`,
                  backgroundColor: '#ffffff',
                }}>
                <div className="bg-accent/5 pointer-events-none absolute -top-[45%] left-1/2 z-0 hidden h-[220%] w-[min(110%,920px)] -translate-x-1/2 rounded-full blur-[72px] sm:block md:blur-[100px]" />
                <div className="bg-accent/10 pointer-events-none absolute -top-[30%] left-1/2 z-0 h-[160%] w-[140%] -translate-x-1/2 rounded-full blur-[64px] sm:hidden" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[32%] border-t border-[#e8c4b8]/50 bg-[#ffefea]/90" />

                <div className="relative z-[2] flex w-full min-w-0 items-center justify-between gap-3 px-4 py-6 sm:gap-6 sm:px-8 md:px-10">
                  <BeyondPartnersLogo className="max-w-[min(42%,220px)] shrink-0 text-[clamp(0.65rem,2vw,1.25rem)] leading-none" />
                  <div className="max-w-[75%] min-w-0 text-right">
                    <p className="font-jakarta text-2xl leading-[1.2] font-semibold tracking-tight">
                      <span className="text-accent">{b.bannerLine1}</span>{' '}
                      <span className="text-paragraph">
                        {b.bannerLine2a}
                        <br /> {b.bannerLine2b}
                      </span>
                    </p>

                    <p className="text-accent mt-1 text-[11px] font-medium tracking-wide sm:hidden">
                      {b.bannerMobileTag}
                    </p>
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute bottom-0 left-0 z-[3] h-[36%] w-[13%] rounded-tr-lg border-t border-r border-[#e8c4b8]/40 bg-white/50 md:w-[11%]"
                  aria-hidden
                />
              </div>
            </div>

            <h2 className="font-jakarta text-paragraph mt-12 mb-4 text-xl font-semibold">{b.copyTitle}</h2>
            <p className="text-paragraph-light mb-6 text-sm">{b.copyIntro}</p>
            <div className="space-y-4">
              {b.copyBlocks.map((block) => (
                <div
                  key={block.title}
                  className="border-stroke-1 dark:border-borderColour-dark dark:bg-dark-200 rounded-xl border bg-gray-50 p-5">
                  <p className="font-jakarta text-secondary mb-2 text-xs font-semibold tracking-wide uppercase">
                    {block.title}
                  </p>
                  {block.lines.map((line) => (
                    <p
                      key={line}
                      className="font-jakarta text-paragraph text-base font-medium select-all dark:text-gray-100">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="border-accent/40 bg-primary-100/50 dark:bg-dark-200/50 mt-10 rounded-xl border border-dashed p-5">
              <p className="font-jakarta text-paragraph text-sm leading-relaxed dark:text-gray-200">
                <strong className="text-paragraph dark:text-white">{b.tipLead}</strong> {b.tipBody}
              </p>
            </div>
          </div>
        </section>
        <NewsLetter />
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  )
}
