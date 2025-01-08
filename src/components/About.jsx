const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg text-gray-600">
            <p>Hello, my name is Melchor De La Rosa, and I am a software engineer based in Palm Coast, FL. My current focus lies in building robust and scalable applications using modern technologies like React, Ruby on Rails, and JavaScript.</p>
            <p>My journey into software development is rooted in my background as a master assembler and group leader in boatbuilding, where I built Boston Whaler boats ranging from 11 to 42 feet. In that role, I honed skills in precision, problem-solving, and collaboration, which naturally transitioned into coding. I discovered a passion for solving complex challenges and creating digital solutions that make a real-world impact, which drives my work today.</p>
            <p>I'm looking for opportunities where I can contribute to dynamic teams that value growth, creativity, and innovation. My goal is to build applications that enhance user experiences and address real-world needs, while continuing to expand my technical expertise.</p>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Previous Industries</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">Boatbuilding</div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">Manufacturing</div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Preferred Locations</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">Remote Would Be my First Preference.</p>
                <p className="text-gray-700">My Second Preference Would be anywhere In Palm Coast, Fl or a radius of 100 miles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About;