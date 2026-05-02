import FadeUpAnimation from '../animations/FadeUpAnimation'
import FaQuestion from './FaQuestion'

const Faq = ({ anchorId }) => {
  return (
    <section
      id={anchorId}
      className="dark:bg-dark-300 relative my-20 scroll-mt-32 bg-white max-md:overflow-hidden md:my-28">
      <div className="container">
        <div className="mx-auto max-w-[min(100%,800px)]">
          <FadeUpAnimation className="mb-12 text-center max-md:mb-10">
            <span className="bg-accent/25 mb-6 inline-block h-[2px] w-16 rounded-full" aria-hidden />
            <h2 className="mb-4 max-md:text-[28px]">
              Questions <span className="text-accent">fréquentes</span>
            </h2>
            <p className="text-paragraph-light mx-auto text-base leading-relaxed dark:text-white/60">
              Tout ce que vous voulez savoir avant de démarrer votre transformation IA.
            </p>
          </FadeUpAnimation>
          <FaQuestion />
        </div>
      </div>
    </section>
  )
}

export default Faq
