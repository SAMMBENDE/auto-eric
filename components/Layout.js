import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { Store } from "../utils/Store";

const Layout = ({ title, children }) => {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <>
      <Head>
        <title>{title ? title + " -auto-eric" : "auto-eric"}</title>
        <meta name="description" content="Ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center justify-between px-4 shadow-md">
            <div>
              <Image
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c4a3.png"
                alt="Auto Eric logo"
                height="50"
                width="100"
              />
            </div>
            <Link href="/">
              <a className="text-lg font-bold">
                Auto<span className="text-blue-600">Eric</span>
              </a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-4">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="/login">
                <a className="p-4">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 items-center justify-center shadow-inner">
          <p>
            Copyright &copy;2022 Auto<span className="text-blue-600">Eric</span>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
