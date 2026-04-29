'use client'
const PricingBackground = () => {
  return (
    <>
      <div className="absolute top-150 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
        <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] rounded-full blur-[145px]"></div>
        <div className="bg-primary-200/25 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
        <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
      </div>
      <div className="absolute top-25 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[url('/images/price-gradient.png')] bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
    </>
  )
}

export default PricingBackground
