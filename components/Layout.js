import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Cookies from 'js-cookie'
import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { Store } from '../utils/Store'
import { signOut, useSession } from 'next-auth/react'
import 'react-toastify/dist/ReactToastify.css'
import { Menu } from '@headlessui/react'
import DropdownLink from './DropdownLink'
import Footer from './Footer'

const Layout = ({ title, children }) => {
  const { status, data: session } = useSession()

  const { state, dispatch } = useContext(Store)
  const { cart } = state

  const [cartItemsCount, setcartItemsCount] = useState(0)
  useEffect(() => {
    setcartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0)) // Fix hydration problem after refresh in homepage caused by the badge
  }, [cart.cartItems])

  const logoutClickHandler = () => {
    Cookies.remove('cart')
    dispatch({ type: 'CART_RESET' })
    signOut({ callbackUrl: '/login' })
  }

  return (
    <>
      <Head>
        <title>{title ? title + ' - auto-eric' : 'auto-eric'}</title>
        <meta name="description" content="auto-eric" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center justify-between px-4 shadow-md">
            <div>
              <Image
                src="/images/logo2.png"
                alt="Auto Eric logo"
                height={50}
                width={80}
              />
            </div>
            <Link href="/">
              <span className="text-lg font-bold">
                Auto<span className="text-blue-600">Eric</span>
              </span>
            </Link>

            <div>
              <Link href="/cart">
                <span className="cursor-pointer p-4">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </span>
              </Link>

              {status === 'loading' ? (
                'loading'
              ) : session?.user ? ( // Menu below comes from headlessUI
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-40 bg-white text-sm shadow-lg">
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link justify-center"
                        href="/profile"
                      >
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link justify-center"
                          href="/admin/dashboard"
                        >
                          Admin Dashboard
                        </DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link justify-center"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <span
                        className="dropdown-link mb-3 cursor-pointer justify-center"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </span>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">
                  <span className="cursor-pointer p-4">Login</span>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
