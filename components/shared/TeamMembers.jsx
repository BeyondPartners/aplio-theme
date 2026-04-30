import { cn } from '@/utils/cn'
import Members from './Members'

const TeamMembers = ({ className = 'pt-150' }) => {
  return (
    <section
      className={cn(
        'dark:bg-dark-300 bg-white pb-[170px] max-md:overflow-hidden max-md:pt-20 max-md:pb-25',
        className,
      )}>
      <div className="container">
        <div className="relative z-10 mx-auto mb-12 max-w-[675px] text-center">
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
