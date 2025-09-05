import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ImageCarousel({ images = [] }) {
  const [i, setI] = useState(0)
  const n = images.length

  const prev = () => setI((i - 1 + n) % n)
  const next = () => setI((i + 1) % n)

  // Keyboard arrows support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, n])

  if (n === 0) return null

  const { src, alt } = images[i] ?? {}


  return (
    <div className="w-full">
      {/* no border/rounded here; parent will clip */}
      <div className="relative overflow-hidden">
        <div className="aspect-[16/9] w-full flex items-center justify-center bg-black/10">
          <img src={src} alt={alt || ''} className="h-full w-full object-contain" loading="lazy" />
        </div>

        {/* overlay controls */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
          <Button
            variant="secondary" size="icon" onClick={prev}
            className="pointer-events-auto bg-white/80 hover:bg-white text-gray-900 shadow"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="secondary" size="icon" onClick={next}
            className="pointer-events-auto bg-white/80 hover:bg-white text-gray-900 shadow"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
