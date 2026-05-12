import { cn } from '@/utils/cn'
import PropTypes from 'prop-types'

/** Wordmark: medium "Beyond" + bold "Partners". Color from `.beyond-partners-wordmark` in common.css (theme accent). */
export default function BeyondPartnersLogo({ className, showIcon = true }) {
  return (
    <span className={cn('beyond-partners-wordmark font-playfair inline-flex items-center', className)}>
      {showIcon ? (
        <img
          src="/images/beyond_partners_logo.png"
          alt=""
          width={64}
          height={64}
          className="h-[1.5em] w-auto shrink-0"
          aria-hidden
        />
      ) : null}
      <span className="font-playfair inline-flex items-baseline text-[24px]">
        <span className="font-playfair font-medium">Beyond</span>
        <span className="font-playfair text-accent font-bold">Partners</span>
      </span>
    </span>
  )
}

BeyondPartnersLogo.propTypes = {
  className: PropTypes.string,
  showIcon: PropTypes.bool,
}
