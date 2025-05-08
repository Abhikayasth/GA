"use client"

import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    standard: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Format the WhatsApp message
    const message = `Hi, I'm ${formData.name}. I want to inquire about tuition classes for Std ${formData.standard} ${formData.subject ? `(${formData.subject})` : ""}. ${formData.message}`
    const encodedMessage = encodeURIComponent(message)

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/919999999999?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="inquiry" className="section-padding bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Inquiry Form</h2>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-[#F9FAFB] rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-gradient-to-br from-[#1F1F2E] to-[#3a3a5a] p-8 md:p-12 text-white relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-10 right-10 w-40 h-40 border-8 border-white/20 rounded-full"></div>
                  <div className="absolute bottom-10 left-10 w-20 h-20 border-8 border-white/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/3 w-16 h-16 border-4 border-white/20 rounded-full"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <p className="mb-8">
                    Have questions about our courses or teaching methods? Fill out the form and we'll get back to you as
                    soon as possible.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-[#F4A300] mr-3 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p>Near Ramji Mandir, Patther Gate, Madan Zampa Road, Vadodara – 390001</p>
                    </div>

                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 text-[#F4A300] mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <p>+91 99999 99999</p>
                    </div>

                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 text-[#F4A300] mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <p>info@gajananacademy.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-3/5 p-8 md:p-12">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#1F1F2E]">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#1F1F2E]">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label htmlFor="standard" className="block text-sm font-medium mb-2 text-[#1F1F2E]">
                        Standard
                      </label>
                      <select
                        id="standard"
                        name="standard"
                        value={formData.standard}
                        onChange={handleChange}
                        required
                        className="input-field"
                      >
                        <option value="">Select Standard</option>
                        <option value="4">Standard 4</option>
                        <option value="5">Standard 5</option>
                        <option value="6">Standard 6</option>
                        <option value="7">Standard 7</option>
                        <option value="8">Standard 8</option>
                        <option value="11">Standard 11 (Science)</option>
                        <option value="12">Standard 12 (Science)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-[#1F1F2E]">
                        Subject (Optional)
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select Subject</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Science">Science</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="English">English</option>
                        <option value="Social Studies">Social Studies</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#1F1F2E]">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific requirements or questions?"
                      className="input-field min-h-[120px]"
                      rows={4}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center">
                    <span>Submit Inquiry</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-full h-40 bg-[#F9FAFB] clip-path-slant -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-[#F9FAFB] clip-path-slant rotate-180 -z-10"></div>
    </section>
  )
}

export default ContactForm
