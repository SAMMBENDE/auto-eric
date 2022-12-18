import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <Layout title="About us">
      {/* Section 1  */}
      <section className="w-full bg-white px-8 text-gray-700"></section>

      {/* Section 2  */}
      <section className="bg-white px-2 py-32 md:px-0">
        <div className="container mx-auto max-w-6xl items-center px-8 xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full space-y-6 pb-6 sm:max-w-md sm:pr-5 md:space-y-4 md:pb-0 lg:max-w-lg lg:space-y-8 lg:pr-0 xl:space-y-9">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">
                    With Awesome Cars at Shocking Prices
                  </span>
                  <span className="block text-blue-600 xl:inline">
                    Ride like a Boss.
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md md:max-w-3xl lg:text-xl">
                  We carry a full line of quality used cars as well as car
                  accessories, decorations and other services.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link href="/">
                    <a className="transistion mb-3 flex w-full items-center rounded-md bg-yellow-400 px-6 py-3 text-lg text-black delay-150 duration-300 ease-in-out  hover:scale-110 hover:bg-yellow-400 hover:text-white sm:mb-0 sm:w-auto">
                      See Our Collection
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="h-auto w-full overflow-hidden rounded-md shadow-xl sm:rounded-xl ">
                <figure>
                  <Image
                    src="/images/eric.jpg"
                    alt=""
                    width="300"
                    height="300"
                  ></Image>
                  <figcaption>
                    <strong>CEO</strong>
                    &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; ACHU M.
                    Eric
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3  */}
      <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
        <div className="mx-auto box-border flex max-w-7xl flex-col content-center items-center border-0 border-solid border-gray-300 px-8 leading-6 text-black md:flex-row lg:px-16">
          <div className="relative mt-5 mb-4 -ml-5 box-border w-full max-w-md border-solid bg-contain bg-no-repeat px-4 text-center md:ml-0 md:mt-0 md:w-1/2 md:max-w-none lg:mb-0 xl:pl-10">
            <Image
              src="/images/about.jpg"
              alt=""
              width="600"
              height="400"
            ></Image>
          </div>

          <div className="order-first box-border w-full border-solid text-black md:order-none md:w-1/2 md:pl-10">
            <h2 className="m-0 border-0 border-gray-300 text-xl font-semibold leading-tight md:text-2xl lg:text-3xl">
              Your Best Car Dealership.
            </h2>
            <p className="m-0 border-0 border-gray-300 pt-4 pb-8 leading-7 text-gray-700 sm:pr-12 lg:text-lg xl:pr-32">
              We build an atmosphere that creates productivity and make every
              deal count.
            </p>
            <ul className="m-0 border-0 border-gray-300 p-0 leading-6">
              <li className="relative box-border border-solid py-1 pl-0 text-left text-gray-500">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 text-white">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                We focus on the details
              </li>
              <li className="relative box-border border-solid py-1 pl-0 text-left text-gray-500">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 text-white">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Our pride shows in our quality services
              </li>
              <li className="relative box-border border-solid py-1 pl-0 text-left text-gray-500">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 text-white">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Why spend more, when you got us
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-2 box-border flex max-w-7xl flex-col content-center items-center border-0 border-solid border-gray-300 px-8 leading-6 text-black md:mt-20 md:flex-row lg:px-16 xl:mt-0">
          <div className="box-border w-full border-solid text-black md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 border-0 border-gray-300 text-xl font-semibold leading-tight md:text-2xl lg:text-3xl">
              The supreme Driving Experience.
            </h2>
            <p className="m-0 border-0 border-gray-300 pt-4 pb-8 leading-7 text-gray-700 sm:pr-10 lg:text-lg">
              Save time and money with our revolutionary services. We are the
              leaders in the industry
            </p>
            <ul className="m-0 border-0 border-gray-300 p-0 leading-6">
              <li className="relative box-border border-solid py-1 pl-0 text-left text-gray-500">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 text-white">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Just imagine what we can do for you
              </li>
              <li className="relative box-border border-solid py-1 pl-0 text-left text-gray-500">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 text-white">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Detailed analytics for your car
              </li>
              <li className="relative box-border border-solid py-1 pl-0 text-left text-gray-500">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 text-white">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Some awesome integrations
              </li>
            </ul>
          </div>

          <div className="relative mt-10 mb-4 box-border w-full max-w-md border-solid bg-contain bg-no-repeat px-4 text-center md:mt-0 md:w-1/2 md:max-w-none lg:mb-0">
            <Image
              src="/images/interior4.avif"
              alt=""
              width="400"
              height="300"
            ></Image>
          </div>
        </div>
      </section>

      {/* Section 4  */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-6xl items-center px-4 sm:px-20 md:px-32 lg:px-16">
          <div className="-mx-3 flex flex-wrap items-center">
            <div className="lg:order-0 order-1 w-full px-3 lg:w-1/2">
              <div className="w-full lg:max-w-md">
                <h2 className="font-heading mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  We provide some special services you need
                </h2>
                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                  If you&apos;ve got the time, we&apos;ve got the shine. We take
                  care of the vehicle that takes care of you everyday
                </p>
                <ul>
                  <li className="flex items-center space-x-4 py-2 xl:py-3">
                    <svg
                      className="h-8 w-8 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      ></path>
                    </svg>
                    <span className="font-medium text-gray-500">
                      Clean inside. Clean outside.
                    </span>
                  </li>
                  <li className="flex items-center space-x-4 py-2 xl:py-3">
                    <svg
                      className="h-8 w-8 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      ></path>
                    </svg>
                    <span className="font-medium text-gray-500">
                      Out of the Box Technical Control
                    </span>
                  </li>
                  <li className="flex items-center space-x-4 py-2 xl:py-3">
                    <svg
                      className="h-8 w-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                    <span className="font-medium text-gray-500">
                      100% Protection and Security for Your Car
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-0 mb-12 w-full px-3 lg:order-1 lg:mb-0 lg:w-1/2">
              <Image
                src="/images/engine.avif"
                alt=""
                width="600"
                height="400"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5  */}
      <section className="min-w-screen flex items-center justify-center bg-white py-20">
        <div className="bg-white px-16">
          <div className="container mx-auto flex flex-col items-start lg:items-center">
            <p className="relative flex w-full items-start justify-start text-lg font-bold uppercase tracking-wider text-blue-600 lg:items-center lg:justify-center">
              Do not just take our word for it
            </p>

            <h2 className="relative flex w-full max-w-3xl items-start justify-start text-5xl font-bold lg:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute right-0 -mt-2 -mr-16 hidden h-12 w-12 text-gray-200 lg:inline-block"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              See what others say about us
            </h2>
            <div className="mt-6 block h-0.5 w-full max-w-lg rounded-full bg-purple-100"></div>

            <div className="mt-12 mb-4 w-full items-center justify-center lg:flex">
              <div className="mb-12 flex h-auto w-full flex-col items-start justify-start lg:mb-0 lg:w-1/3">
                <div className="flex items-center justify-center">
                  <div className="mr-4 h-16 w-16 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxw"
                      alt=""
                      width="300"
                      height="300"
                    ></Image>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">Jean-Bosco</h4>
                    <p className="text-gray-600">CEO of Startup</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">
                  This is a no-brainer if you want a car to take you to the next
                  level. If you are looking for the ultimate dealer, this is it.
                </blockquote>
              </div>
              <div className="mx-0 mb-12 flex h-auto w-full flex-col items-start justify-start border-l border-r border-transparent px-0 lg:mx-8 lg:mb-0 lg:w-1/3 lg:border-gray-200 lg:px-8">
                <div className="flex items-center justify-center">
                  <div className="mr-4 h-16 w-16 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxw"
                      alt=""
                      width="300"
                      height="300"
                    ></Image>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">Yohan P</h4>
                    <p className="text-gray-600">CTO V-Games</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">
                  Thanks for your extra services. My life is so much easier.
                  Thanks for making such a great sacrifices.
                </blockquote>
              </div>
              <div className="flex h-auto w-full flex-col items-start justify-start lg:w-1/3">
                <div className="flex items-center justify-center">
                  <div className="mr-4 h-16 w-16 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxw"
                      alt=""
                      width="300"
                      height="300"
                    ></Image>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">Sam Mbende</h4>
                    <p className="text-gray-600">CEO BOA</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">
                  The best dealership at shocking prices. I got exactly what I
                  was looking for. I would highly recommend this to anyone.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUsPage;
