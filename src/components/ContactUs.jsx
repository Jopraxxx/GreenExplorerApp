function ContactUs() {
  return (
    <div>
        <section id="contact" className="bg-lime-200 py-16 min-h-screen" >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-8">Contact Us</h2>
        <div className="flex flex-col items-center">
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-8">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-facebook-square text-3xl"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <i className="fab fa-twitter-square text-3xl"></i>
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="text-center text-gray-700">
            <p className="mb-4">
              <span className="font-semibold">Phone:</span> +6392937461893
            </p>
            <p className="mb-4">
              <span className="font-semibold">Email:</span> grnxplor@gmail.com
            </p>
            <p className="mb-4">
              <span className="font-semibold">Visit us on:</span> 
              <a href="https://grnxplrr.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800">
                 GrnXplrr
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>  
    </div>
  )
}

export default ContactUs

