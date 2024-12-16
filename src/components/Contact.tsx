import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Contacte con los Expertos en Vaciado</h2>
            <p className="text-gray-600 mb-8">
              ¿Necesita vaciar un espacio en Girona? En BUIDATGES MONTSACOPA estamos aquí para ayudarle. Nuestro equipo de expertos está disponible para evaluar su proyecto y ofrecerle la mejor solución adaptada a sus necesidades. Contáctenos para obtener un presupuesto gratuito y sin compromiso, o para resolver cualquier duda sobre nuestros servicios de vaciado profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <a href="tel:+34972984605" className="text-gray-600 hover:text-blue-600">972 98 46 05</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@buidatgesmontsacopa.com" className="text-gray-600 hover:text-blue-600">
                      info@buidatgesmontsacopa.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Dirección</p>
                    <p className="text-gray-600">Camí Montsacopa, 3, 17800 Olot, Girona</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Solicitar Presupuesto</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Enviar Solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}