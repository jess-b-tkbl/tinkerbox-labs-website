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
        <a href="/" aria-label="Tinkerbox Labs home" className="brand-wordmark text-(--color-ink) no-underline">
          Tinkerbox<span className="brand-wordmark__labs">Labs</span>
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
