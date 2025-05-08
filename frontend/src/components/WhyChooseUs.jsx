"use client"

import { useState, useRef, useEffect } from "react"

const reasons = [
  {
    icon: (
      <svg
        className="w-16 h-16 text-[#F4A300]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Proven Track Record",
    description:
      "Our students consistently achieve excellent results in board exams and competitive tests, with many ranking in the top percentiles.",
  },
  {
    icon: (
      <svg
        className="w-16 h-16 text-[#F4A300]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Custom Progress Tracking",
    description:
      "Regular assessments and personalized feedback to monitor and improve student performance, with detailed progress reports.",
  },
  {
    icon: (
      <svg
        className="w-16 h-16 text-[#F4A300]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Personalized Chapter-wise Coaching",
    description:
      "Get help with specific chapters or concepts that you find challenging, with customized learning plans for each student.",
  },
  {
    icon: (
      <svg
        className="w-16 h-16 text-[#F4A300]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "Parent-Teacher Connect",
    description:
      "Regular updates and meetings to keep parents informed about their child's progress, strengths, and areas for improvement.",
  },
]

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const slideRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reasons.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.scrollTo({
        left: activeIndex * slideRef.current.offsetWidth,
        behavior: "smooth",
      })
    }
  }, [activeIndex])

  return (
    <section className="section-padding bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Choose Us</h2>

        {/* Mobile Slider */}
        <div className="md:hidden mt-16">
          <div ref={slideRef} className="flex overflow-x-hidden snap-x snap-mandatory">
            {reasons.map((reason, index) => (
              <div key={index} className="min-w-full snap-center p-4">
                <div className="bg-[#F9FAFB] p-8 rounded-xl shadow-lg text-center h-full flex flex-col items-center">
                  <div className="mb-6">{reason.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-[#1F1F2E]">{reason.title}</h3>
                  <p className="text-[#2C2C2C]">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {reasons.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-[#F4A300] w-8" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] p-8 rounded-xl shadow-lg text-center h-full flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-[#1F1F2E]">{reason.title}</h3>
              <p className="text-[#2C2C2C]">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#inquiry" className="btn-primary inline-flex items-center">
            <span>Inquire Now</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-full h-40 bg-[#F9FAFB] clip-path-curve -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-[#F9FAFB] clip-path-curve rotate-180 -z-10"></div>
    </section>
  )
}

export default WhyChooseUs
