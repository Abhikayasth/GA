const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-[#1F1F2E] to-[#2a2a3d] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4A300]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F4A300]/5 rounded-full blur-3xl"></div>

      {/* Animated Shapes */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-[#F4A300]/20 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 left-20 w-12 h-12 bg-[#F4A300]/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-40 left-[10%] w-8 h-8 bg-[#F4A300]/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Personalized Learning for Std 4–8 & 11–12 Science
              </h1>
              <div className="absolute -left-4 top-0 w-1 h-20 bg-[#F4A300]"></div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-xl">
              Master any Subject or Chapter with our expert guidance. Online & Offline classes available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/9173337926?text=Hi%20I%20want%20to%20inquire%20about%20tuition%20classes"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center"
              >
                <span className="mr-2">📲 Chat on WhatsApp</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a href="#courses" className="btn-outline flex items-center justify-center">
                <span>Explore Courses</span>
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
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-full max-w-md h-80 md:h-96 bg-gradient-to-br from-[#F4A300]/30 to-[#F4A300]/5 rounded-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm border border-white/10 shadow-2xl">
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#F4A300]/10 transform rotate-45"></div>
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#F4A300]/20 rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[#F4A300]/5 transform -rotate-12"></div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-8xl font-bold text-white/90 mb-4 animate-pulse-slow">GA</div>
                  <div className="text-xl text-white/80 font-medium">Excellence in Education</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#F4A300] rounded-lg rotate-12 opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#F4A300] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#F9FAFB"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
