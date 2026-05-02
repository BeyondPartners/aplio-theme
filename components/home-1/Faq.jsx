import Questions from './Questions'

const Faq = () => {
  return (
    <section className="bg-gray dark:bg-dark relative overflow-hidden pt-150 pb-[130px] max-md:py-20">
      <div className="relative z-10 container">
        <div className="1xl:gap-x-24 grid grid-cols-2 gap-10 max-lg:grid-cols-1">
          <div>
            <p className="section-tagline">Faq&rsquo;s</p>
            <h2 className="mb-8">
              Frequently Asked <br />
              Question
            </h2>
            <p>
              Neque accumsan dolor nullam commodo. Odio massa nisi ullamcorper suspendisse amet amet. Aenean suspendisse
              eget est pulvinar. Fames eget eget nascetur ornare
            </p>
          </div>
          <Questions />
        </div>
      </div>
    </section>
  )
}

export default Faq
