import { cn } from '@/utils/cn'

const TopBar = ({ sticky }) => {
  return (
    <div
      className={cn(
        'top-nav bg-primary fixed top-0 left-0 z-10 w-full origin-top py-2 text-center transition-all duration-500',
        sticky ? 'scale-y-0' : 'scale-y-100',
      )}>
      <p className="text-paragraph dark:text-paragraph font-medium max-lg:text-sm">
        Until recently, the prevailing view assumed
      </p>
    </div>
  )
}

export default TopBar
