import React from "react";
import Layout from "../components/Layout";

const ContactPage = () => {
  return (
    <Layout title="Contact">
      <div>
        <div className="mx-auto max-w-screen-md p-5">
          <div className="mb-16 text-center">
            <p className="font-regular mt-4 text-sm uppercase leading-7 text-gray-500">
              Contact
            </p>
            <h3 className="text-3xl font-extrabold leading-normal tracking-tight text-gray-900 sm:text-4xl">
              Get In <span className="text-blue-600">Touch</span>
            </h3>
          </div>

          <form className="w-full">
            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                  id="grid-first-name"
                  type="text"
                  placeholder="Auto"
                />
                <p className="text-xs italic text-red-500">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-last-name"
                  type="text"
                  placeholder="Eric"
                />
              </div>
            </div>
            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="w-full px-3">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-password"
                >
                  Email Address
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-email"
                  type="email"
                  placeholder="********@*****.**"
                />
              </div>
            </div>

            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="w-full px-3">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                ></textarea>
              </div>
              <div className="flex w-full justify-between px-3">
                <div className="md:flex md:items-center">
                  <label className="block font-bold text-gray-500">
                    <input className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm">Send me your newsletter!</span>
                  </label>
                </div>
                <button className="primary-button" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
