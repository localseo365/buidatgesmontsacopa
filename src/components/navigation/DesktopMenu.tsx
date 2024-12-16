import React from 'react';
import NavLinks from './NavLinks';

export default function DesktopMenu() {
  return (
    <nav className="hidden md:block">
      <NavLinks className="flex items-center space-x-6" />
    </nav>
  );
}