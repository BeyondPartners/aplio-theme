import FadeUpAnimation from '@/components/animations/FadeUpAnimation'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import NewsLetter from '@/components/shared/NewsLetter'

export const metadata = {
  title: 'Request Demo Page',
}

const RequestDemo = () => {
  return (
    <>
      <SecondaryNavbar />
      <main>
        <section className="relative overflow-hidden py-[200px] max-md:pt-25">
          <div className="absolute top-0 left-1/2 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <FadeUpAnimation className="relative container">
            <div className="mx-auto mb-12 max-w-[475px] text-center">
              <p className="section-tagline">Contact</p>

              <h2>Request A Demo</h2>
            </div>
            <div className="relative z-10 mx-auto max-w-[850px]">
              <div className="absolute top-1/2 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden">
                <div className="bg-primary-200/20 h-[442px] w-[442px] rounded-full blur-[145px]"></div>
                <div className="bg-primary-200/25 -ml-[170px] h-[442px] w-[442px] rounded-full blur-[145px]"></div>
                <div className="bg-primary-200/20 -ml-[170px] h-[442px] w-[442px] rounded-full blur-[145px]"></div>
              </div>
              <div className="rounded-medium shadow-nav dark:bg-dark-200 bg-white p-2.5">
                <div className="dark:border-borderColour-dark dark:bg-dark-200 rounded border border-dashed border-gray-100 bg-white p-12 max-md:p-5">
                  <form>
                    <div className="grid grid-cols-12 max-md:gap-y-10 md:gap-8 md:gap-x-12">
                      <div className="max-md:col-span-full md:col-span-6">
                        <label
                          htmlFor="username"
                          className="font-jakarta text-paragraph mb-2 block text-sm font-medium dark:text-white">
                          Your name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="username"
                          placeholder="Name"
                          className="border-borderColour text-paragraph-light placeholder:text-paragraph-light focus:border-primary dark:border-borderColour-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary block w-full rounded-[48px] border bg-white px-5 py-2.5 text-sm transition-all duration-300 outline-none"
                        />
                      </div>
                      <div className="max-md:col-span-full md:col-span-6">
                        <label
                          htmlFor="companyname"
                          className="font-jakarta text-paragraph mb-2 block text-sm font-medium dark:text-white">
                          Comapny name
                        </label>
                        <input
                          type="text"
                          name="company-name"
                          id="companyname"
                          placeholder="Company Name"
                          className="border-borderColour text-paragraph-light placeholder:text-paragraph-light focus:border-primary dark:border-borderColour-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary block w-full rounded-[48px] border bg-white px-5 py-2.5 text-sm transition-all duration-300 outline-none"
                        />
                      </div>
                      <div className="max-md:col-span-full md:col-span-6">
                        <label
                          htmlFor="contactno"
                          className="font-jakarta text-paragraph mb-2 block text-sm font-medium dark:text-white">
                          Contact No.
                        </label>
                        <input
                          type="text"
                          name="contact-number"
                          id="contactno"
                          placeholder="Contact Number"
                          className="border-borderColour text-paragraph-light placeholder:text-paragraph-light focus:border-primary dark:border-borderColour-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary block w-full rounded-[48px] border bg-white px-5 py-2.5 text-sm transition-all duration-300 outline-none"
                        />
                      </div>
                      <div className="max-md:col-span-full md:col-span-6">
                        <label
                          htmlFor="email"
                          className="font-jakarta text-paragraph mb-2 block text-sm font-medium dark:text-white">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="first-name"
                          id="email"
                          placeholder="Email"
                          className="border-borderColour text-paragraph-light placeholder:text-paragraph-light focus:border-primary dark:border-borderColour-dark dark:bg-dark-200 dark:focus:border-primary block w-full rounded-[48px] border bg-white px-5 py-2.5 text-sm transition-all duration-300 outline-none"
                        />
                      </div>
                      <div className="col-span-full">
                        <label
                          htmlFor="message"
                          className="font-jakarta text-paragraph mb-2 block text-sm font-medium dark:text-white">
                          Message
                        </label>
                        <textarea
                          name="first-name"
                          id="message"
                          rows="10"
                          className="border-borderColour text-paragraph-light placeholder:text-paragraph-light focus:border-primary dark:border-borderColour-dark dark:bg-dark-200 dark:focus:border-primary block w-full resize-none rounded border bg-white px-5 py-2.5 text-sm transition-all duration-300 outline-none"></textarea>
                      </div>
                      <div className="col-span-full mx-auto text-center">
                        <button className="btn">Request Now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </FadeUpAnimation>
        </section>
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default RequestDemo
