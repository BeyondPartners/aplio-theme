const iconProps = {
  className: 'h-[18px] w-[18px] shrink-0 text-accent',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
)

const WarningIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden {...iconProps}>
    <rect x="5" y="3" width="14" height="18" rx="3" />
    <path d="M12 8v5M12 16h.01" />
  </svg>
)

const CollaborationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden {...iconProps}>
    <circle cx="9" cy="12" r="5" />
    <circle cx="15" cy="12" r="5" />
    <path d="M12 7v10" strokeDasharray="2 3" />
  </svg>
)

const StrategyIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden {...iconProps}>
    <path d="M6 20v-8M12 20V8M18 20v-12" />
  </svg>
)

const pains = [
  {
    title: 'Des heures perdues sur des tâches sans valeur ajoutée',
    desc: 'Comptes-rendus, emails clients, descriptifs techniques — vos collaborateurs passent leur temps sur de la production, pas de la création.',
    tag: 'Productivité',
    Icon: ClockIcon,
  },
  {
    title: "Personne ne sait vraiment par où commencer avec l'IA",
    desc: "Les outils sont nombreux, les usages flous. Sans cap clair, chacun improvise — ou n'essaie pas.",
    tag: 'Adoption',
    Icon: WarningIcon,
  },
  {
    title: 'Des pratiques dispersées, aucune capitalisation',
    desc: "L'IA est utilisée en solo et de façon disparate. Ce qui fonctionne pour l'un ne profite jamais à l'équipe.",
    tag: 'Collaboration',
    Icon: CollaborationIcon,
  },
  {
    title: 'Vous ne savez pas quels process transformer en priorité',
    desc: "Sans méthode, les gains potentiels restent théoriques et le passage à l'échelle ne se fait jamais.",
    tag: 'Stratégie',
    Icon: StrategyIcon,
  },
]

const PainPoints = () => {
  return (
    <section className="dark:bg-dark-300 relative mb-10 overflow-hidden bg-white pt-16 md:mb-12 md:pt-20">
      <div className="bg-accent/10 pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />

      <div className="container">
        <div className="mx-auto mb-12 max-w-[640px] text-center max-md:mb-10">
          {/* <p className="text-accent mb-4 text-xs font-semibold tracking-[0.15em] uppercase dark:text-white/90">
            Ce que nous entendons chaque semaine
          </p> */}
          <h2 className="mb-4">
            Vous vous <span className="text-accent">reconnaissez</span>&nbsp;?
          </h2>
          <p className="text-paragraph-light text-base leading-relaxed dark:text-white/60">
            Ces blocages sont ceux que nous entendons dans chaque cabinet que nous accompagnons.
          </p>
        </div>

        <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:gap-4">
          {pains.map((pain) => {
            const Icon = pain.Icon

            return (
              <li
                key={pain.title}
                className="dark:border-borderColour-dark dark:bg-dark-200 rounded-medium shadow-box min-w-0 border border-[#f1f1f1] bg-white">
                <div className="flex min-h-full flex-col gap-4 p-6 md:p-8">
                  <div className="bg-accent/10 text-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px]">
                    <Icon />
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="font-jakarta text-paragraph text-base leading-snug font-bold md:text-[1.05rem] lg:text-[1.1rem] dark:text-white">
                      {pain.title}
                    </p>
                    <p className="text-paragraph-light text-sm leading-relaxed md:text-[0.9rem] dark:text-white/80">
                      {pain.desc}
                    </p>
                  </div>

                  <span className="bg-accent/10 text-accent mt-auto inline-flex self-start rounded-full px-3 py-1 text-xs font-medium">
                    {pain.tag}
                  </span>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mx-auto mt-10 flex max-w-6xl justify-center max-md:mt-8">
          <a href="#approche" className="btn max-md:w-full">
            Voici comment on peut vous aider
          </a>
        </div>
      </div>
    </section>
  )
}

export default PainPoints
