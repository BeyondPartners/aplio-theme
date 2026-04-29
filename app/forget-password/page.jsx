import FadeUpAnimation from '@/components/animations/FadeUpAnimation'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import NewsLetter from '@/components/shared/NewsLetter'

export const metadata = {
  title: 'Forget Password',
}

const ForgetPassword = () => {
  return (
    <>
      <SecondaryNavbar />
      <main>
        <section className="relative mb-150 pt-[200px] max-md:pt-25">
          <div className="absolute top-25 left-1/2 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-30 md:hidden"></div>
          <FadeUpAnimation className="relative container">
            <div className="mx-auto mb-12 max-w-[475px] text-center">
              <p className="section-tagline">Reset Password</p>
              <h2>Provide a new password Password</h2>
            </div>
            <div className="relative z-10 mx-auto max-w-[510px]">
              <div className="absolute top-150 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
                <div className="bg-primary-200/30 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] rounded-full blur-[145px]"></div>
                <div className="bg-primary-200/50 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
                <div className="bg-primary-200/30 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
              </div>
              <div className="rounded-medium shadow-nav dark:bg-dark-200 bg-white p-2.5">
                <div className="dark:border-borderColour-dark dark:bg-dark-200 rounded border border-dashed border-gray-100 bg-white p-12 max-md:px-5 max-md:py-7">
                  <form>
                    <div className="grid grid-cols-12 gap-y-6">
                      <div className="col-span-full">
                        <label
                          htmlFor="newpassword"
                          className="font-jakarta text-paragraph mb-2 block text-sm font-medium dark:text-white">
                          New Password
                        </label>
                        <input
                          type="password"
                          name="newpassword"
                          id="newpassword"
                          placeholder="At least 8 character"
                          className="border-borderColour text-paragraph-light placeholder:text-paragraph-light focus:border-primary dark:border-borderColour-dark dark:bg-dark-200 dark:focus:border-primary block w-full rounded-[48px] border bg-white px-5 py-2.5 text-sm transition-all duration-300 outline-none"
                        />
                      </div>
                      <div className="col-span-full">
                        <label
                          htmlFor="confirmpassword"
                          className="font-jakarta text-paragraph mb-2 block text-sm font-medium dark:text-white">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          name="confirmpassword"
                          id="confirmpassword"
                          placeholder="At least 8 character"
                          className="border-borderColour text-paragraph-light placeholder:text-paragraph-light focus:border-primary dark:border-borderColour-dark dark:bg-dark-200 dark:focus:border-primary block w-full rounded-[48px] border bg-white px-5 py-2.5 text-sm transition-all duration-300 outline-none"
                        />
                      </div>
                      <div className="col-span-full">
                        <button className="btn block w-full">Reset Password</button>
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

export default ForgetPassword
