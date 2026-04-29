import FaqFilter from '@/components/faq/FaqFilter'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Faq Page',
}

const FaqPage = () => {
  return (
    <>
      <SecondaryNavbar />
      <main>
        <PageHero
          subtitle="FAQ’S"
          title="Frequently asked <br> question"
          paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
        />
        <section className="pb-150 max-md:overflow-hidden">
          <div className="relative z-10 container">
            <div className="absolute top-0 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
              <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] rounded-full blur-[145px]"></div>
              <div className="bg-primary-200/25 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
              <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
            </div>
            <div className="absolute left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
            <FaqFilter />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default FaqPage
