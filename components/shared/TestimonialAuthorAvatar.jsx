'use client'

import Image from 'next/image'
import { useState } from 'react'

/** Pastel fills + muted text — full class strings so JIT includes them */
const FALLBACK_PALETTE = [
  { bg: 'bg-slate-200', fg: 'text-slate-700' },
  { bg: 'bg-slate-100', fg: 'text-slate-800' },
  { bg: 'bg-sky-100', fg: 'text-sky-800' },
  { bg: 'bg-blue-100', fg: 'text-blue-800' },
  { bg: 'bg-cyan-100', fg: 'text-cyan-800' },
  { bg: 'bg-teal-100', fg: 'text-teal-800' },
  { bg: 'bg-emerald-100', fg: 'text-emerald-800' },
  { bg: 'bg-green-100', fg: 'text-green-800' },
  { bg: 'bg-stone-200', fg: 'text-stone-700' },
  { bg: 'bg-stone-100', fg: 'text-stone-800' },
  { bg: 'bg-indigo-100', fg: 'text-indigo-800' },
  { bg: 'bg-violet-100', fg: 'text-violet-800' },
  { bg: 'bg-neutral-200', fg: 'text-neutral-700' },
  { bg: 'bg-zinc-200', fg: 'text-zinc-700' },
  { bg: 'bg-gray-200', fg: 'text-gray-700' },
  { bg: 'bg-rose-100', fg: 'text-rose-800' },
]

function hashName(name) {
  const s = name || ''
  let h = 0
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

function authorInitial(name) {
  const trimmed = (name || '').trim()
  for (const ch of trimmed) {
    if (/[A-Za-zÀ-ÿ]/.test(ch)) return ch.toUpperCase()
  }
  const first = trimmed.charAt(0)
  return first ? first.toUpperCase() : '?'
}

/**
 * Author headshot, or a circular fallback (solid color + initial) when there is no URL or the image errors.
 */
export default function TestimonialAuthorAvatar({
  image,
  name,
  className = 'size-14 shrink-0 rounded-full object-cover',
}) {
  const [failed, setFailed] = useState(false)
  const hasImage = Boolean(image && String(image).trim())
  const showFallback = !hasImage || failed
  const { bg, fg } = FALLBACK_PALETTE[hashName(name) % FALLBACK_PALETTE.length]
  const letter = authorInitial(name)

  if (showFallback) {
    return (
      <div className={`flex items-center justify-center text-lg font-semibold ${bg} ${fg} ${className}`} aria-hidden>
        {letter}
      </div>
    )
  }

  return (
    <Image
      src={image}
      alt=""
      className={className}
      width={56}
      height={56}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
