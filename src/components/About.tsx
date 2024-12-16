import React from 'react';
import { Shield, Clock, ThumbsUp } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Expertos en Vaciado de Espacios en Girona</h2>
          <p className="text-gray-600 mb-12">
            BUIDATGES MONTSACOPA es la empresa líder en servicios de vaciado y limpieza en Girona, con más de 10 años transformando espacios y ayudando a nuestros clientes a gestionar situaciones complejas. Nos especializamos en ofrecer soluciones integrales para el vaciado de pisos, locales y naves industriales, adaptándonos siempre a las necesidades específicas de cada cliente.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Garantía Total</h3>
              <p className="text-gray-600">Servicio profesional con todas las garantías y seguros necesarios</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Rapidez</h3>
              <p className="text-gray-600">Respuesta inmediata y ejecución eficiente de los trabajos</p>
            </div>
            <div className="text-center">
              <ThumbsUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Experiencia</h3>
              <p className="text-gray-600">Más de una década de experiencia en el sector</p>
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            Nuestra experiencia nos ha permitido desarrollar un método de trabajo eficiente y respetuoso, tanto con el medio ambiente como con los elementos de valor sentimental o económico que podamos encontrar durante el proceso. Entendemos que cada proyecto es único y requiere una atención personalizada, por eso ofrecemos un servicio adaptado a cada situación.
          </p>
          
          <p className="text-gray-600">
            Trabajamos con particulares, empresas y administraciones públicas, ofreciendo siempre la máxima profesionalidad y transparencia en nuestros servicios. Nuestro compromiso con la calidad y la satisfacción del cliente nos ha convertido en referentes del sector en toda la provincia de Girona.
          </p>
        </div>
      </div>
    </section>
  );
}