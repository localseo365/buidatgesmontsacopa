import React from 'react';
import { Menu, X } from 'lucide-react';
import NavLinks from './NavLinks';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 z-50">
          <NavLinks
            className="flex flex-col space-y-2"
            onClick={closeMenu}
          />
        </div>
      )}
    </div>
  );
}