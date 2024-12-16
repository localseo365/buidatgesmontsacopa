import React from 'react';
import { Home, Building2, Warehouse, Truck, Recycle, Clock } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Vaciado de Pisos',
    description: 'Servicio completo de vaciado de pisos y viviendas, ideal para herencias, mudanzas o reformas. Nos encargamos del desmontaje de muebles, retirada de enseres y limpieza final del espacio. Garantizamos un trabajo rápido y profesional, respetando siempre la privacidad y los elementos de valor.'
  },
  {
    icon: Building2,
    title: 'Vaciado de Locales',
    description: 'Especialistas en vaciado de locales comerciales y oficinas. Adaptamos nuestros servicios a sus necesidades, ya sea por cierre de negocio, cambio de actividad o renovación del espacio. Incluimos desmontaje de mobiliario comercial y gestión de residuos específicos.'
  },
  {
    icon: Warehouse,
    title: 'Vaciado de Naves',
    description: 'Soluciones profesionales para el vaciado de naves industriales y almacenes. Contamos con la maquinaria y el personal especializado necesario para manejar grandes volúmenes de material y equipamiento industrial, garantizando un proceso eficiente y seguro.'
  },
  {
    icon: Truck,
    title: 'Transporte Especializado',
    description: 'Disponemos de una flota de vehículos adaptada a cada necesidad, desde furgonetas hasta camiones de gran tonelaje. Garantizamos un transporte seguro y eficiente de todos los elementos retirados, cumpliendo con la normativa vigente.'
  },
  {
    icon: Recycle,
    title: 'Gestión Responsable de Residuos',
    description: 'Comprometidos con el medio ambiente, gestionamos cada tipo de residuo según la normativa vigente. Trabajamos con centros autorizados de reciclaje y realizamos una clasificación exhaustiva de materiales para maximizar su reutilización.'
  },
  {
    icon: Clock,
    title: 'Servicio de Urgencia 24/7',
    description: 'Entendemos que hay situaciones que no pueden esperar. Por eso, ofrecemos un servicio de atención 24 horas los 365 días del año para emergencias y proyectos urgentes en toda la provincia de Girona.'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Servicios Profesionales de Vaciado en Girona</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En BUIDATGES MONTSACOPA ofrecemos soluciones integrales para el vaciado y limpieza de espacios en toda la provincia de Girona. Nuestro equipo especializado se encarga de todo el proceso, desde la evaluación inicial hasta la gestión final de residuos, garantizando un servicio eficiente y respetuoso con el medio ambiente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}