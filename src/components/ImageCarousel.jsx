import { useEffect, useRef, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ImageCarousel({ images = [], initialIndex = 0, autoPlay = false, intervalMs = 5000, showDots = true }) {
  const [i, setI] = useState(initialIndex)
  const n = images.length
  const containerRef = useRef(null)
  const touchStartX = useRef(null)
  const userInteracted = useRef(false)

  const clamp = useCallback((v) => ((v % n) + n) % n, [n])
  const prev = useCallback(() => setI((x) => clamp(x - 1)), [clamp])
  const next = useCallback(() => setI((x) => clamp(x + 1)), [clamp])
  const goTo = useCallback((idx) => setI(clamp(idx)), [clamp])

  // Keyboard support
  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    const onKey = (e) => {
      if (!(document.activeElement && root.contains(document.activeElement))) return
      if (e.key === "ArrowLeft") { userInteracted.current = true; prev() }
      if (e.key === "ArrowRight") { userInteracted.current = true; next() }
      if (e.key === "Home") { userInteracted.current = true; goTo(0) }
      if (e.key === "End") { userInteracted.current = true; goTo(n - 1) }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, prev, goTo, n])

  // Touch swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    userInteracted.current = true
    const dx = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    const THRESH = 40
    if (dx > THRESH) prev()
    else if (dx < -THRESH) next()
  }

  // Autoplay
  useEffect(() => {
    if (!autoPlay || n <= 1) return
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    if (prefersReduced || userInteracted.current) return
    const id = window.setInterval(() => setI((x) => clamp(x + 1)), intervalMs)
    return () => window.clearInterval(id)
  }, [autoPlay, n, intervalMs, clamp, i])

  if (n === 0) return null
  const { src, alt, caption } = images[i] ?? {}

  return (
    <div
      ref={containerRef}
      className="w-full select-none"
      role="group"
      aria-roledescription="carousel"
      aria-label="Image carousel"
    >
      <p className="sr-only" aria-live="polite">
        Slide {i + 1} of {n}{caption ? ` — ${caption}` : ""}
      </p>

      <div
        className="relative overflow-hidden rounded-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="aspect-video sm:aspect-[16/9] w-full bg-black/5 flex items-center justify-center">
          <img
            src={src}
            alt={alt || ""}
            className="h-full w-full object-contain"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 100vw, 800px"
          />
        </div>

        {/* overlay controls */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
          <Button
            variant="secondary"
            size="icon"
            onClick={() => { userInteracted.current = true; prev() }}
            className="pointer-events-auto bg-white/85 hover:bg-white shadow h-10 w-10 sm:h-11 sm:w-11"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={() => { userInteracted.current = true; next() }}
            className="pointer-events-auto bg-white/85 hover:bg-white shadow h-10 w-10 sm:h-11 sm:w-11"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/45 text-white text-xs sm:text-sm px-3 py-2">
            <span className="line-clamp-2">{caption}</span>
          </div>
        )}
      </div>

      {showDots && n > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {images.map((_, idx) => {
            const active = idx === i
            return (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={active ? "true" : undefined}
                onClick={() => { userInteracted.current = true; goTo(idx) }}
                className={[
                  "h-2.5 w-2.5 rounded-full transition-opacity",
                  active ? "opacity-100" : "opacity-40 hover:opacity-70",
                  "bg-gray-900 dark:bg-gray-100"
                ].join(" ")}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
