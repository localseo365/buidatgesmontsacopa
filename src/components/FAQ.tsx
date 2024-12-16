import React from 'react';

const faqs = [
  {
    question: '¿Cuánto tiempo tarda el proceso de vaciado?',
    answer: 'El tiempo necesario varía según el tamaño del espacio y la cantidad de elementos a retirar. Para un piso estándar, normalmente completamos el trabajo en 1-2 días laborables. Para proyectos más grandes como naves industriales, realizamos una evaluación previa y establecemos un cronograma detallado. Nos adaptamos a sus necesidades y podemos trabajar en horarios flexibles para minimizar las interrupciones.'
  },
  {
    question: '¿Qué zonas cubrís?',
    answer: 'Prestamos servicio en toda la provincia de Girona, incluyendo Olot, Figueres, Banyoles, Ripoll, y todas las poblaciones circundantes. Nuestro radio de acción abarca desde la Costa Brava hasta el Pirineo gerundense, garantizando el mismo nivel de calidad y profesionalidad en cualquier ubicación.'
  },
  {
    question: '¿Ofrecéis presupuesto sin compromiso?',
    answer: 'Sí, realizamos visitas técnicas gratuitas para evaluar el trabajo y ofrecer un presupuesto detallado sin compromiso. Durante la visita, nuestros expertos analizan el espacio, evalúan los elementos a retirar y consideran factores como accesibilidad y necesidades específicas para proporcionar un presupuesto preciso y transparente.'
  },
  {
    question: '¿Cómo gestionáis los residuos?',
    answer: 'Seguimos un riguroso protocolo de gestión de residuos en cumplimiento con la normativa medioambiental vigente. Clasificamos los materiales según su naturaleza (muebles, electrodomésticos, textiles, etc.) y trabajamos con centros de reciclaje autorizados. Priorizamos la reutilización cuando es posible y garantizamos un tratamiento responsable de todos los residuos.'
  },
  {
    question: '¿Qué documentación proporcionáis?',
    answer: 'Entregamos toda la documentación necesaria, incluyendo presupuesto detallado, facturas, certificados de gestión de residuos y seguros de responsabilidad civil. Para empresas y administraciones, proporcionamos también los certificados específicos requeridos para cumplir con la normativa vigente.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}