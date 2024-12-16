import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BUIDATGES MONTSACOPA</h3>
            <div className="text-gray-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <p>Camí Montsacopa, 3, 17800 Olot, Girona</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <p>972 98 46 05</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-white">Servicios</a></li>
              <li><a href="#nosotros" className="text-gray-400 hover:text-white">Nosotros</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-blue-400">
                <Facebook />
              </a>
              <a href="#" className="hover:text-pink-400">
                <Instagram />
              </a>
              <a href="mailto:info@buidatgesmontsacopa.com" className="hover:text-red-400">
                <Mail />
              </a>
            </div>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.6876366770584!2d2.4834661!3d42.1805556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12baa09c973d3af3%3A0x4c794b8c6a899c76!2sCam%C3%AD%20Montsacopa%2C%203%2C%2017800%20Olot%2C%20Girona!5e0!3m2!1ses!2ses!4v1709901234567!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de BUIDATGES MONTSACOPA"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BUIDATGES MONTSACOPA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}