import React from "react";

const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className="min-h-screen bg-black bg-cover bg-center text-white font-orbitron p-8 animate-fade-in"
      style={{ backgroundImage: "url('contactus.jpg')" }}
    >
      <h1 className="text-6xl font-bold text-center text-white animate-title">
        {[..."CONTACT US"].map((letter, index) => (
          <span
            key={index}
            className="inline-block animate-vibration"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </h1>

      <div className="flex flex-col md:flex-row justify-between mt-20 mx-12">
        {/* Left Section */}
        <div className="space-y-8 animate-slide-in-left">
          <div>
            <h3 className="text-3xl">Email Us on:</h3>
            <ul className="text-lg">
              <li>waltz.uit.bu.2025.tech@gmail.com</li>
              <li>admin@waltzuit.in</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl">Call us on:</h3>
            <ul className="text-lg">
              <li>+91 7407788005</li>
              <li>+91 9123699383</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 animate-slide-in-right">
          <form className="flex flex-col space-y-4 animate-fade-in" method="post">
            <label className="text-2xl" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              autoComplete="off"
              className="border-2 border-purple-600 bg-black text-white rounded-md p-3 focus:ring-2 focus:ring-purple-600 animate-input-focus"
            />

            <label className="text-2xl" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              autoComplete="off"
              className="border-2 border-purple-600 bg-black text-white rounded-md p-3 focus:ring-2 focus:ring-purple-600 animate-input-focus"
            />

            <label className="text-2xl" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              placeholder="Enter your message"
              required
              className="border-2 border-purple-600 bg-black text-white rounded-md p-3 focus:ring-2 focus:ring-purple-600 animate-input-focus"
            ></textarea>

            <button
              type="submit"
              className="w-40 h-12 text-lg font-bold border-2 border-purple-600 bg-purple-600 text-white rounded-lg transition-transform duration-300 hover:bg-transparent hover:text-purple-300 hover:scale-110 animate-button-hover"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
