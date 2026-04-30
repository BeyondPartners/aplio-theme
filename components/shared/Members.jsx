import teamMembers from '@/data/team'

import Image from 'next/image'
import Link from 'next/link'
import FadeUpOneByOneAnimation from '../animations/FadeUpOneByOneAnimation'

const getMemberSummary = (member) => {
  if (member.designation?.trim()) return member.designation.trim()

  const plainText = member.details
    ?.replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  if (!plainText) return ''
  return plainText.length > 150 ? `${plainText.slice(0, 147)}...` : plainText
}

const Members = () => {
  const { teamData } = teamMembers
  const isTwoMembers = teamData.length === 2

  return (
    <div className={`grid gap-8 max-md:grid-cols-1 ${isTwoMembers ? 'mx-auto max-w-5xl grid-cols-2' : 'grid-cols-3'}`}>
      {teamData.map((member, i) => (
        <FadeUpOneByOneAnimation i={i} className="h-full" key={member.id}>
          <article className="flex h-full w-full max-w-[450px] flex-col items-stretch rounded-4xl bg-[#f8f8f8] p-3 sm:p-4">
            <Link
              href={`/teams/${member.id}`}
              className="rounded-medium overflow-hidden rounded-b-none bg-gray-100 dark:bg-[#30302F]">
              <Image
                src={member.image}
                alt="team member image"
                className="aspect-square h-full w-full object-cover transition-all duration-300"
                width={389}
                height={389}
              />
            </Link>

            <div className="flex w-full flex-col items-start gap-2 rounded-[1.25rem] rounded-t-none bg-white p-3 sm:gap-3 sm:p-4">
              <div className="w-full">
                <Link href={`/teams/${member.id}`}>
                  <h3 className="text-xl font-medium sm:text-2xl">{member.name}</h3>
                </Link>
              </div>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">{getMemberSummary(member)}</p>

              <div className="mt-1 w-full">
                <Link
                  href={member.linkedInLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="bg-primary inline-flex items-center rounded-[4px] px-[10px] py-[4px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white">
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

export default Members
