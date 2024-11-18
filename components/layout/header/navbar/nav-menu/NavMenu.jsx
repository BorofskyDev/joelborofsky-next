// components/nav-menu/NavMenu.jsx

'use client'

import { useAuth } from '@/lib/hooks/auth/useAuth'
import LogoutButton from '@/components/buttons/logout-button/LogoutButton'
import MenuLink from '@/components/links/menu-link/MenuLink'
import styles from './NavMenu.module.scss'

export default function NavMenu({ handleMenuToggle }) {
  const { user, isAdmin, loading } = useAuth()

  return (
    <ul className={styles.navMenu}>
      <MenuLink
        href='/'
        data-text='Home'
        content='Home'
        handleMenuToggle={handleMenuToggle}
      />
      <MenuLink
        href='/services'
        data-text='Services'
        content='Services'
        handleMenuToggle={handleMenuToggle}
      />
      <MenuLink
        href='/about'
        data-text='About'
        content='About'
        handleMenuToggle={handleMenuToggle}
      />
      <MenuLink
        href='/blog'
        data-text='Blog'
        content='Blog'
        handleMenuToggle={handleMenuToggle}
      />
      {/* <MenuLink
        href='/contact'
        data-text='Contact'
        content='Contact'
        handleMenuToggle={handleMenuToggle}
      /> */}

    

      {/* Conditional Rendering Based on Authentication Status */}
      {loading ? null : user ? (
        <>
          {isAdmin && (
            <MenuLink
              href='/admin'
              data-text='Admin'
              content='Admin'
              handleMenuToggle={handleMenuToggle}
            />
          )}
          {/* <li>
            <LogoutButton />
          </li> */}
        </>
      ) : (
        <MenuLink
          href='/login'
          data-text='Login'
          content='Login'
          handleMenuToggle={handleMenuToggle}
        />
      )}
    </ul>
  )
}
