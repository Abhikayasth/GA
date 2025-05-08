"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Parent of Std 8 Student",
    content:
      "My son struggled with Science concepts until he joined Gajanan Academy. The personalized attention and concept-based teaching has made a huge difference in his understanding and confidence. The teachers are patient and ensure every student understands the fundamentals before moving forward.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Std 12 Science Student",
    content:
      "The Physics classes at Gajanan Academy helped me understand complex topics that I was struggling with. The teachers are very patient and explain everything clearly until you understand. Their chapter-wise approach allowed me to focus on areas where I needed the most help, which significantly improved my overall performance.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Amit Desai",
    role: "Parent of Std 6 Student",
    content:
      "The weekly assessments and regular feedback have helped my daughter improve her Math scores significantly. The teachers are very dedicated and approachable. What I appreciate most is how they build confidence in students and make learning enjoyable rather than stressful.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-[#F9FAFB] relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">What Our Students Say</h2>

        <div className="relative max-w-4xl mx-auto mt-16">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl relative">
                    {/* Quote icon */}
                    <div className="absolute top-6 right-8 text-8xl text-[#F4A300]/10 font-serif">"</div>

                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/4 flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#F4A300]/20">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-lg text-[#1F1F2E]">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                        <div className="flex mt-4">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? "text-[#F4A300]" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>

                      <div className="md:w-3/4">
                        <p className="text-lg md:text-xl mb-6 text-[#2C2C2C] italic leading-relaxed relative z-10">
                          "{testimonial.content}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white rounded-full p-3 shadow-lg text-[#1F1F2E] hover:text-[#F4A300] transition-colors z-20"
            onClick={prevTestimonial}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white rounded-full p-3 shadow-lg text-[#1F1F2E] hover:text-[#F4A300] transition-colors z-20"
            onClick={nextTestimonial}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 ${
                  index === activeIndex ? "w-8 h-3 bg-[#F4A300] rounded-full" : "w-3 h-3 bg-gray-300 rounded-full"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#F4A300]/5 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#1F1F2E]/5 rounded-full"></div>
    </section>
  )
}

export default Testimonials
