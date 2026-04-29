import Footer from '@/components/footer/Footer'
import Blog from '@/components/home-2/Blog'
import CoreFeature from '@/components/home-2/CoreFeature'
import Hero from '@/components/home-2/Hero'
import Rating from '@/components/home-2/Rating'
import WhyUs from '@/components/home-2/WhyUs'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import CallToAction from '@/components/shared/CallToAction'
import Clients from '@/components/shared/Clients'
import MembersCounter from '@/components/shared/MembersCounter'
import PaymentFeatures from '@/components/shared/PaymentFeatures'
import Pricing from '@/components/shared/Pricing'
import PaymentFeaturesList from '@/data/paymentFeaturesData'

export const metadata = {
  title: 'Payment',
}

const HomePage2 = () => {
  const { PaymentFeaturesData } = PaymentFeaturesList
  return (
    <>
      <SecondaryNavbar />
      <main>
        <Hero />
        <Rating />
        <CoreFeature />
        <WhyUs />
        <PaymentFeatures
          features={PaymentFeaturesData}
          sectionTag="MORE FEATURES"
          sectionTitle="Managing your money has never been easier"
          className="dark:bg-dark-300 relative bg-white pt-150 pb-150 max-md:overflow-hidden max-md:py-25"
        />
        <MembersCounter />
        <Pricing />
        <Clients sectionTitle={false} sectionDetails={false} className={'pt-0 pb-0'} />
        <Blog />
        <CallToAction title="Start your best payment experience now!" />
      </main>
      <Footer />
    </>
  )
}

export default HomePage2
