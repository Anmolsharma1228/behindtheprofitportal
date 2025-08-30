import React from 'react'

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-r to-[#0f172a] text-white py-16 px-6">
      <h1 className="text-center text-4xl font-bold mb-10 text-yellow-400">Contact Us</h1>

      <div className="max-w-lg mx-auto">
        {/* Contact Form */}
        <form
          className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-3 mb-3 rounded-lg outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border p-3 mb-3 rounded-lg outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border p-3 mb-3 rounded-lg h-28 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r to-blue-500 from-blue-700  text-white py-3 rounded-lg font-semibold transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs
