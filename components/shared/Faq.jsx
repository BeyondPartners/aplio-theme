import FaQuestion from './FaQuestion'

const Faq = () => {
  return (
    <section className="dark:bg-dark-300 relative bg-white pb-150 max-xl:pb-24 max-md:overflow-hidden">
      <div className="relative container">
        <div className="mx-auto max-w-[min(100%,1079px)]">
          <div className="text-center">
            <p className="section-tagline mb-3">Faq’s</p>
            <h2 className="mb-12 max-md:text-[28px]">
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
