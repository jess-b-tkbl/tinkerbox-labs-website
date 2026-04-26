import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <div className="mx-auto w-full max-w-[72rem] px-6">
          <Hero />
          <hr className="rule" />
          <About />
          <hr className="rule" />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
