import React from "react";
import Layout from "../components/Layout";

const frequentlyAskedQuestions = () => {
  return (
    <Layout title="Frequently Asked Questions">
      <div className="mt-12 text-center text-3xl font-extrabold leading-normal tracking-tight text-gray-900 sm:text-4xl">
        Frequently Asked Questions
      </div>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="w-full max-w-screen-sm">
          <button className="group w-full border-b-2 border-gray-300 pb-6 text-left focus:outline-none">
            <div className="text-lg font-semibold">
              Q: What does the warranty cover and how long is it?
            </div>
            <div className="mt-3 hidden text-gray-700 group-focus:flex">
              <p>
                This depends on the age of the car and its kilometric coverage.
              </p>
            </div>
          </button>
          <button className="group mt-6 w-full border-b-2 border-gray-300 pb-6 text-left focus:outline-none">
            <div className="text-lg font-semibold">
              Q: What are acceptable payment terms?
            </div>
            <div className="mt-3 hidden text-gray-700 group-focus:flex">
              <p>
                We prefer payment methods that are safe and can be verified. We
                accept personal check, debit card, credit card, cashier’s check
                and even cash. We make sure to issue you a bona fide receipt.
              </p>
            </div>
          </button>
          <button className="group mt-6 w-full border-b-2 border-gray-300 pb-6 text-left focus:outline-none">
            <div className="text-lg font-semibold">
              Q: Have they serviced the car? How long ago was it last
              maintained?
            </div>
            <div className="mt-3 hidden text-gray-700 group-focus:flex">
              <p>
                Basically, and to the best of our knowledge, we let our clients
                know every bit of information about their bargain. Amongst
                others is the information regarding the vehicle&apos;s service
                history.
              </p>
            </div>
          </button>
          <button className="group mt-6 w-full border-b-2 border-gray-300 pb-6 text-left focus:outline-none">
            <div className="text-lg font-semibold">
              Q: Can you take it for an extended test drive?
            </div>
            <div className="mt-3 hidden text-gray-700 group-focus:flex">
              <p>
                Under certain conditions, we do allow extended personal tests.
                One of our principles is to make sure the car you buy fits your
                needs and your lifestyle. We ensure you are comfortable with the
                vehicle and can take it for an extended test drive, or keep it
                overnight.
              </p>
            </div>
          </button>
          <button className="group mt-6 w-full border-b-2 border-gray-300 pb-6 text-left focus:outline-none">
            <div className="text-lg font-semibold">
              Q: Are there any discounts available if you buy with cash?
            </div>
            <div className="mt-3 hidden text-gray-700 group-focus:flex">
              <p>
                Basically no. However we encourage different finance options.
              </p>
            </div>
          </button>
          <button className="group mt-6 w-full border-b-2 border-gray-300 pb-6 text-left focus:outline-none">
            <div className="text-lg font-semibold">
              Q: Do we accept your current car as a trade-in?
            </div>
            <div className="mt-3 hidden text-gray-700 group-focus:flex">
              <p>
                Under certain circumstances, we often take your current car and
                use its value as part of the final deal for your new car.
              </p>
            </div>
          </button>
          <button className="group mt-6 w-full border-b-2 border-gray-300 pb-6 text-left focus:outline-none">
            <div className="text-lg font-semibold">
              Q: What are your financing options?
            </div>
            <div className="mt-3 hidden text-gray-700 group-focus:flex">
              <p>
                Auto-Eric offers in-house financing, as well as a possibility to
                secure financing from a third-party such as your bank.
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* <a
        className="fixed bottom-0 right-0 mr-4 mb-4 flex h-8 items-center justify-center rounded-full bg-blue-600 pr-2 pl-1 text-blue-100 shadow-lg hover:bg-blue-600"
        href="https://twitter.com/lofiui"
        target="_top"
      >
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
          <svg
            className="h-4 w-4 fill-current"
            viewBox="0 0 24 24"
            class="r-jwli3a r-4qtqp9 r-yyyyoo r-16y2uox r-1q142lx r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"
          >
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
        </div>
        <span className="ml-1 text-sm leading-none">@lofiui</span>
      </a> */}
    </Layout>
  );
};

export default frequentlyAskedQuestions;
