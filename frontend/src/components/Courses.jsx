// Courses.jsx

const juniorCourses = [
  { id: "math-4-8", name: "Mathematics", std: "4-8", icon: "📐" },
  { id: "science-4-8", name: "Science", std: "4-8", icon: "🔬" },
  { id: "english-4-8", name: "English", std: "4-8", icon: "📚" },
  { id: "sst-4-8", name: "Social Studies", std: "4-8", icon: "🌍" },
  { id: "hindi-4-8", name: "Hindi", std: "4-8", icon: "📝" },
  { id: "gujarati-4-8", name: "Gujarati", std: "4-8", icon: "📖" },
  { id: "computer-4-8", name: "Computer", std: "4-8", icon: "💻" },
  { id: "gk-4-8", name: "General Knowledge", std: "4-8", icon: "🌐" },
];

const seniorCourses = [
  // Science
  { id: "physics-11-12", name: "Physics", std: "11-12 Science", icon: "⚛️" },
  { id: "chemistry-11-12", name: "Chemistry", std: "11-12 Science", icon: "🧪" },
  { id: "biology-11-12", name: "Biology", std: "11-12 Science", icon: "🧬" },
  { id: "math-11-12", name: "Mathematics", std: "11-12 Science", icon: "📊" },

 
];

const CourseCard = ({ course }) => {
  if (!course) return null;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg group card-hover">
      <div className="h-24 bg-gradient-to-r from-[#1F1F2E] to-[#3a3a5a] flex items-center justify-center">
        <span className="text-4xl">{course.icon || "📘"}</span>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2 text-[#1F1F2E] group-hover:text-[#F4A300] transition-colors">
          {course.name}
        </h4>
        <p className="text-sm text-gray-500 mb-4">Standard {course.std}</p>
        <ul className="mb-6 text-[#2C2C2C]">
          {["Concept-based learning", "Weekly assessments", "Comprehensive notes"].map((text, idx) => (
            <li className="flex items-center mb-2" key={idx}>
              <svg className="w-5 h-5 text-[#F4A300] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {text}
            </li>
          ))}
        </ul>
        <a
          href={`https://wa.me/9173337926?text=Hi%20I%20want%20to%20inquire%20about%20${course.name}%20tuition%20for%20Std%20${course.std}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline w-full flex items-center justify-center"
        >
          <span>Inquire Now</span>
          <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-..." /> {/* Update with actual icon path */}
          </svg>
        </a>
      </div>
    </div>
  );
};

const Courses = () => (
  <section id="courses" className="section-padding bg-[#F9FAFB] relative">
    <div className="container mx-auto px-4">
      <h2 className="section-title">Courses Offered</h2>

      {/* Junior Section */}
      <div className="mb-16 mt-16">
        <div className="flex items-center justify-center mb-8">
          <div className="h-1 w-16 bg-[#F4A300] rounded-full mr-4"></div>
          <h3 className="text-2xl font-bold text-[#1F1F2E]">Standard 4-8</h3>
          <div className="h-1 w-16 bg-[#F4A300] rounded-full ml-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {juniorCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Senior Section */}
      <div>
        <div className="flex items-center justify-center mb-8">
          <div className="h-1 w-16 bg-[#F4A300] rounded-full mr-4"></div>
          <h3 className="text-2xl font-bold text-[#1F1F2E]">Standard 11-12 (Science / Commerce / Arts)</h3>
          <div className="h-1 w-16 bg-[#F4A300] rounded-full ml-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {seniorCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Extra Info Box */}
      <div className="mt-16 text-center">
        <div className="p-8 bg-white rounded-xl shadow-lg max-w-2xl mx-auto">
          <p className="text-xl font-bold mb-6 text-[#1F1F2E]">📌 Learn Single Chapter or Full Subject</p>
          <p className="text-lg mb-6 text-[#2C2C2C]">
            Need help with just one specific chapter or concept? We offer flexible learning options tailored to your
            needs.
          </p>
          <a href="#personalized" className="btn-primary inline-flex items-center">
            <span>Explore Personalized Learning</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    {/* Background Circles */}
    <div className="absolute top-20 left-10 w-40 h-40 bg-[#F4A300]/5 rounded-full"></div>
    <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#1F1F2E]/5 rounded-full"></div>
  </section>
);

export default Courses;
