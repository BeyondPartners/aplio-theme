import Footer from '@/components/footer/Footer'
import Cta from '@/components/home-1/Cta'
import Contact from '@/components/home-9/Contact'
import Elegibility from '@/components/home-9/Elegibility'
import Hero from '@/components/home-9/Hero'
import Solution from '@/components/home-9/Solution'
import WhyUs from '@/components/home-9/WhyUs'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import TestimonialSlider from '@/components/shared/TestimonialSlider'

export const metadata = {
  title: 'Mortgage Services',
}
const HomePage9 = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <Hero />
        <WhyUs />
        <Solution />
        <Elegibility />
        <TestimonialSlider />
        <Contact />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default HomePage9
