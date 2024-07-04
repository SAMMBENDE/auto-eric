import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'
import Newsletter from './Newsletter'

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 p-10 text-gray-800">
        <div className="max-w-12xl mx-auto">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
            <div className="mb-5">
              <h4 className="pb-4 text-2xl font-bold">
                Auto<span className="text-blue-800">Eric</span>
              </h4>
              <p className="text-gray-600">
                114 Av. Ambroisse Croizat <br />
                93150 Le Blanc Mesnil <br />
                France <br />
                <br />
                <strong>Phone:</strong> +33 605 643 424 <br />
                <strong>Email:</strong> info@autoeric.com
              </p>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 font-semibold text-gray-800">Company</h4>
              <ul className="text-gray-500">
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer hover:text-yellow-800"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="cursor-pointer hover:text-yellow-800"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sell-your-car"
                    className="cursor-pointer hover:text-yellow-800"
                  >
                    Sell Your Car
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-privacy"
                    className="cursor-pointer hover:text-yellow-800"
                  >
                    Terms & Privacy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 font-semibold text-gray-800">Useful Links</h4>
              <ul>
                <li>
                  <Link
                    href="/contact"
                    className="cursor-pointer hover:text-yellow-800"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="cursor-pointer hover:text-yellow-800"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="cursor-pointer hover:text-yellow-800"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="cursor-pointer hover:text-yellow-800"
                  >
                    What is New
                  </Link>
                </li>
              </ul>
            </div>
            <Newsletter />
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 px-10 text-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between py-4 sm:flex-row">
          <div className="text-center">
            <div>
              Copyright &copy;2022 <strong>AutoEric</strong>
            </div>
            <Link
              href="https://sammbende.github.io/My-personal-portfolio/"
              target="_blank"
              className="text-xs font-thin text-yellow-500"
            >
              Developer contact information
            </Link>
          </div>
        </div>
        <div className="mb-2 text-center text-sm">
          <Link
            href="https://instagram.com"
            target="_blank"
            className="mx-1 inline-block"
          >
            <FaInstagram className="h-8 w-8 cursor-pointer pt-1 text-yellow-700 hover:text-yellow-600" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="mx-1 inline-block"
          >
            <FaTwitter className="h-8 w-8 cursor-pointer pt-1 text-blue-400 hover:text-blue-300" />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            className="mx-1 inline-block"
          >
            <FaFacebook className="h-8 w-8 cursor-pointer pt-1 text-blue-500 hover:text-blue-400" />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            className="mx-1 inline-block"
          >
            <FaYoutube className="h-8 w-8 cursor-pointer rounded-full pt-1 text-red-500 hover:text-red-600" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Footer
