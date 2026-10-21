import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '@/components/navigation/Navbar'
import Footer from './Footer'
import BackToTop from '@/components/ui/BackToTop'
import PageTransition from '@/components/animations/PageTransition'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo({ top: 0, left: 0 })
    }
  }, [pathname, hash])
  return null
}

export function PageLoader() {
  return (
    <div className="grid min-h-[60vh] place-items-center" role="status" aria-label="Loading page">
      <div className="size-9 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
    </div>
  )
}

export default function Layout() {
  const location = useLocation()
  return (
    <div className="flex min-h-dvh flex-col">
      <a href="#main" className="sr-only z-[60] rounded-md bg-gold px-4 py-2 font-semibold text-on-accent focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <PageTransition key={location.pathname}>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </PageTransition>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
