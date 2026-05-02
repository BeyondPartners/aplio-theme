import { cn } from '@/utils/cn'
import Members from './Members'

const TeamMembers = ({ className = 'mt-20 md:mt-24 lg:mt-28', anchorId }) => {
  return (
    <section
      id={anchorId}
      className={cn(
        'dark:bg-dark-300 mb-20 scroll-mt-32 bg-white max-md:overflow-hidden md:mb-24 lg:mb-28',
        className,
      )}>
      <div className="container">
        <div className="relative z-10 mx-auto mb-12 max-w-[675px] text-center">
          <span className="bg-accent/25 mb-5 inline-block h-[2px] w-16 rounded-full" aria-hidden />
          <p className="section-tagline">Notre équipe</p>
          <h2>Pédagogue et orientée résultats</h2>
        </div>

        <div className="relative z-10">
          <Members />
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
