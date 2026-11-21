import { useEffect, useState } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'

/** Types and deletes a list of words. Shows the first word only if the visitor prefers reduced motion. */
export default function TypingText({
  words,
  typeSpeed = 70,
  deleteSpeed = 40,
  pause = 1600,
  className,
}) {
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const word = words[index] ?? ''

  useEffect(() => {
    if (reduced || words.length === 0) return undefined

    let timeout
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      timeout = setTimeout(() => {
        setDeleting(false)
        setIndex((current) => (current + 1) % words.length)
      }, 250)
    } else {
      timeout = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? deleteSpeed : typeSpeed,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, word, words.length, reduced, pause, typeSpeed, deleteSpeed])

  if (words.length === 0) return null

  return (
    <span className={className}>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true">
        {reduced ? words[0] : text}
        {!reduced && <span className="caret" />}
      </span>
    </span>
  )
}
