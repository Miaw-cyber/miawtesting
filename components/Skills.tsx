export default function Skills() {
  const skills = ['Circuit Design', 'PLC Programming', 'Electrical Troubleshooting', 'Automation Systems', 'Industrial Control']

  return (
    <section id="skills" className="bg-gray-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-blue-600 text-white px-4 py-2 rounded-full">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

