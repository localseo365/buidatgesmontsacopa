import React from 'react';
import { Truck } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Truck className="h-8 w-8 text-blue-600" />
      <div className="font-bold text-xl leading-none">
        <span className="text-blue-600">BUIDATGES</span>
        <br />
        <span className="text-gray-800">MONTSACOPA</span>
      </div>
    </div>
  );
}