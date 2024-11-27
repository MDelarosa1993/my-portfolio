const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg text-gray-600">
            <p>[Your introduction and current role/focus]</p>
            <p>[Your journey into software development and what drives you]</p>
            <p>[Your goals and the type of opportunities you're seeking]</p>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Previous Industries</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">Industry 1</div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">Industry 2</div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">Industry 3</div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Preferred Locations</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">[Your location preferences]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About;