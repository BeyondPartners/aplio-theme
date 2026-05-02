'use client'
import { useRef, useState } from 'react'

const faqs = [
  {
    q: 'Qu’est-ce que Claude Cowork concrètement ?',
    a: 'Claude Cowork est un accompagnement qui combine formation à l’assistant IA Claude et mise en œuvre dans vos process métier : rédaction, synthèses, qualification de dossiers, coordination — pour gagner du temps sur les tâches répétitives tout en gardant le contrôle sur les décisions professionnelles.',
  },
  {
    q: 'Est-ce adapté à un cabinet qui débute complètement avec l’IA ?',
    a: 'Oui. Le parcours part du niveau réel de l’équipe : vocabulaire clair, premiers cas concrets, progression par étapes. Aucun prérequis technique n’est exigé ; l’objectif est que chacun s’approprie des usages utiles au quotidien.',
  },
  {
    q: 'Comment identifier les bons cas d’usage dans notre cabinet ?',
    a: 'Nous cartographions vos flux avec vous, priorisons les tâches chronophages à faible risque, et testons rapidement sur vos vrais documents pour valider la pertinence avant de généraliser. Les cas d’usage émergent de votre activité, pas d’une liste générique.',
  },
  {
    q: 'Est-ce que ça s’intègre facilement dans nos outils et process existants ?',
    a: 'L’approche vise à enrichir ce que vous faites déjà : messagerie, documents, outils métier selon les cas. On s’appuie sur vos process actuels pour y brancher Claude de façon progressive, sans tout reconstruire d’un coup.',
  },
  {
    q: 'Claude Cowork est-il conforme au RGPD ?',
    a: 'L’accompagnement intègre les principes de minimisation des données, de finalité et de traçabilité. Nous vous aidons à cadrer les usages (données personnelles, sous-traitance, analyses d’impact si besoin) en cohérence avec votre rôle de responsable de traitement.',
  },
  {
    q: 'Qu’en est-il de la sécurité de nos données ?',
    a: 'Les bonnes pratiques couvrent la confidentialité des supports, la gestion des accès et le choix des environnements adaptés à votre politique interne. Les sujets sensibles sont traités avec vos référents IT ou juridiques au cas par cas.',
  },
  {
    q: 'Que se passe-t-il après la formation ?',
    a: 'Vous repartez avec une équipe autonome sur les usages validés et une feuille de route pour étendre l’adoption. Selon le format retenu, un suivi peut prolonger le dispositif : brief sur les évolutions pertinentes, mise à jour des bonnes pratiques et accès à un support pour les questions d’usage.',
  },
]

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  const bodyRef = useRef(null)

  return (
    <div
      className={`group rounded-2xl transition-colors duration-200 ${
        isOpen
          ? 'dark:bg-dark-200 bg-white shadow-[0_1px_3px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)]'
          : 'dark:bg-dark-200/60 dark:hover:bg-dark-200 bg-[#f6f7f4] hover:bg-[#f1f3ee]'
      }`}>
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between gap-6 px-7 py-5 text-left max-md:gap-4 max-md:px-5 max-md:py-4"
        onClick={onClick}
        aria-expanded={isOpen}>
        <span className="text-paragraph text-[1.0625rem] leading-snug font-semibold dark:text-white/90">
          {question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? 'bg-accent text-white'
              : 'text-paragraph dark:bg-dark-300 bg-white group-hover:bg-white dark:text-white/70'
          }`}
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          aria-hidden>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1v12M1 7h12"
              stroke={isOpen ? '#ffffff' : 'currentColor'}
              strokeWidth="1.6"
              strokeLinecap="round"
            />
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

const Faq = ({ anchorId }) => {
  const [activeIndex, setActiveIndex] = useState(null)
  const toggle = (i) => setActiveIndex((prev) => (prev === i ? null : i))

  return (
    <section id={anchorId} className="dark:bg-dark-300 my-32 scroll-mt-32 bg-white max-md:my-20">
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
              <FaqItem key={i} question={faq.q} answer={faq.a} isOpen={activeIndex === i} onClick={() => toggle(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
