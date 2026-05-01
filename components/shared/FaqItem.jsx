'use client'
import { useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const FaqItem = ({ id, question, answer, isOpen, onClick }) => {
  const contentHeight = useRef()
  const hasAnswer = Boolean(answer?.trim?.())
  const panelId = `faq-panel-${id}`
  const buttonId = `faq-trigger-${id}`
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="faq-item rounded-medium dark:bg-dark-200 max-xl:border-borderColour dark:max-xl:border-borderColour-dark bg-white p-2.5 max-xl:rounded-none max-xl:border-b max-xl:bg-transparent max-xl:p-0 max-xl:first:border-t">
      <button
        type="button"
        id={buttonId}
        className={`faq-header dark:border-borderColour-dark dark:bg-dark-200 flex w-full items-center rounded border border-dashed border-gray-100 bg-white px-5 py-3 max-xl:rounded-none max-xl:border-0 max-xl:bg-transparent max-xl:px-0 max-xl:py-4 max-md:gap-x-2.5 ${hasAnswer ? 'cursor-pointer' : 'cursor-default'}`}
        onClick={hasAnswer ? onClick : undefined}
        aria-expanded={hasAnswer ? isOpen : undefined}
        aria-controls={hasAnswer ? panelId : undefined}>
        <span className="text-left text-xl font-semibold max-xl:text-base">Q. {question}</span>
        {hasAnswer &&
          (isOpen ? (
            <span className="ml-auto shrink-0" aria-hidden>
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
            <span className="ml-auto shrink-0" aria-hidden>
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
          ))}
      </button>
      {hasAnswer && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          ref={contentHeight}
          className={`faq-body overflow-hidden ${prefersReducedMotion ? '' : 'transition-[height] duration-200 ease-out'}`}
          style={
            !isOpen
              ? { height: '0px' }
              : prefersReducedMotion
                ? { height: 'auto' }
                : { height: contentHeight?.current?.scrollHeight }
          }>
          <p
            className={`text-paragraph-light px-6 pt-6 pb-3.5 max-xl:px-0 max-xl:pt-0 max-xl:pb-4 dark:text-[#A1A49D]`}>
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default FaqItem
