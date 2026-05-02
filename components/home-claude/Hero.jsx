import NavbarItem from '@/data/navbar'
import Link from 'next/link'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import TrustBar from './TrustBar'

const axes = [
  {
    title: 'Formation complète des équipes',
    desc: 'Pour une maîtrise de Claude Cowork au quotidien.',
  },
  {
    title: 'Intégration dans vos process clés',
    desc: 'Claude Cowork est intégré à vos 3 process les plus chronophages.',
  },
  {
    title: 'Création de la stratégie et conduite du changement',
    desc: 'De 30 à 90 jours et portée par vos équipes, pour une transformation durable.',
  },
]

const Hero = () => {
  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden bg-white">
      <div className="bg-accent/10 absolute -top-40 left-1/2 -z-10 hidden h-[600px] w-[1100px] -translate-x-1/2 rounded-full blur-[120px] motion-safe:absolute md:block" />
      <div className="container mb-6 flex flex-1 flex-col justify-center pt-24 md:pt-32 xl:pt-[160px]">
        <div className="mx-auto w-full max-w-[1200px] text-center">
          <FadeUpAnimation className="space-y-5 md:space-y-6 lg:space-y-8">
            <h1 className="text-[32px]! leading-[1.15]! tracking-tight sm:text-[36px]! md:text-[40px]! xl:text-[52px]!">
              <span className="text-accent">Démultipliez la productivité</span> de votre cabinet d&apos;architecte avec
              Claude Cowork
            </h1>
            <p className="text-paragraph mx-auto max-w-[640px] text-[15px] leading-relaxed md:text-lg">
              Équipez vos collaborateurs du meilleur assistant IA du marché et accélerez chaque phase de projet, de
              l&apos;esquisse à la réalisation.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href={NavbarItem.bookingCalendlyUrl} target="_blank" rel="noopener noreferrer" className="btn">
                Échanger avec un expert
              </Link>
            </div>
          </FadeUpAnimation>
        </div>
      </div>
      <div className="shrink-0">
        <TrustBar />
        <div className="bg-[#ffefea] py-8 md:py-10">
          <div className="container">
            <FadeUpAnimation>
              <ul className="grid grid-cols-1 divide-y divide-[#e8c4b8]/60 md:grid-cols-3 md:divide-x md:divide-y-0 md:divide-[#e8c4b8]/60">
                {axes.map((axe, i) => (
                  <li
                    key={axe.title}
                    className="relative flex flex-col gap-2 px-2 py-5 first:pt-0 last:pb-0 md:grid md:grid-cols-[auto_1fr] md:gap-x-6 md:gap-y-2 md:px-8 md:py-0 lg:px-10">
                    <div className="flex items-baseline gap-3 md:contents">
                      <span className="text-accent font-jakarta shrink-0 text-[28px] leading-none font-bold tabular-nums md:col-start-1 md:row-span-2 md:row-start-1 md:flex md:items-center md:justify-start md:self-stretch md:text-6xl lg:text-7xl">
                        {i + 1}
                      </span>
                      <p className="font-jakarta text-paragraph text-base leading-snug font-bold md:col-start-2 md:row-start-1 md:text-[1.05rem] lg:text-[1.1rem]">
                        {axe.title}
                      </p>
                    </div>
                    <p className="text-paragraph-light text-sm leading-relaxed md:col-start-2 md:row-start-2 md:text-[0.9rem]">
                      {axe.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeUpAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
