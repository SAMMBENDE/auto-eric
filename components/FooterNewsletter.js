import Link from "next/link";
import React from "react";

const FooterNewsletter = () => {
  return (
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
              <strong>Phone</strong>+33 605 643 424 <br />
              <strong>Email:</strong>info@autoeric.com
            </p>
          </div>
          <div className="mb-5">
            <h4 className="pb-4 font-semibold text-gray-800">Company</h4>
            <ul className="text-gray-500">
              <li>
                <Link href="/">
                  <a className=" cursor-pointer hover:text-yellow-800">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="cursor-pointer hover:text-yellow-800">About</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="cursor-pointer hover:text-yellow-800">
                    Pricing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="cursor-pointer hover:text-yellow-800">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="cursor-pointer hover:text-yellow-800">
                    Terms of Service
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <h4 className="pb-4 font-semibold text-gray-800">Usefull Links</h4>
            <ul>
              <li>
                <Link href="/">
                  <a className=" cursor-pointer  hover:text-yellow-800">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="cursor-pointer hover:text-yellow-800">
                    Support
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="cursor-pointer  hover:text-yellow-800">FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="cursor-pointer  hover:text-yellow-800">
                    What&apos;s new
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="cursor-pointer  hover:text-yellow-800">
                    Hot Deals
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
              our free weekly newsletter
            </p>
            <form className="flex flex-row flex-wrap">
              <input
                type="text"
                className="w-2/3 p-2 text-gray-500 focus:border-yellow-500"
                placeholder="email"
              />
              <button className="primary-button w-1/3 text-sm text-black">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNewsletter;
