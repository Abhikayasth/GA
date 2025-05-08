const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-[#F9FAFB] relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Who We Are</h2>

        <div className="flex flex-col md:flex-row items-center gap-10 mt-16">
          <div className="md:w-1/2">
            <div className="relative">
              <p className="text-lg mb-6 text-[#2C2C2C] leading-relaxed">
                At <span className="font-semibold text-[#1F1F2E]">Gajanan Academy</span>, we believe in nurturing young
                minds through personalized education that goes beyond textbooks and exams. Our mission is to build a
                strong foundation of concepts that empowers students to excel not just in academics, but in life.
              </p>
              <p className="text-lg mb-6 text-[#2C2C2C] leading-relaxed">
                We understand that each student has unique learning needs and pace. Our tailored approach ensures that
                no student is left behind, and every concept is thoroughly understood before moving forward.
              </p>
              <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-[#F4A300] mt-8">
                <p className="text-lg font-medium text-[#1F1F2E]">
                  We emphasize <span className="text-[#F4A300] font-bold">Confidence Over Scores</span> and{" "}
                  <span className="text-[#F4A300] font-bold">Learning Beyond Exams</span>, creating an environment where
                  every student can thrive at their own pace.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-full max-w-md h-80 bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-pattern"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl font-bold text-[#F4A300]/20">GA</div>
                </div>
                <div className="absolute bottom-0 left-0 right-2 bg-gradient-to-t from-[#1F1F2E] to-transparent p-20">
                  <h3 className="text-white text-xl font-bold">Our Vision</h3>
                  <p className="text-white/80 mt-2">
                    To create confident, knowledgeable learners ready for future challenges
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F4A300]/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1F1F2E]/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
