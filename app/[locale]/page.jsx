import Footer from '@/components/footer/Footer'
import Hero from '@/components/home-claude/Hero'
import Offer from '@/components/home-claude/Offer'
import PainPoints from '@/components/home-claude/PainPoints'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import Faq from '@/components/home-claude/Faq'
import TeamMembers from '@/components/shared/TeamMembers'
import Testimonial from '@/components/shared/Testimonial'
import teamMembers from '@/data/team'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { isValidLocale } from '@/lib/i18n/config'
import { getSiteUrl } from '@/lib/site-url'

export async function generateMetadata({ params }) {
  const { locale: raw } = await params
  const locale = isValidLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const base = getSiteUrl()
  return {
    title: {
      absolute: dict.metadata.home.title,
    },
    alternates: {
      canonical: `${base}/${locale}`,
      languages: {
        fr: `${base}/fr`,
        en: `${base}/en`,
        'x-default': `${base}/fr`,
      },
    },
  }
}

export default async function Home({ params }) {
  const { locale: raw } = await params
  const locale = isValidLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)

  const teamData = teamMembers.teamData.map((m) => ({
    ...m,
    details: dict.team.bios[String(m.id)] ?? m.details,
  }))

  return (
    <div className="min-h-screen bg-white">
      <PrimaryNavbar locale={locale} dict={dict} />
      <main id={dict.sections.home} className="scroll-mt-32">
        <section id={dict.sections.program} className="scroll-mt-32">
          <Hero dict={dict} />
          <PainPoints locale={locale} dict={dict} />
          <Offer locale={locale} dict={dict} />
        </section>
        <Testimonial anchorId={dict.sections.testimonials} dict={dict} />
        <Faq anchorId={dict.sections.faq} dict={dict} />
        <TeamMembers anchorId={dict.sections.about} dict={dict} teamData={teamData} />
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  )
}
