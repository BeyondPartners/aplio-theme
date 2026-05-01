import Image from 'next/image'
import Link from 'next/link'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import ResultDashboardCard from './ResultDashboardCard'

const programBlocks = [
  {
    id: 'Phase 1',
    title: '1 journée de formation avec vos équipes',
    timeframe: 'Semaine 1',
    description:
      'À la fin de la journée, vos collaborateurs maîtrisent Claude Cowork et savent l’intégrer immédiatement dans leur quotidien.',
    pills: ['2 demi-journées'],
    cta: 'Voir le détail de la formation',
    imageSrc: '/images/photo_formation_6.jpg',
    imageAlt: 'Session de formation en présentiel avec une équipe en salle',
  },
  {
    id: 'Phase 2',
    title:
      '4 ateliers pratiques pour intégrer Claude Cowork dans vos process et construire la feuille de route de votre transformation IA',
    timeframe: '',
    description:
      'Des collaborateurs désignés travaillent avec nos formateurs pour intégrer Claude Cowork dans vos 3 process les plus chronophages, établissent une feuille de route à 90 jours — et deviennent ainsi les moteurs de votre transformation IA.',
    pills: ['4 demi-journées', '1 par semaine'],
    cta: 'Voir le détail des ateliers',
    imageSrc: '/images/photo_formation_7.jpg',
    imageAlt: 'Session de formation en présentiel avec une équipe en salle',
  },
]

const continuousSupport = [
  {
    title: 'Support prioritaire en moins de 24h',
    description:
      'Une question ou un blocage avec Claude Cowork ? Nos formateurs vous apporte une réponse sous 24 heures.',
  },
  {
    title: 'Accès aux bonnes pratiques',
    description:
      'Nos retours d’expériences issus de nombreuses entreprises accompagnées sont mis à disposition de vos équipes.',
  },
]

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9L7 13L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const NewsletterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="3.5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M1 6l7 4.5L15 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const RefreshIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 2.5A6.5 6.5 0 1 1 3 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M1 3l2 2.5 2.5-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 1.5L2 4v4c0 3.3 2.5 5.6 6 6.5 3.5-.9 6-3.2 6-6.5V4L8 1.5z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M5.5 8l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const lifelongBenefits = [
  {
    id: 'brief',
    Icon: NewsletterIcon,
    title: 'Brief mensuel personnalisé',
    description:
      'Les nouveautés Claude pertinentes pour votre contexte métier, filtrées et synthétisées — sans bruit, sans perte de temps.',
  },
  {
    id: 'skills',
    Icon: RefreshIcon,
    title: 'Base de skills Claude mise à jour en continu',
    description: 'Vos équipes retrouvent toujours les bonnes pratiques actuelles — jamais des méthodes déjà obsolètes.',
  },
  {
    id: 'access',
    Icon: ShieldIcon,
    title: 'Accès prioritaire à nos experts',
    description:
      'Une question sur un usage avancé ou une évolution de Claude ? Nos formateurs vous répondent en priorité.',
  },
]

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 7H11M11 7L7 3M11 7L7 11"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ImagePlaceholder = ({ label, src, alt = '' }) => (
  <div
    className={`dark:border-borderColour-dark bg-gray dark:bg-dark-200 relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border border-gray-100 ${src ? '' : 'border-dashed'}`}>
    {src ? (
      <>
        <Image src={src} alt={alt} fill className="z-0 object-cover" sizes="(max-width: 768px) 100vw, 800px" />
        <div className="pointer-events-none absolute inset-0 z-1 bg-blue-950/20" aria-hidden />
      </>
    ) : (
      <>
        <div className="bg-accent/10 absolute -top-16 -right-10 h-48 w-48 rounded-full blur-3xl" />
        <div className="bg-accent-100/70 absolute -bottom-16 -left-10 h-48 w-48 rounded-full blur-3xl" />
        <span className="text-paragraph-light relative text-xs font-medium tracking-wide uppercase">{label}</span>
      </>
    )}
  </div>
)

