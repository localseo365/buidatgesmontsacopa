import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/p/AF1QipMWgxIt7NQyd8R4AVmpFP1LhXE4IRzeopaWczw-=s1360-w1360-h1020")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Vaciado de Pisos y Locales en Girona: Soluciones Profesionales y Rápidas
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            ¿Necesita vaciar un piso, local o nave industrial en Girona? En BUIDATGES MONTSACOPA nos encargamos de todo el proceso, desde el desmontaje hasta la gestión de residuos. Con más de una década de experiencia, garantizamos un servicio rápido, profesional y respetuoso con el medio ambiente. Libere su espacio sin preocupaciones y ahorre tiempo y esfuerzo con nuestro servicio integral de vaciado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Solicitar Presupuesto
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:+34972984605"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}