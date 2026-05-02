import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import ContactForm from '@/components/shared/ContactForm'
import NewsLetter from '@/components/shared/NewsLetter'
import TeamMember from '@/components/team/TeamMember'
import teamMembers from '@/data/team'
import Link from 'next/link'

export async function generateMetadata(props) {
  const params = await props.params
  const { teamData } = teamMembers
  const teams = teamData.find((career) => career.id == params.id)
  return {
    title: teams?.name,
  }
}

export async function generateStaticParams() {
  const { teamData } = teamMembers
  return teamData.map((team) => ({
    id: team.id.toString(),
  }))
}

const TeamSingle = async (props) => {
  const { teamData } = teamMembers
  const teamId = (await props.params).id
  const data = teamData.find((post) => post.id == teamId)

  return (
    <>
      <SecondaryNavbar />
      <main>
        <div className="relative container mb-150 pt-[250px] max-md:pt-150">
          <div className="absolute top-[200px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="relative mx-auto grid max-w-[800px] auto-rows-min grid-cols-2 gap-20 max-md:grid-cols-1">
            <div className="absolute top-[37%] left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
              <div className="bg-primary-200/30 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] rounded-full blur-[145px]"></div>
              <div className="bg-primary-200/50 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
              <div className="bg-primary-200/30 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
            </div>

            <TeamMember image={data.image} />

            <div>
              <div className="mb-12">
                <p className="section-tagline">{data.designation}r</p>
                <h1 className="mb-12 text-[48px] font-bold">{data.name}</h1>
                <div className="singlePage">
                  <p dangerouslySetInnerHTML={{ __html: data.details }}></p>
                </div>
              </div>
              <div className="mb-6 flex items-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="27"
                    height="27"
                    rx="13.5"
                    fill=""
                    className="fill-[#E6FFB1] dark:fill-[#212220]"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="27"
                    height="27"
                    rx="13.5"
                    stroke=""
                    className="stroke-paragraph dark:stroke-primary"
                  />
                  <path
                    d="M20.9295 13.0312C20.4031 9.21192 16.8759 6.54067 13.0479 7.06591C9.21986 7.58741 6.54251 11.1103 7.06519 14.9296C7.49387 18.0473 9.94937 20.5047 13.0742 20.9399C13.3863 20.9812 13.6984 21 14.0143 21C15.2815 21.0037 16.5262 20.6586 17.6129 20.002C17.9326 19.8107 18.0378 19.3942 17.8423 19.0753C17.6505 18.7564 17.2331 18.6514 16.9135 18.8465C15.3454 19.7844 13.4202 19.9082 11.7468 19.1766C10.0735 18.445 8.85887 16.9481 8.4866 15.1622C8.11433 13.3764 8.63325 11.523 9.87792 10.1874C11.1226 8.85175 12.9388 8.2027 14.7513 8.44281C16.4322 8.66417 17.9213 9.62837 18.8087 11.069C19.6961 12.5097 19.8917 14.2693 19.3352 15.8676C19.1885 16.2577 18.8125 16.5091 18.3988 16.5016C17.8423 16.5016 17.3911 16.0514 17.3911 15.4961V11.3204C17.3911 10.949 17.0865 10.6451 16.7142 10.6451C16.3419 10.6451 16.0373 10.949 16.0373 11.3204V11.3279C14.9882 10.54 13.5781 10.4237 12.4199 11.0353C11.258 11.6468 10.5585 12.8736 10.6187 14.1793C10.6789 15.4886 11.4949 16.6404 12.7057 17.1432C13.9203 17.6421 15.3116 17.3983 16.2818 16.5166C16.6728 17.3307 17.4964 17.8485 18.3988 17.8522C19.3916 17.8635 20.2828 17.2445 20.6174 16.3103C20.9784 15.256 21.0875 14.1305 20.9295 13.0312ZM14.003 16.0476C13.1833 16.0476 12.4425 15.5524 12.1266 14.7983C11.8107 14.0404 11.9875 13.17 12.5666 12.5923C13.1456 12.0145 14.0218 11.8382 14.7776 12.1533C15.5372 12.4685 16.0298 13.2076 16.0298 14.0254C16.0336 15.1397 15.1236 16.0476 14.003 16.0476Z"
                    fill=""
                    className="fill-paragraph dark:fill-primary"
                  />
                </svg>

                <Link href={`mailto:${data.email}`}> {data.email} </Link>
              </div>
              <div className="mb-12 flex items-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="27.0034"
                    height="27"
                    rx="13.5"
                    fill=""
                    className="fill-[#E6FFB1] dark:fill-[#212220]"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="27.0034"
                    height="27"
                    rx="13.5"
                    stroke=""
                    className="stroke-paragraph dark:stroke-primary"
                  />
                  <path
                    d="M8.43025 15.0039C8.89669 14.5374 9.51185 14.2805 10.1743 14.2805C10.8368 14.2805 11.452 14.5374 11.9184 15.0039L12.2699 15.3554C12.3578 15.4433 12.4727 15.4906 12.6012 15.4906C12.7296 15.4906 12.8445 15.4433 12.9324 15.3554L15.3593 12.9285C15.4471 12.8407 15.4945 12.7257 15.4945 12.5973C15.4945 12.4689 15.4471 12.3539 15.3593 12.2661L15.0077 11.9145C14.0478 10.9546 14.0478 9.38629 15.0077 8.42636L15.7108 7.72332C16.1772 7.25688 16.7991 7 17.4549 7C18.1174 7 18.7325 7.25688 19.199 7.72332L19.7262 8.2506C20.8416 9.35925 21.2472 11.0155 20.8619 12.9083C20.5036 14.6929 19.4829 16.4978 17.9889 17.9918C16.1029 19.8778 13.7098 21 11.5737 21C10.2284 21 9.07921 20.5606 8.24773 19.7291L7.72044 19.2018C6.76052 18.2419 6.76052 16.6736 7.72044 15.7137L8.43025 15.0039ZM8.80205 18.1202L9.32933 18.6475C9.87013 19.1883 10.6475 19.4722 11.5804 19.4722C13.3177 19.4722 15.3187 18.5123 16.9208 16.9102C18.2052 15.6258 19.0773 14.098 19.3747 12.6041C19.6519 11.2318 19.395 10.0623 18.6514 9.32545L18.1241 8.79817C17.9484 8.6224 17.7118 8.521 17.4549 8.521C17.198 8.521 16.9614 8.61564 16.7856 8.79817L16.0826 9.50121C15.7108 9.87301 15.7108 10.4746 16.0826 10.8397L16.4341 11.1912C16.8059 11.5698 17.0155 12.07 17.0155 12.5973C17.0155 13.1313 16.8127 13.6248 16.4341 14.0034L14.0073 16.4302C13.6355 16.802 13.1352 17.0116 12.6012 17.0116C12.0671 17.0116 11.5737 16.802 11.1951 16.4302L10.8436 16.0787C10.6678 15.9029 10.4312 15.8015 10.1743 15.8015C9.91745 15.8015 9.68085 15.8962 9.50509 16.0787L8.80205 16.7817C8.43025 17.1535 8.43025 17.7552 8.80205 18.1202Z"
                    fill=""
                    className="fill-paragraph dark:fill-primary"
                  />
                </svg>

                <Link href={`tel:${data.phone.split(' ').join('')}`}> {data.phone} </Link>
              </div>
              <ul className="flex items-center gap-x-2.5 border-t border-dashed border-gray-200 pt-12 dark:border-gray-600">
                <li>
                  <Link
                    href={data.linkedInLink}
                    className="group transition-colors duration-500 hover:transition-colors hover:duration-500">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill=""
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:fill-primary fill-transparent transition-colors duration-500 group-hover:transition-colors group-hover:duration-500">
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        stroke=""
                        className="stroke-gray-100 dark:stroke-[#464745]"
                      />
                      <path
                        d="M19.9997 11C16.3576 11 13.0763 13.1938 11.6841 16.5547C10.2919 19.9156 11.0607 23.7875 13.6341 26.3609C16.2076 28.9344 20.0794 29.7031 23.4404 28.3109C26.806 26.9234 28.9997 23.6422 28.9997 20C28.9997 15.0312 24.9685 11 19.9997 11ZM17.3841 24.7391H15.4201V18.4109H17.3841V24.7391ZM16.3997 17.5484C15.9357 17.5484 15.5185 17.2719 15.3404 16.8453C15.1622 16.4187 15.256 15.9266 15.5841 15.5984C15.9076 15.2703 16.3997 15.1719 16.8263 15.3453C17.2529 15.5187 17.5341 15.9359 17.5388 16.3953C17.5388 17.0328 17.0326 17.5437 16.3997 17.5484ZM24.7388 24.7391H22.7747V21.6594C22.7747 20.9234 22.7607 19.9859 21.7529 19.9859C20.7451 19.9859 20.5669 20.7828 20.5669 21.6078V24.7391H18.6122V18.4109H20.4966V19.2734H20.5247C20.7872 18.7766 21.4247 18.2516 22.381 18.2516C24.3685 18.2516 24.7341 19.5594 24.7341 21.2609V24.7391H24.7388Z"
                        fill=""
                        className="fill-paragraph dark:group-hover:fill-paragraph transition-colors duration-500 group-hover:transition-colors group-hover:duration-500 dark:fill-[#7D807B]"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ContactForm />
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default TeamSingle
