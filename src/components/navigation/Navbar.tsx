import React from 'react';
import Logo from '../Logo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="z-10">
            <Logo />
          </a>
          <DesktopMenu />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}