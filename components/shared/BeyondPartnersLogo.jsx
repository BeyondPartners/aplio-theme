import { cn } from '@/utils/cn'

/** Wordmark: thin "Beyond" + bold "Partners". Color from `.beyond-partners-wordmark` in common.css (theme accent). */
export default function BeyondPartnersLogo({ className }) {
  return (
    <span
      className={cn('beyond-partners-wordmark font-Inter inline-flex items-baseline tracking-[-0.02em]', className)}>
      <span className="font-light">Beyond</span>
      <span className="text-accent font-bold">Partners</span>
    </span>
  )
}
