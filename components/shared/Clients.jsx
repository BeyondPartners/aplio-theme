import ClientList from '@/data/clientData'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import clientBorder from '../../public/images/clients/client-border.svg'

const Clients = ({
  sectionTitle = true,
  sectionDetails = true,
  border = true,
  className = 'pt-[140px] pb-[145px] max-lg:py-20 bg-white ',
  marqueeClassName,
  /** When set, replaces default clientData (e.g. Trust Bar partner logos). */
  items,
  marqueeItemClassName,
  /** Applied to every custom logo inner wrapper unless an item sets `logoPaddingClassName`. */
  defaultLogoPaddingClassName,
  /** Pause marquee when false (e.g. prefers-reduced-motion). */
  marqueePlay = true,
}) => {
  const { ClientData } = ClientList
  const list = items?.length ? items : ClientData
  const isCustomLogos = Boolean(items?.length)
  return (
    <section className={cn('client', className)}>
      <div className="container overflow-hidden max-lg:!px-0">
        <div className="px-10px mx-auto max-w-[550px] text-center max-lg:px-2.5">
          {sectionTitle && <h2 className="mb-10">The world&rsquo;s best companies trust aplio.</h2>}
          {sectionDetails && <p className="text-light mb-15">Trusted by thousands of companies across 50+ countries</p>}
        </div>

        <div
          className={cn(
            'relative overflow-hidden py-8 before:pointer-events-none before:absolute before:inset-y-0 before:-right-0.5 before:z-10 before:w-[120px] before:bg-gradient-to-l before:from-white before:from-[37.5%] after:pointer-events-none after:absolute after:inset-y-0 after:-left-0.5 after:z-10 after:w-[120px] after:bg-gradient-to-r after:from-white after:from-[37.5%]',
            marqueeClassName,
          )}>
          {border && (
            <div className="pointer-events-none absolute top-1/2 left-0 z-0 h-full w-full -translate-y-1/2">
              <Image src={clientBorder} alt="" width={1288} height={102} className="h-full w-full object-fill" />
            </div>
          )}

          <div className="relative z-10 overflow-hidden">
            <Marquee pauseOnHover play={marqueePlay} style={{ overflow: 'hidden' }}>
              {list.map((clients) => (
                <div
                  className={cn(
                    'marquee-content-list relative flex min-h-15 items-center justify-center overflow-hidden px-3',
                    isCustomLogos ? 'w-[260px] max-md:w-[220px]' : 'w-[215px]',
                    clients.wrapperClassName,
                    marqueeItemClassName,
                  )}
                  key={clients.id}>
                  {isCustomLogos ? (
                    <div
                      className={cn(
                        'flex h-full max-h-[56px] w-full max-w-[220px] translate-x-[-44px] items-center justify-center max-md:max-h-[48px] max-md:max-w-[190px] max-md:translate-x-[-29px]',
                        defaultLogoPaddingClassName,
                        clients.logoPaddingClassName,
                      )}>
                      <Image
                        src={clients.imageLight}
                        alt={clients.alt ?? 'Partner logo'}
                        className={cn(
                          'h-full max-h-full w-full max-w-full object-contain grayscale',
                          clients.logoClassName,
                        )}
                        width={200}
                        height={64}
                      />
                    </div>
                  ) : (
                    <>
                      <Image
                        src={clients.imageLight}
                        alt={clients.alt ?? 'Partner logo'}
                        className="inline-block h-auto w-auto"
                        width={120}
                        height={22}
                      />
                    </>
                  )}
                </div>
              ))}
            </Marquee>
          </div>
        </div>
        {sectionTitle && (
          <div className="mt-15 flex items-center justify-center">
            <Link href="/contact" className="btn-outline">
              Start your Journey
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Clients
