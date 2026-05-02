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
    <div className="faq-item rounded-medium dark:bg-dark-200 bg-white p-2.5 max-xl:rounded-none max-xl:border-b max-xl:border-gray-200 max-xl:bg-transparent max-xl:p-0 max-xl:first:border-t dark:max-xl:border-gray-600">
      <button
        type="button"
        id={buttonId}
        className={`faq-header dark:bg-dark-200 flex w-full items-center gap-4 rounded border border-dashed border-gray-100 bg-white px-5 py-4 max-xl:rounded-none max-xl:border-0 max-xl:bg-transparent max-xl:px-0 max-xl:py-4 dark:border-gray-600 ${hasAnswer ? 'cursor-pointer' : 'cursor-default'}`}
        onClick={hasAnswer ? onClick : undefined}
        aria-expanded={hasAnswer ? isOpen : undefined}
        aria-controls={hasAnswer ? panelId : undefined}>
        <span
          className="bg-accent/10 text-accent flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
          aria-hidden>
          Q
        </span>
        <span className="text-left text-base leading-snug font-semibold max-xl:text-[15px]">{question}</span>
        {hasAnswer && (
          <span
            className={`ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
              isOpen ? 'bg-accent text-white' : 'text-accent'
            }`}
            aria-hidden
            style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              className="shrink-0">
              <path
                d="M6.25 10H13.75M10 6.25V13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                stroke={isOpen ? '#ffffff' : 'currentColor'}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        )}
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
          <p className="border-accent/10 bg-accent/4 text-paragraph-light mx-5 mt-2 mb-5 rounded-lg border px-5 py-3.5 text-sm leading-relaxed max-xl:mx-0 max-xl:mt-1 max-xl:mb-4 max-xl:px-4 dark:border-white/10 dark:bg-white/4 dark:text-[#A1A49D]">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default FaqItem
