import { cn } from '@/utils/cn'

/** Wordmark: thin "Beyond" + bold "Partners". Color from `.beyond-partners-wordmark` in common.css (theme accent). */
export default function BeyondPartnersLogo({ className }) {
  return (
    <span
      className={cn(
        'beyond-partners-wordmark font-Inter inline-flex items-center gap-[0.35em] tracking-[-0.02em]',
        className,
      )}>
      <img
        src="/images/beyond_partners_logo.png"
        alt=""
        width={64}
        height={64}
        className="h-[1.5em] w-auto shrink-0"
        aria-hidden
      />
      <span className="inline-flex items-baseline">
        <span className="font-light">Beyond</span>
        <span className="text-accent font-bold">Partners</span>
      </span>
    </span>
  )
}
