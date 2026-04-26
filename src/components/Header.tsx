import { useEffect, useRef, useState } from 'react'

type NavItem = { label: string; href: string }

const NAV: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const indicatorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onLinkEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget
    const nav = navRef.current
    const indicator = indicatorRef.current
    if (!nav || !indicator) return
    const linkRect = link.getBoundingClientRect()
    const navRect = nav.getBoundingClientRect()
    indicator.style.transform = `translateX(${linkRect.left - navRect.left}px)`
    indicator.style.width = `${linkRect.width}px`
    indicator.style.opacity = '1'
  }
  const onNavLeave = () => {
    const indicator = indicatorRef.current
    if (indicator) indicator.style.opacity = '0'
  }

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="mx-auto flex w-full max-w-[72rem] items-center justify-between gap-4 px-6">
        <a href="/" aria-label="Tinkerbox Labs home" className="brand-link no-underline">
          <svg className="brand-logo" viewBox="0 0 170 200" aria-hidden="true">
            <path
              d="M 40 40 L 100 40 L 100 70 L 100 160 L 70 160 L 70 70 L 40 70 Z"
              fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round"
            />
            <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="3" strokeDasharray="6 5">
              <line x1="70" y1="40" x2="70" y2="70" />
              <line x1="70" y1="70" x2="100" y2="70" />
              <line x1="70" y1="100" x2="100" y2="100" />
              <line x1="70" y1="130" x2="100" y2="130" />
            </g>
            <polygon
              points="100,40 126,25 126,55 100,70"
              fill="rgba(255,255,255,0.6)" stroke="currentColor" strokeWidth="6" strokeLinejoin="round"
            />
            <path d="M 110 33 Q 119 22 125 26" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M 125 26 L 121 24 M 125 26 L 122 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="brand-wordmark">Tinkerbox Labs</span>
        </a>
        <nav
          ref={navRef}
          aria-label="Primary"
          className="relative flex flex-wrap gap-6 pb-1.5"
          onMouseLeave={onNavLeave}
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onMouseEnter={onLinkEnter}
              className="relative pb-1 text-[0.85rem] text-(--color-muted) no-underline transition-colors hover:text-(--color-ink)"
            >
              {item.label}
            </a>
          ))}
          <span ref={indicatorRef} aria-hidden="true" className="nav-indicator" />
        </nav>
      </div>
    </header>
  )
}
