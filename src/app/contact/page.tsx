// src/app/contact/page.tsx
const ContactPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-xl text-gray-500">We&apos;d love to hear from you. Visit us or give us a call!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna de Información */}
          <div className="lg:col-span-1 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-800">Address:</h3>
                <p>815 Hogan Lane #1, Conway, AR, 72034</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Phone:</h3>
                <p>
                  <a href="tel:+15013586103" className="text-yellow-600 hover:text-yellow-500">+1 501-358-6103</a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Hours:</h3>
                <p className="text-gray-400">Sun - Thu: 11:00 AM - 9:00 PM</p>
                <p className="text-gray-400">Fri - Sat: 11:00 AM - 9:30 PM</p>
              </div>
            </div>
          </div>

          {/* Columna del Mapa */}
          <div className="lg:col-span-2 rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.484251761567!2d-92.4601886847665!3d35.08745598024258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d26c5b967d745b%3A0x6e26715b5a76956!2s815%20Hogan%20Ln%20%231%2C%20Conway%2C%20AR%2072034%2C%20USA!5e0!3m2!1sen!2smx!4v1662586940845!5m2!1sen!2smx"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;