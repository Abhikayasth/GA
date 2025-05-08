"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import Features from "./components/Features"
import WhyChooseUs from "./components/WhyChooseUs"
import Courses from "./components/Courses"
import PersonalizedLearning from "./components/PersonalizedLearning"
import Testimonials from "./components/Testimonials"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import MobileNav from "./components/MobileNav"
import ShapeDivider from "./components/ShapeDivider"

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-b from-[#F4A300]/20 to-transparent blur-3xl"></div>
      <div className="absolute top-[30%] left-0 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-b from-[#1F1F2E]/10 to-transparent blur-3xl"></div>

      <Header isScrolled={isScrolled} />
      <Hero />

      <ShapeDivider position="top" fill="#F9FAFB" pattern="waves" />
      <AboutUs />
      <ShapeDivider position="bottom" fill="#F9FAFB" pattern="triangles" />

      <Features />

      <ShapeDivider position="top" fill="#FFFFFF" pattern="curves" />
      <WhyChooseUs />
      <ShapeDivider position="bottom" fill="#FFFFFF" pattern="waves" />

      <Courses />

      <ShapeDivider position="top" fill="#FFFFFF" pattern="triangles" />
      <PersonalizedLearning />
      <ShapeDivider position="bottom" fill="#FFFFFF" pattern="curves" />

      <Testimonials />

      <ShapeDivider position="top" fill="#FFFFFF" pattern="waves" />
      <ContactForm />

      <Footer />
      <MobileNav />
    </div>
  )
}

export default App
