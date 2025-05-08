"use client"

import { useState } from "react"

const standards = [
  { value: "4", label: "Standard 4" },
  { value: "5", label: "Standard 5" },
  { value: "6", label: "Standard 6" },
  { value: "7", label: "Standard 7" },
  { value: "8", label: "Standard 8" },
  { value: "11", label: "Standard 11 (Science)" },
  { value: "12", label: "Standard 12 (Science)" },
]

const subjects = {
  4: [
    { value: "math", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "english", label: "English" },
    { value: "sst", label: "Social Studies" },
  ],
  5: [
    { value: "math", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "english", label: "English" },
    { value: "sst", label: "Social Studies" },
  ],
  6: [
    { value: "math", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "english", label: "English" },
    { value: "sst", label: "Social Studies" },
  ],
  7: [
    { value: "math", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "english", label: "English" },
    { value: "sst", label: "Social Studies" },
  ],
  8: [
    { value: "math", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "english", label: "English" },
    { value: "sst", label: "Social Studies" },
  ],
  11: [
    { value: "physics", label: "Physics" },
    { value: "chemistry", label: "Chemistry" },
    { value: "biology", label: "Biology" },
    { value: "math", label: "Mathematics" },
  ],
  12: [
    { value: "physics", label: "Physics" },
    { value: "chemistry", label: "Chemistry" },
    { value: "biology", label: "Biology" },
    { value: "math", label: "Mathematics" },
  ],
}

const chapters = {
  math: [
    { value: "algebra", label: "Algebra" },
    { value: "geometry", label: "Geometry" },
    { value: "trigonometry", label: "Trigonometry" },
    { value: "calculus", label: "Calculus" },
  ],
  science: [
    { value: "motion", label: "Motion and Force" },
    { value: "electricity", label: "Electricity and Magnetism" },
    { value: "chemistry", label: "Basic Chemistry" },
    { value: "biology", label: "Living Organisms" },
  ],
  physics: [
    { value: "mechanics", label: "Mechanics" },
    { value: "thermodynamics", label: "Thermodynamics" },
    { value: "waves", label: "Waves and Optics" },
    { value: "modern", label: "Modern Physics" },
  ],
  chemistry: [
    { value: "organic", label: "Organic Chemistry" },
    { value: "inorganic", label: "Inorganic Chemistry" },
    { value: "physical", label: "Physical Chemistry" },
  ],
  biology: [
    { value: "cell", label: "Cell Biology" },
    { value: "genetics", label: "Genetics" },
    { value: "human", label: "Human Physiology" },
    { value: "ecology", label: "Ecology" },
  ],
  english: [
    { value: "grammar", label: "Grammar" },
    { value: "literature", label: "Literature" },
    { value: "writing", label: "Writing Skills" },
  ],
  sst: [
    { value: "history", label: "History" },
    { value: "geography", label: "Geography" },
    { value: "civics", label: "Civics" },
    { value: "economics", label: "Economics" },
  ],
}

const PersonalizedLearning = () => {
  const [selectedStd, setSelectedStd] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("")
  const [selectedChapter, setSelectedChapter] = useState("")

  const getWhatsAppLink = () => {
    const std = selectedStd
    const subject = subjects[selectedStd]?.find((s) => s.value === selectedSubject)?.label || ""
    const chapter = chapters[selectedSubject]?.find((c) => c.value === selectedChapter)?.label || ""

    return `https://wa.me/919999999999?text=Hi%20I%20want%20to%20inquire%20about%20${subject}%20tuition%20for%20Std%20${std}%20(Chapter:%20${chapter})`
  }

  return (
    <section id="personalized" className="section-padding bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Personalized Learning</h2>

        <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
          <div className="md:w-1/2">
            <div className="relative">
              <h3 className="text-2xl font-bold mb-6 text-[#1F1F2E]">Tailored to Your Needs</h3>
              <p className="text-lg mb-6 text-[#2C2C2C] leading-relaxed">
                At Gajanan Academy, we understand that every student has unique learning requirements. Some students may
                need help with specific chapters or concepts, while others prefer comprehensive subject coverage.
              </p>
              <p className="text-lg mb-6 text-[#2C2C2C] leading-relaxed">
                Our personalized learning approach allows you to choose exactly what you need help with - whether it's a
                single challenging chapter or an entire subject.
              </p>
              <div className="p-6 bg-[#F9FAFB] rounded-xl shadow-lg border-l-4 border-[#F4A300] mt-8">
                <p className="text-lg font-medium text-[#1F1F2E]">
                  📍 Only need help in one chapter or concept? We've got you covered with our chapter-wise coaching!
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-[#F9FAFB] p-8 rounded-xl shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-[#1F1F2E] text-center">Find Your Perfect Learning Plan</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#1F1F2E]">Select Standard</label>
                  <select
                    value={selectedStd}
                    onChange={(e) => {
                      setSelectedStd(e.target.value)
                      setSelectedSubject("")
                      setSelectedChapter("")
                    }}
                    className="input-field"
                  >
                    <option value="">Select Standard</option>
                    {standards.map((std) => (
                      <option key={std.value} value={std.value}>
                        {std.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[#1F1F2E]">Select Subject</label>
                  <select
                    value={selectedSubject}
                    onChange={(e) => {
                      setSelectedSubject(e.target.value)
                      setSelectedChapter("")
                    }}
                    disabled={!selectedStd}
                    className="input-field"
                  >
                    <option value="">Select Subject</option>
                    {selectedStd &&
                      subjects[selectedStd]?.map((subject) => (
                        <option key={subject.value} value={subject.value}>
                          {subject.label}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[#1F1F2E]">Select Chapter (Optional)</label>
                  <select
                    value={selectedChapter}
                    onChange={(e) => setSelectedChapter(e.target.value)}
                    disabled={!selectedSubject}
                    className="input-field"
                  >
                    <option value="">Select Chapter</option>
                    {selectedSubject &&
                      chapters[selectedSubject]?.map((chapter) => (
                        <option key={chapter.value} value={chapter.value}>
                          {chapter.label}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="text-center">
                <a
                  href={selectedStd && selectedSubject ? getWhatsAppLink() : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-primary inline-flex items-center justify-center ${
                    !selectedStd || !selectedSubject ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={(e) => {
                    if (!selectedStd || !selectedSubject) {
                      e.preventDefault()
                    }
                  }}
                >
                  <span className="mr-2">Chat on WhatsApp</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-full h-40 bg-[#F9FAFB] clip-path-wave -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-[#F9FAFB] clip-path-wave rotate-180 -z-10"></div>
    </section>
  )
}

export default PersonalizedLearning
