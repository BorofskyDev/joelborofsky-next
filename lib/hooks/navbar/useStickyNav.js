import { useState, useEffect, useRef } from 'react'

export function useStickyNav() {
  const [isSticky, setIsSticky] = useState(false)
  const navbarRef = useRef(null)
  const bannerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current
      const banner = bannerRef.current
      if (!navbar || !banner) return

      const navPos = navbar.getBoundingClientRect().top
      const bannerBottomPos = banner.getBoundingClientRect().bottom

      if (navPos <= 0 && bannerBottomPos < 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { isSticky, navbarRef, bannerRef }
}
