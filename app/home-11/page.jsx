import Footer from '@/components/footer/Footer'
import Cta from '@/components/home-1/Cta'
import Integration from '@/components/home-1/Integration'
import Feature from '@/components/home-11/Feature'
import FeatureThree from '@/components/home-11/FeatureThree'
import FeatureTwo from '@/components/home-11/FeatureTwo'
import Hero from '@/components/home-11/Hero'
import Services from '@/components/home-11/Services'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import FinancialBlog from '@/components/shared/FinancialBlog'
import TestimonialSlider from '@/components/shared/TestimonialSlider'

export const metadata = {
  title: 'Social Media Management',
}
const HomePage9 = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <Hero />
        <Services />
        <Feature />
        <FeatureTwo />
        <FeatureThree />
        <Integration />
        <TestimonialSlider />
        <FinancialBlog />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default HomePage9
