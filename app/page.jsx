import Footer from '@/components/footer/Footer'
import Hero from '@/components/home-claude/Hero'
import Offer from '@/components/home-claude/Offer'
import PainPoints from '@/components/home-claude/PainPoints'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import Faq from '@/components/home-claude/Faq'
import TeamMembers from '@/components/shared/TeamMembers'
import Testimonial from '@/components/shared/Testimonial'

export const metadata = {
  title: 'Aplio',
}

export default function Home() {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <Hero />
        <PainPoints />
        <Offer />
        <Testimonial />
        <Faq />
        <TeamMembers />
      </main>
      <Footer />
    </>
  )
}
