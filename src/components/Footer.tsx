export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 px-6 py-6 pb-8 text-center text-[0.78rem] text-(--color-muted)">
      <div className="mx-auto max-w-[72rem]">
        <p className="m-0 leading-[1.7]">
          © {year} Tinkerbox Labs Ltd. All rights reserved. Registered in England and Wales |
          Company No: 17180233 |{' '}
          <a href="/legal.html" className="text-(--color-muted) no-underline hover:text-(--color-ink) hover:underline">
            Legal
          </a>{' '}
          ·{' '}
          <a href="/privacy.html" className="text-(--color-muted) no-underline hover:text-(--color-ink) hover:underline">
            Privacy
          </a>
        </p>
      </div>
    </footer>
  )
}
