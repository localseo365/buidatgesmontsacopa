import React, { useState } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const acceptCookies = () => {
    setIsVisible(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  if (!isVisible || localStorage.getItem('cookiesAccepted') === 'true') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web. 
          Al continuar navegando, acepta nuestra política de cookies.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}