const Offer = () => {
  return (
    <section className="dark:bg-dark-300 relative scroll-mt-28 bg-white pb-150 md:scroll-mt-32">
      <div className="container">
        <FadeUpAnimation className="mx-auto mb-16 max-w-[940px] text-center max-md:mb-12">
          <span className="bg-accent/25 my-10 inline-block h-[2px] w-16 rounded-full md:my-12" aria-hidden />
          <p
            className="font-jakarta mb-16 text-[26px] leading-[1.38] font-medium text-[#30343a] md:mb-20 md:text-[32px] dark:text-white/90"
            id="approche">
            Nous accompagnons les bureaux d&apos;architectes ambitieux qui savent que l&apos;IA va transformer en
            profondeur les façons de travailler — et qui veulent prendre une longueur d&apos;avance.
          </p>
        </FadeUpAnimation>
        <div className="grid grid-cols-15 gap-x-12 gap-y-12 lg:gap-x-20">
          <div className="col-span-15 xl:col-span-7">
            <FadeUpAnimation className="xl:sticky xl:top-52">
              <h2 className="mb-6">Enclenchez votre stratégie IA en 4 semaines</h2>
              <p className="text-paragraph mb-3 dark:text-white/80">
                L&apos;objectif : maîtriser Claude Cowork et rendre vos équipes autonomes pour porter cette
                transformation IA durablement.
              </p>
              <p className="text-paragraph-light mb-10 dark:text-white/60">
                À l&apos;issue des 4 semaines, vous disposez d&apos;une équipe formée, de process augmentés par
                l&apos;IA et d&apos;une feuille de route construite avec votre équipe.
              </p>
              <Link href="#" className="btn">
                Réservez votre audit
              </Link>
              {/* <p className="text-paragraph-light mt-4 text-sm">Audit 30 minutes · Sans engagement</p> */}
            </FadeUpAnimation>
          </div>

          <div className="col-span-15 xl:col-span-8">
            <div className="space-y-18 max-md:space-y-15">
              {programBlocks.map((block) => (
                <FadeUpAnimation className="rounded-medium shadow-box dark:bg-dark-200 bg-white p-2.5" key={block.id}>
                  <article className="dark:border-borderColour-dark rounded border border-dashed border-gray-100 p-6">
                    <div className="mb-6">
                      <div className="mb-5 flex items-start justify-between gap-3">
                        <span className="bg-accent/10 text-accent inline-flex min-h-10 shrink-0 items-center justify-center rounded-full px-4 text-sm leading-none font-semibold whitespace-nowrap">
                          <span className="bg-accent mr-2 inline-block h-2 w-2 rounded-full" />
                          {block.id}
                        </span>
                        {block.timeframe && (
                          <span className="dark:border-borderColour-dark border-borderColour text-paragraph-light inline-flex items-center rounded-full border px-4 py-1.5 text-sm whitespace-nowrap">
                            {block.timeframe}
                          </span>
                        )}
                      </div>
                      <h3 className="mb-4">{block.title}</h3>
                      <p className="mb-5">{block.description}</p>
                      <div className="mb-6 flex flex-wrap gap-2.5">
                        {block.pills.map((pill) => (
                          <span
                            className="dark:border-secondary/35 dark:bg-secondary/15 dark:text-secondary border-secondary/25 bg-secondary/10 text-secondary inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm font-medium"
                            key={pill}>
                            {pill}
                          </span>
                        ))}
                      </div>
                      <ImagePlaceholder
                        label={`Visuel ${block.id} · à venir`}
                        src={block.imageSrc}
                        alt={block.imageAlt ?? ''}
                      />
                    </div>
                    <div className="dark:border-borderColour-dark border-borderColour mt-6 flex items-center border-t pt-5">
                      <button
                        className="text-secondary hover:text-secondary/80 dark:text-secondary dark:hover:text-secondary/70 inline-flex items-center gap-2 text-sm font-semibold"
                        type="button">
                        {block.cta}
                        <ArrowIcon />
                      </button>
                    </div>
                  </article>
                </FadeUpAnimation>
              ))}

              <FadeUpAnimation className="rounded-medium shadow-box dark:bg-dark-200 bg-white p-2.5">
                <article className="dark:border-borderColour-dark rounded border border-dashed border-gray-100 p-8 max-lg:p-6">
                  <div className="mb-5 flex items-center gap-4">
                    <span className="bg-accent/10 text-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <CheckIcon />
                    </span>
                    <p className="text-paragraph-light text-xs font-medium tracking-wider uppercase">
                      Accompagnement continu pendant 4 semaines
                    </p>
                  </div>
                  <h3 className="mb-3">Au-delà de la formation et des ateliers</h3>
                  <p className="text-paragraph-light mb-6 dark:text-white/60">
                    Vous bénéficiez d&apos;un accompagnement continu pour ancrer durablement les usages.
                  </p>
                  <ul className="dark:divide-borderColour-dark divide-y divide-dashed divide-gray-100">
                    {continuousSupport.map((item) => (
                      <li className="flex items-start gap-4 py-4 first:pt-0 last:pb-0" key={item.title}>
                        <span className="text-accent mt-1 shrink-0">
                          <CheckIcon />
                        </span>
                        <div>
                          <p className="leading-snug font-semibold">{item.title}</p>
                          <p className="text-paragraph-light mt-1 text-sm dark:text-white/60">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeUpAnimation>

              <FadeUpAnimation>
                <ResultDashboardCard />
              </FadeUpAnimation>
            </div>
          </div>
        </div>

        <FadeUpAnimation className="dark:border-borderColour-dark mt-20 border-t border-dashed border-gray-100 pt-16 max-md:mt-14 max-md:pt-12">
          <div className="mb-10 max-w-xl max-md:mb-8">
            <h2 className="mb-3">Et après ce programme ?</h2>
            <p className="text-paragraph-light dark:text-white/60">
              Ce programme n&apos;est que le début de votre transformation IA. Nous restons à vos côtés comme partenaire
              IA de confiance.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1 max-lg:gap-4">
            {lifelongBenefits.map((benefit) => (
              <div key={benefit.id} className="rounded-medium shadow-box dark:bg-dark-200 bg-white p-2.5">
                <div className="dark:border-borderColour-dark flex h-full flex-col rounded border border-dashed border-gray-100 p-6">
                  <span className="bg-secondary/10 text-secondary mb-5 flex h-10 w-10 items-center justify-center rounded-full">
                    <benefit.Icon />
                  </span>
                  <p className="mb-2 leading-snug font-semibold">{benefit.title}</p>
                  <p className="text-paragraph-light text-sm leading-relaxed dark:text-white/60">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUpAnimation>
      </div>
    </section>
  )
}

export default Offer
