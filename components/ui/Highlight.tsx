function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export default function Highlight({
  text,
  phrases,
  className = 'font-semibold text-gold',
}: {
  text: string
  phrases: string[]
  className?: string
}) {
  if (!phrases.length) return <>{text}</>

  const pattern = new RegExp(`(${phrases.map(escapeRegExp).join('|')})`, 'gi')
  const parts = text.split(pattern)

  return (
    <>
      {parts.map((part, i) =>
        phrases.some((p) => p.toLowerCase() === part.toLowerCase()) ? (
          <strong key={i} className={className}>{part}</strong>
        ) : (
          part
        )
      )}
    </>
  )
}
