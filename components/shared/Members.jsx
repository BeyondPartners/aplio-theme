import teamMembers from '@/data/team'

import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import FadeUpOneByOneAnimation from '../animations/FadeUpOneByOneAnimation'

const getMemberSummary = (member) => {
  if (member.designation?.trim()) return member.designation.trim()

  const plainText = member.details
    ?.replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  if (!plainText) return ''
  return plainText
}

const Members = ({ teamData: propTeamData }) => {
  const teamData = propTeamData ?? teamMembers.teamData
  const isTwoMembers = teamData.length === 2

  return (
    <div
      className={`grid gap-6 ${
        isTwoMembers
          ? 'max-xs:grid-cols-1 grid-cols-2 max-xl:grid-cols-2 xl:mx-auto xl:max-w-5xl'
          : 'max-xs:grid-cols-1 grid-cols-3 max-xl:grid-cols-2'
      }`}>
      {teamData.map((member, i) => (
        <FadeUpOneByOneAnimation i={i} className="h-full" key={member.id}>
          <article className="shadow-box rounded-medium flex h-full w-full max-w-[450px] flex-col items-stretch bg-white p-2.5 max-xl:mx-auto">
            <div className="rounded-medium bg-primary overflow-hidden rounded-b-none">
              <Image
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover transition-all duration-300 max-xl:aspect-4/3 xl:aspect-square"
                style={{
                  objectPosition: member.name === 'Justin Warambourg' ? '50% 30%' : undefined,
                  transform: member.name === 'Yasmina Attiallah' ? 'scale(1.2)' : undefined,
                }}
                width={389}
                height={389}
                loading="lazy"
              />
            </div>

            <div className="flex w-full flex-1 flex-col items-start gap-2 rounded rounded-t-none border border-t-0 border-dashed border-gray-100 bg-white p-4 sm:gap-3">
              <div className="w-full">
                <h3 className="text-xl font-medium sm:text-2xl">{member.name}</h3>
              </div>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">{getMemberSummary(member)}</p>

              <div className="mt-auto w-full pt-1">
                <Link
                  href={member.linkedInLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="bg-secondary/10 text-secondary hover:bg-secondary/20 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-3 py-2 transition-colors duration-200">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.29 87.88-48.29 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        </FadeUpOneByOneAnimation>
      ))}
    </div>
  )
}

Members.propTypes = {
  teamData: PropTypes.array,
}

export default Members
