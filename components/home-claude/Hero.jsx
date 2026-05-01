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
    <section className="dark:bg-dark-300 relative flex min-h-dvh flex-col overflow-hidden bg-white">
      <div className="bg-accent/10 absolute -top-40 left-1/2 -z-10 h-[600px] w-[1100px] -translate-x-1/2 rounded-full blur-[120px]" />
      <div className="container mb-6 flex flex-1 flex-col justify-center pt-[160px]">
        <div className="mx-auto w-full max-w-[1200px] text-center">
          <FadeUpAnimation className="space-y-6 lg:space-y-8">
            <h1 className="text-[40px]! leading-[1.15]! tracking-tight md:text-[44px]! xl:text-[52px]!">
              <span className="text-accent">Démultipliez la productivité</span> de votre cabinet d&apos;architecte avec
              Claude Cowork
            </h1>
            <p className="text-paragraph mx-auto max-w-[640px] text-lg leading-relaxed dark:text-white/80">
              Équipez vos collaborateurs du meilleur assistant IA du marché et accélerez chaque phase de projet, de
              l&apos;esquisse à la réalisation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="#" className="btn">
                Réserver votre audit
              </Link>
            </div>
          </FadeUpAnimation>
        </div>
      </div>
      <div className="shrink-0">
        <TrustBar />
        <div className="bg-[#ffefea] py-10">
          <div className="container">
            <FadeUpAnimation>
              <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
                {axes.map((axe, i) => (
                  <li
                    key={axe.title}
                    className="relative grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 px-6 not-last:after:absolute not-last:after:top-1/2 not-last:after:right-0 not-last:after:hidden not-last:after:h-16 not-last:after:w-px not-last:after:-translate-y-1/2 not-last:after:bg-[#e8c4b8] md:gap-x-6 md:px-8 not-last:md:after:block lg:px-10">
                    <span className="text-accent font-jakarta col-start-1 row-span-2 row-start-1 flex shrink-0 items-center justify-start self-stretch text-5xl leading-none font-bold tabular-nums md:text-6xl lg:text-7xl">
                      {i + 1}
                    </span>
                    <p className="font-jakarta text-paragraph col-start-2 row-start-1 text-base leading-snug font-bold md:text-[1.05rem] lg:text-[1.1rem] dark:text-white">
                      {axe.title}
                    </p>
                    <p className="text-paragraph-light col-start-2 row-start-2 text-sm leading-relaxed md:text-[0.9rem] dark:text-white/80">
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
