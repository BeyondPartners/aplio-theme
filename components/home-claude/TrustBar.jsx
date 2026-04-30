import FadeUpAnimation from '../animations/FadeUpAnimation'
import Clients from '../shared/Clients'

const TrustBar = () => {
  return (
    <section className="mt-14 bg-white py-10 max-md:mt-10 max-md:py-8 dark:bg-white">
      <div className="container">
        <FadeUpAnimation className="mx-auto mb-6 max-w-[880px] text-center">
          <p className="text-paragraph text-base font-medium">
            Nous les avons accompagnés dans la mise en place de l&apos;IA au coeur de leurs activités
          </p>
        </FadeUpAnimation>
        <Clients
          sectionTitle={false}
          sectionDetails={false}
          border={true}
          className="bg-transparent py-0 dark:bg-transparent"
        />
      </div>
    </section>
  )
}

export default TrustBar
