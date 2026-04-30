import Link from 'next/link'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import TrustBar from './TrustBar'

const axes = [
  {
    title: 'Formation complète des équipes',
    desc: 'Pour une maîtrise de Claude Cowork au quotidien.',
  },
  {
    title: 'Installation dans vos process clés',
    desc: 'Claude Cowork est intégré à vos 3 process les plus chronophages.',
  },
  {
    title: 'Création de la feuille de route',
    desc: 'De 30 à 90 jours et portée par vos équipes, pour une transformation durable.',
  },
]

const Hero = () => {
  return (
    <section className="from-primary dark:from-dark dark:to-dark-300 relative overflow-hidden bg-linear-to-br to-white pt-[140px] pb-25 max-lg:pt-[120px] max-lg:pb-15">
      <div className="bg-accent/10 absolute -top-40 left-1/2 -z-10 h-[600px] w-[1100px] -translate-x-1/2 rounded-full blur-[120px]" />
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-12 lg:gap-x-16">
          <FadeUpAnimation className="col-span-12 space-y-6 lg:col-span-7 lg:space-y-8">
            <span className="border-accent/20 text-accent dark:bg-dark-200/60 inline-flex items-center gap-2 rounded-full border bg-white/60 px-4 py-1.5 text-sm font-medium backdrop-blur dark:border-[#31332F] dark:text-white"></span>
            <h1 className="text-[40px]! leading-[1.15]! tracking-tight md:text-[44px]! xl:text-[52px]!">
              Démultipliez la productivité de votre cabinet d&apos;architecte avec{' '}
              <span className="text-accent">Claude Cowork</span>
            </h1>
            <p className="text-paragraph max-w-[640px] text-lg leading-relaxed dark:text-white/80">
              Équipez vos collaborateurs du meilleur assistant IA du marché et accélerez chaque phase de projet, de
              l&apos;esquisse au dossier de permis.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#" className="btn">
                Réserver votre audit
              </Link>
              {/* <Link href="#approche" className="btn-outline">
                Découvrir notre accompagnement
              </Link> */}
            </div>
          </FadeUpAnimation>
          <FadeUpAnimation className="col-span-12 lg:col-span-5">
            <div className="rounded-medium shadow-box dark:bg-dark-200 bg-white p-8 lg:p-10">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold">Notre accompagnement pour réussir</h3>
              </div>
              <ul className="space-y-5">
                {axes.map((axe, i) => (
                  <li key={axe.title} className="flex items-start gap-4">
                    <span className="bg-accent/10 text-accent mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="leading-snug font-semibold">{axe.title}</p>
                      <p className="text-paragraph-light mt-1 text-sm leading-relaxed dark:text-white/60">{axe.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUpAnimation>
        </div>
      </div>
      <TrustBar />
    </section>
  )
}

export default Hero
