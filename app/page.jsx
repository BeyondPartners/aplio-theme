import Footer from '@/components/footer/Footer'
import Hero from '@/components/home-claude/Hero'
import Offer from '@/components/home-claude/Offer'
import PainPoints from '@/components/home-claude/PainPoints'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import Faq from '@/components/home-claude/Faq'
import TeamMembers from '@/components/shared/TeamMembers'
import Testimonial from '@/components/shared/Testimonial'

export const metadata = {
  title: {
    absolute: 'BeyondPartners',
  },
}

export default function Home() {
  return (
    <>
      <PrimaryNavbar />
      <main id="home" className="scroll-mt-32">
        <section id="notre-accompagnement" className="scroll-mt-32">
          <Hero />
          <PainPoints />
          <Offer />
        </section>
        <Testimonial anchorId="temoignages" />
        <Faq anchorId="faq" />
        <TeamMembers anchorId="a-propos-de-nous" />
      </main>
      <Footer />
    </>
  )
}
