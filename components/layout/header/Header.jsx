'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStickyNav } from '@/lib/hooks/navbar/useStickyNav'
import Banner from './banner/Banner'
import NavBar from './navbar/Navbar'
import styles from './Header.module.scss'
import MobileMenuToggle from './navbar/mobile-menu-toggle/MobileMenuToggle'
import MobileNavMenu from './navbar/mobile-nav-menu/MobileNavMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isSticky, navbarRef, bannerRef } = useStickyNav()

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className={styles.header}>
      <Banner ref={bannerRef} />
      <MobileMenuToggle
        isMenuOpen={isMenuOpen}
        handleMenuToggle={handleMenuToggle}
      />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial='closed' animate='open' exit='closed'>
            <MobileNavMenu handleMenuToggle={handleMenuToggle} />
          </motion.div>
        )}
      </AnimatePresence>

      <NavBar isSticky={isSticky} navbarRef={navbarRef} />
    </header>
  )
}

