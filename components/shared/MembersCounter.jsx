import CounterAnimation from '@/utils/CounterAnimation'

const MembersCounter = ({ border = true }) => {
  return (
    <section>
      <div className="relative container">
        <div
          className={`relative grid grid-cols-12 gap-x-5 gap-y-5 py-10 ${
            !border
              ? ''
              : "after:cover before:absolute before:top-0 before:left-1/2 before:h-0.5 before:w-full before:-translate-x-1/2 before:bg-[url('/images/payment/member-border.svg')] before:bg-cover before:bg-center before:bg-no-repeat after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-full after:-translate-x-1/2 after:bg-[url('/images/payment/member-border.svg')] after:bg-center after:bg-no-repeat max-md:before:hidden dark:before:bg-[url('/images/payment/member-border-dark.svg')] dark:after:bg-[url('/images/payment/member-border-dark.svg')]"
          }`}>
          <div className="max-lg:col-span-full lg:col-span-6">
            <div className="max-w-[550px]">
              <p className="section-tagline">Numbers</p>
              <h2>More than 10 years experience in this industry</h2>
            </div>
          </div>
          <div className="py-5 max-md:col-span-full md:col-span-6 lg:col-span-3">
            <div className="flex items-center">
              <div className="shadow-nav dark:bg-dark-200 mr-6 h-[110px] w-[110px] rounded-full bg-white p-2.5">
                <div className="dark:border-borderColour-dark flex h-[90px] w-[90px] items-center justify-center rounded-full border border-dashed border-gray-100">
                  <h3 className="text-primary dark:text-primary text-[28px] leading-none">
                    <span className="counterTrusted text-primary dark:text-primary text-[28px] leading-none">
                      <CounterAnimation number={95} />
                    </span>
                    %
                  </h3>
                </div>
              </div>
              <h3 className="leading-8">
                Trusted <br />
                by companies
              </h3>
            </div>
          </div>
          <div className="py-5 max-md:col-span-full md:col-span-6 lg:col-span-3">
            <div className="flex items-center">
              <div className="shadow-nav dark:bg-dark-200 mr-6 h-[110px] w-[110px] rounded-full bg-white p-2.5">
                <div className="dark:border-borderColour-dark flex h-[90px] w-[90px] items-center justify-center rounded-full border border-dashed border-gray-100">
                  <h3 className="text-primary dark:text-primary text-[28px] leading-none">
                    <span className="counterTrusted text-primary dark:text-primary text-[28px] leading-none">
                      <CounterAnimation number={85} />
                    </span>
                    M
                  </h3>
                </div>
              </div>
              <h3 className="leading-8">
                People <br />
                of aplio bank
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembersCounter
