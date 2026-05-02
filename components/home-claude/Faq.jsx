'use client'
import { useRef, useState } from 'react'

const faqs = [
  {
    q: "Qu'est-ce que Claude Cowork apporte concrètement à un cabinet d'architecture ?",
    a: "Claude Cowork aide vos équipes à accélérer les tâches chronophages — comptes-rendus, emails clients, descriptifs techniques, synthèses — pour libérer du temps sur la conception, la coordination et la relation client.",
  },
  {
    q: 'Comment se déroule le programme de 4 semaines ?',
    a: "La semaine 1 est une journée de formation pour toute l'équipe. Les semaines 2 à 4 sont des ateliers pratiques avec des collaborateurs désignés, qui intègrent Claude Cowork dans vos 3 process les plus chronophages.",
  },
  {
    q: 'Quels sont les livrables à la fin du programme ?',
    a: "Vous repartez avec une équipe formée et autonome, 3 process augmentés par Claude Cowork, une feuille de route prête à exécuter sur 90 jours, et des spécialistes IA internes capables de porter l'adoption dans la durée.",
  },
  {
    q: 'Combien de temps nos équipes doivent-elles y consacrer ?',
    a: "Une journée pour la formation initiale, puis 4 demi-journées d'ateliers réparties sur 3 semaines pour les collaborateurs désignés. L'investissement reste compatible avec une activité de production normale.",
  },
  {
    q: 'Que se passe-t-il après les 4 semaines ?',
    a: "Vous bénéficiez d'un accompagnement continu : support prioritaire sous 24h, accès à notre base de skills mise à jour, et brief mensuel personnalisé sur les évolutions de Claude pertinentes pour votre activité.",
  },
]

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  const bodyRef = useRef(null)

  return (
    <div
      className={`group rounded-2xl transition-colors duration-200 ${
        isOpen
          ? 'bg-white shadow-[0_1px_3px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)] dark:bg-dark-200'
          : 'bg-[#f6f7f4] hover:bg-[#f1f3ee] dark:bg-dark-200/60 dark:hover:bg-dark-200'
      }`}>
      <button
        className="flex w-full items-center justify-between gap-6 px-7 py-5 text-left max-md:gap-4 max-md:px-5 max-md:py-4"
        onClick={onClick}
        aria-expanded={isOpen}>
        <span className="text-paragraph text-[1.0625rem] leading-snug font-semibold dark:text-white/90">
          {question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? 'bg-accent text-white' : 'text-paragraph bg-white group-hover:bg-white dark:bg-dark-300 dark:text-white/70'
          }`}
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          aria-hidden>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        ref={bodyRef}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height: isOpen ? bodyRef.current?.scrollHeight : 0 }}>
        <p className="text-paragraph-light px-7 pb-6 text-[0.95rem] leading-relaxed max-md:px-5 max-md:pb-5 dark:text-white/65">
          {answer}
        </p>
      </div>
    </div>
  )
}

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const toggle = (i) => setActiveIndex((prev) => (prev === i ? null : i))

  return (
    <section className="dark:bg-dark-300 bg-white py-150 max-md:py-20">
      <div className="container">
        <div className="mx-auto max-w-[760px]">
          <div className="mb-14 text-center max-md:mb-10">
            <span className="bg-accent/25 mb-10 inline-block h-[2px] w-16 rounded-full md:mb-12" aria-hidden />
            <h2 className="mb-4">
              Questions <span className="text-accent">fréquentes</span>
            </h2>
            <p className="text-paragraph-light mx-auto max-w-md text-base leading-relaxed dark:text-white/60">
              Tout ce que vous voulez savoir avant de démarrer votre transformation IA.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={activeIndex === i}
                onClick={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
