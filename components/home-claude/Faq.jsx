'use client'
import PropTypes from 'prop-types'
import { useRef, useState } from 'react'

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  const bodyRef = useRef(null)

  return (
    <div
      className={`group rounded-2xl transition-colors duration-200 ${
        isOpen
          ? 'bg-white shadow-[0_1px_3px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)]'
          : 'bg-[#f6f7f4] hover:bg-[#f1f3ee]'
      }`}>
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between gap-6 px-7 py-5 text-left max-md:gap-4 max-md:px-5 max-md:py-4"
        onClick={onClick}
        aria-expanded={isOpen}>
        <span className="text-paragraph text-[1.0625rem] leading-snug font-semibold">{question}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? 'bg-accent text-white' : 'text-paragraph bg-white group-hover:bg-white'
          }`}
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          aria-hidden>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1v12M1 7h12"
              stroke={isOpen ? '#ffffff' : 'currentColor'}
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        ref={bodyRef}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height: isOpen ? bodyRef.current?.scrollHeight : 0 }}>
        <p className="text-paragraph-light px-7 pb-6 text-[0.95rem] leading-relaxed max-md:px-5 max-md:pb-5">
          {answer}
        </p>
      </div>
    </div>
  )
}

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

const Faq = ({ anchorId, dict }) => {
  const { h2Lead, h2Accent, sub, items } = dict.faq
  const [activeIndex, setActiveIndex] = useState(null)
  const toggle = (i) => setActiveIndex((prev) => (prev === i ? null : i))

  return (
    <section id={anchorId} className="my-32 scroll-mt-32 bg-white max-md:my-20">
      <div className="container">
        <div className="mx-auto max-w-[760px]">
          <div className="mb-14 text-center max-md:mb-10">
            <span className="bg-accent/25 mb-10 inline-block h-[2px] w-16 rounded-full md:mb-12" aria-hidden />
            <h2 className="mb-4">
              {h2Lead}
              <span className="text-accent">{h2Accent}</span>
            </h2>
            <p className="text-paragraph-light mx-auto max-w-md text-base leading-relaxed">{sub}</p>
          </div>

          <div className="space-y-3">
            {items.map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} isOpen={activeIndex === i} onClick={() => toggle(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

Faq.propTypes = {
  anchorId: PropTypes.string.isRequired,
  dict: PropTypes.object.isRequired,
}

export default Faq
