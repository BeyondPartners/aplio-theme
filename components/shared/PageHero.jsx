import Link from 'next/link'
import FadeUpAnimation from '../animations/FadeUpAnimation'

const PageHero = ({ subtitle, title, paragraph, bullets, cta }) => {
  return (
    <section className="hero relative overflow-hidden pt-[240px] pb-[60px] max-lg:pt-150">
      <div className="container">
        <FadeUpAnimation className="mx-auto max-w-[948px] text-center">
          {subtitle && <p className="mb-4 font-medium uppercase">{subtitle}</p>}
          {title && <h1 className="mb-10 max-lg:mb-10" dangerouslySetInnerHTML={{ __html: title }}></h1>}
          {paragraph && <p className="mx-auto mb-8 max-w-[590px] max-lg:mb-6">{paragraph}</p>}
          {bullets && bullets.length > 0 && (
            <ul className="mx-auto mb-10 max-w-[590px] space-y-3 text-left max-lg:mb-8">
              {bullets.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1 shrink-0" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 9L7 13L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {cta && (
            <Link href={cta.href} className="btn">
              {cta.label}
            </Link>
          )}
        </FadeUpAnimation>
      </div>
    </section>
  )
}

export default PageHero
