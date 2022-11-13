import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const FooterNewsletter = () => {
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
                <strong>Phone:</strong>+33 605 643 424 <br />
                <strong>Email:</strong>info@autoeric.com
              </p>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 font-semibold text-gray-800">Company</h4>
              <ul className="text-gray-500">
                <li className="">
                  <Link href="/">
                    <a className=" cursor-pointer hover:text-yellow-800">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="cursor-pointer hover:text-yellow-800">
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <a className="cursor-pointer hover:text-yellow-800">
                      Pricing
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy">
                    <a className="cursor-pointer hover:text-yellow-800">
                      Privacy Policy
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service">
                    <a className="cursor-pointer hover:text-yellow-800">
                      Terms of Service
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 font-semibold text-gray-800">
                Usefull Links
              </h4>
              <ul>
                <li>
                  <Link href="/contact">
                    <a className=" cursor-pointer  hover:text-yellow-800">
                      Contact
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/support">
                    <a className="cursor-pointer hover:text-yellow-800">
                      Support
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a className="cursor-pointer  hover:text-yellow-800">FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/news">
                    <a className="cursor-pointer  hover:text-yellow-800">
                      What&apos;s new
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/deals">
                    <a className="cursor-pointer  hover:text-yellow-800">
                      Good Deals
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="pb-4 font-semibold text-gray-800">
                Join our Newsletter
              </h4>
              <p className="pb-4 text-gray-600">
                Be the first to know about good deals & new arrivals by joining
                our free weekly newsletter.
              </p>
              <form className="flex flex-row flex-wrap">
                <input
                  type="text"
                  className="w-2/3 p-2 text-gray-500 focus:border-yellow-500"
                  placeholder="email@example.com"
                />
                <button className="primary-button w-1/3 text-sm text-black">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 px-10 text-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between py-4 sm:flex-row">
          <div className="text-center">
            <div>
              Copyright &copy;2022 <strong>AutoEric</strong>{" "}
            </div>
            <div className="text-xs font-thin text-yellow-500">Sam Mbende</div>
          </div>
        </div>
        <div className="mb-2 text-center text-sm ">
          <Link href="https://nextjs.org/blog/next-13">
            <a target="_blank">
              <FaInstagram className="mx-1 inline-block h-8 w-8 cursor-pointer pt-1 text-yellow-700   hover:text-yellow-600" />
            </a>
          </Link>
          <Link href="https://twitter.com/AutoEric93">
            <a target="_blank">
              <FaTwitter className="mx-1 inline-block h-8 w-8 cursor-pointer  pt-1 text-blue-400 hover:text-blue-300" />
            </a>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100087795692693">
            <a target="_blank">
              <FaFacebook className="mx-1 inline-block h-8 w-8 cursor-pointer pt-1 text-blue-500 hover:text-blue-400" />
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UCjUy_dOgHgsd6v3yB1f2cNg">
            <a target="_blank">
              <FaYoutube className="mx-1 inline-block h-8 w-8 cursor-pointer rounded-full pt-1 text-red-500  hover:text-red-600" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FooterNewsletter;
