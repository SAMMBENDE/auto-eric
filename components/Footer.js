import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex h-1/2 w-full flex-col items-start justify-around bg-gray-50 p-20 md:flex-row ">
        <div className="p-5 ">
          <ul>
            <p className="pb-6 text-3xl font-bold text-gray-800">
              Auto<span className="text-blue-600">Eric</span>
            </p>
            <p className="pb-2 text-xl font-bold text-gray-400">
              Connect with us
            </p>
            <div className="flex gap-6">
              <Link href="https://nextjs.org/blog/next-13">
                <a target="_blank">
                  <FaInstagram className="cursor-pointer text-2xl text-yellow-600 hover:text-yellow-800" />
                </a>
              </Link>
              <Link href="https://twitter.com/AutoEric93">
                <a target="_blank">
                  <FaTwitter className="cursor-pointer text-2xl text-blue-400 hover:text-blue-600" />
                </a>
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100087795692693">
                <a target="_blank">
                  <FaFacebook className="cursor-pointer text-2xl text-blue-600 hover:text-blue-800" />
                </a>
              </Link>
              <Link href="https://www.youtube.com/channel/UCjUy_dOgHgsd6v3yB1f2cNg">
                <a target="_blank">
                  <FaYoutube className="cursor-pointer text-2xl text-red-500 hover:text-red-800" />
                </a>
              </Link>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="pb-4 text-xl font-bold text-gray-800">Services</p>
            <li>
              <Link href="/">
                <a className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-blue-600">
                  Stocks
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-blue-600">
                  Options
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-blue-600">
                  Hot Deals
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className=" pb-4 text-xl font-bold text-gray-800">Company</p>
            <li>
              <Link href="/">
                <a className="text-md cursor-pointer  pb-2 font-semibold text-gray-500 hover:text-blue-600">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-blue-600">
                  Vehicles
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-blue-600">
                  Pricing
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="pb-4 text-xl font-bold text-gray-800">Support</p>

            <li>
              <Link href="/">
                <a className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-blue-600">
                  What&apos;s new
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-blue-600">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-md cursor-pointer pb-2 font-semibold text-gray-500 hover:text-blue-600">
                  FAQ
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
