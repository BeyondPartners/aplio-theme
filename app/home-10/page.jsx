import Footer from '@/components/footer/Footer'
import Hero from '@/components/home-10/Hero'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import FeatureHighlights from '@/components/home-10/FeatureHighlights'
import Pricing from '@/components/shared/Pricing'
import TestimonialV2 from '@/components/shared/TestimonialV2'
import Features from '@/components/home-10/Features'
import FAQWithLeftText from '@/components/home-10/FAQWithLeftText'
import Process from '@/components/home-10/Process'
import OurStats from '@/components/home-10/OurStats'
import CallToActionV2 from '@/components/shared/CallToActionV2'

export const metadata = {
  title: 'Email Marketing',
}
const HomePage9 = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <Hero />
        <FeatureHighlights />
        <Features />
        <Process />
        <OurStats />
        <Pricing />
        <FAQWithLeftText />
        <TestimonialV2 />
        <CallToActionV2 />
      </main>
      <Footer />
    </>
  )
}

export default HomePage9
