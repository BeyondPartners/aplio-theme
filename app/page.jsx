import Footer from '@/components/footer/Footer'
import Hero from '@/components/home-claude/Hero'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'

export const metadata = {
  title: 'Aplio',
}

export default function Home() {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
