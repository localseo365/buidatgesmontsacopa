import React from 'react';

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' }
];

export default function NavLinks({ className = '', onClick }: { className?: string, onClick?: () => void }) {
  return (
    <ul className={className}>
      {navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
            onClick={onClick}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}