'use client'

import { useEffect, useState } from 'react'

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    const target = new Date('12/31/2025 23:59:59').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      const format = (num) => String(num).padStart(2, '0')

      setTimeLeft({
        days: format(days),
        hours: format(hours),
        minutes: format(minutes),
        seconds: format(seconds),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="col-span-12 mx-auto md:-mt-150">
      <div className="shadow-box dark:bg-dark-200 relative z-50 mb-8 inline-block rounded-[230px] bg-white p-2.5">
        <div className="dark:border-borderColour-dark relative flex h-full w-[630px] items-center justify-center rounded-[210px] border border-dashed border-gray-100 py-2.5 text-center max-md:w-full">
          <div className="bg-primary-200/40 dark:bg-primary-200/10 absolute top-1/2 left-1/2 h-20 w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[145px]"></div>
          <h2 className="text-[64px] max-md:px-2.5 max-md:text-[24px]">
            {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Timer
