import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import NewsLetter from '@/components/shared/NewsLetter'
import getMarkDownData from '@/utils/getMarkDownData'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export const metadata = {
  title: 'Mentions légales',
  description: 'CGV, politique de confidentialité et mentions légales — Beyond Partners, marque de LS Fintech.',
}

const MentionsLegales = () => {
  const pages = getMarkDownData('content/mentions-legales/')
  return (
    <>
      <SecondaryNavbar />
      <main>
        <section className="relative overflow-hidden pt-[250px] pb-150 max-md:pt-150">
          <div className="absolute -top-[800px] right-0 left-0 h-full w-full bg-[url('/images/core-gradient.png')] bg-[length:600px_1000px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="relative container !max-w-[800px]">
            <div className="absolute top-20 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden">
              <div className="bg-primary-200/20 h-[442px] w-[442px] rounded-full blur-[145px]"></div>
              <div className="bg-primary-200/25 -ml-[170px] h-[442px] w-[442px] rounded-full blur-[145px]"></div>
              <div className="bg-primary-200/20 -ml-[170px] h-[442px] w-[442px] rounded-full blur-[145px]"></div>
            </div>

            <div className="singlePage">
              <h2 className="mb-3 max-w-[650px] leading-[1.33] font-semibold">Mentions légales</h2>
              <p className="text-tagline-2 mb-8">
                <Link href="/" className="text-primary-500 hover:underline">
                  Retour à l&apos;accueil
                </Link>
              </p>
            </div>

            <div className="singlePage">
              {pages.map((item) => (
                <div key={item.slug}>
                  <div className="mb-6">
                    <ReactMarkdown>{item.content}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default MentionsLegales
