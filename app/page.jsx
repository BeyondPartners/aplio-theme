import Footer from '@/components/footer/Footer'
import Hero from '@/components/home-claude/Hero'
import Offer from '@/components/home-claude/Offer'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import Faq from '@/components/shared/Faq'
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
        <Offer />
        <Testimonial />
        <Faq />
        <TeamMembers />
      </main>
      <Footer />
    </>
  )
}
