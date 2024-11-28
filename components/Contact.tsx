export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <div className="flex flex-col items-center">
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong> <a href="mailto:16dem11f1048@gmail.com" className="text-blue-600 hover:underline">16dem11f1048@gmail.com</a>
          </p>
          <p className="text-gray-700 mb-4">
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hafidz-jasmine-1b789a147" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">hafidz-jasmine-1b789a147</a>
          </p>
          <p className="text-gray-700">
            <strong>Location:</strong> Pahang, Malaysia
          </p>
        </div>
      </div>
    </section>
  )
}

