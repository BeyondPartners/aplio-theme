'use client'
import { useRef } from 'react'

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef()
  return (
    <div className="faq-item rounded-medium dark:bg-dark-200 bg-white p-2.5">
      <button
        className="faq-header dark:border-borderColour-dark dark:bg-dark-200 flex w-full cursor-pointer items-center rounded border border-dashed border-gray-100 bg-white px-5 py-3 max-md:gap-x-2.5"
        onClick={onClick}>
        <span className="text-left text-xl font-semibold">Q. {question}</span>
        {isOpen ? (
          <span className="ml-auto shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M6.25 10H13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                className="stroke-paragraph dark:stroke-primary"
              />
            </svg>
          </span>
        ) : (
          <span className="ml-auto shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M6.25 10H13.75M10 6.25V13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                className="stroke-paragraph dark:stroke-primary"
              />
            </svg>
          </span>
        )}
      </button>
      <div
        ref={contentHeight}
        className={`faq-body overflow-hidden`}
        style={isOpen ? { height: contentHeight?.current?.scrollHeight } : { height: '0px' }}>
        <p className={`text-paragraph-light px-6 pt-6 pb-3.5 dark:text-[#A1A49D]`}>{answer}</p>
      </div>
    </div>
  )
}

export default FaqItem
