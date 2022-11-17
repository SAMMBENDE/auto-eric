import React, { useRef, useState } from "react";

function Newsletter() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const newsletter = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/newsletter", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <div>
      <h4 className="pb-4 font-semibold text-gray-800">Join our Newsletter</h4>
      <p className="pb-4 text-gray-600">
        Be the first to know about good deals & new arrivals by joining our free
        newsletter.
      </p>
      <p>
        {message
          ? message
          : `We'll only send emails when new content is posted. No spam.`}
      </p>
      <form className="flex flex-row flex-wrap" onSubmit={newsletter}>
        <input
          id="email-input"
          name="email"
          placeholder="email@example.com"
          ref={inputEl}
          required
          type="email"
          className="w-2/3 p-2 text-gray-500 focus:border-yellow-500"
        />

        <button
          className="primary-button w-1/3 text-sm text-black"
          type="submit"
        >
          {" Subscribe "}
        </button>
      </form>
    </div>
  );
}
export default Newsletter;
