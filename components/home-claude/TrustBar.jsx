import FadeUpAnimation from '../animations/FadeUpAnimation'
import Clients from '../shared/Clients'

/**
 * Trust bar logos. Per entry:
 * - `logoClassName` — Tailwind on the image (e.g. `scale-110`) to tweak size.
 * - `logoPaddingClassName` — padding inside the logo slot (e.g. `px-4`, `px-6 py-2`) to inset and visually shrink the mark.
 * On `<Clients />`, `defaultLogoPaddingClassName` applies the same padding to every custom logo unless an entry sets `logoPaddingClassName`.
 */
const TRUST_BAR_LOGOS = [
  {
    id: 'fit-routine',
    imageLight: '/images/fit_routine_logo.png',
    imageDark: '/images/fit_routine_logo.png',
    alt: 'FIT-ROUTINE',
    logoClassName: 'scale-85',
  },
  {
    id: 'kilome',
    imageLight: '/images/kilome_logo.png',
    imageDark: '/images/kilome_logo.png',
    alt: 'Kilome',
    logoClassName: 'scale-60',
  },
  {
    id: 'made-in-courtage',
    imageLight: '/images/made_in_courtage_logo.png',
    imageDark: '/images/made_in_courtage_logo.png',
    alt: 'Made in Courtage',
    logoClassName: 'scale-35',
  },
  {
    id: 'zen-financement',
    imageLight: '/images/zen_financement_logo.png',
    imageDark: '/images/zen_financement_logo.png',
    alt: 'zen Financement',
    logoClassName: 'scale-35',
  },
  {
    id: 'skills-up',
    imageLight: '/images/skillsup_logo_rectangle.png',
    imageDark: '/images/skillsup_logo_rectangle.png',
    alt: 'Skills Up',
    logoClassName: 'scale-75',
  },
]

const TrustBar = () => {
  return (
    <section className="bg-white dark:bg-white">
      <FadeUpAnimation className="container">
        <Clients
          sectionTitle={false}
          sectionDetails={false}
          border={true}
          className="bg-transparent py-0 dark:bg-transparent"
          marqueeClassName="py-3 max-md:py-2"
          defaultLogoPaddingClassName="px-5 max-md:px-4"
          items={TRUST_BAR_LOGOS}
        />
      </FadeUpAnimation>
    </section>
  )
}

export default TrustBar
