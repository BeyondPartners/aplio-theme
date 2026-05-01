import FaQuestion from './FaQuestion'
import FaqBackground from './FaqBackground'

const Faq = () => {
  return (
    <section className="relative pb-150 max-md:overflow-hidden">
      <div className="relative container">
        <FaqBackground />
        <div className="mx-auto max-w-[min(100%,1079px)]">
          <div className="text-center">
            <p className="section-tagline mb-3">Faq’s</p>
            <h2 className="mb-12">
              Frequently Asked <br />
              Question
            </h2>
          </div>
          <FaQuestion />
        </div>
      </div>
    </section>
  )
}

export default Faq
