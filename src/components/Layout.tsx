import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navigation } from './Navigation';

export default function Layout() {
  const topMenuItems = ['Product', 'Benefits', 'Pricing', 'Blog', 'Contact'];
  const bottomMenuItems = ['Product', 'Technology', 'Benefits', 'Blog', 'Privacy Policy', 'Terms of Service', 'Phocys Labs', 'Contact'];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-transparent">
        <div className="container mx-auto px-4 py-4 flex justify-end">
          <Navigation items={topMenuItems} variant="transparent" />
        </div>
      </nav>

      <Outlet />

      <footer className="bg-[#546cfc] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Navigation items={bottomMenuItems} variant="footer" />
          </div>
          <div className="mt-8 text-center text-sm">
            © 2024 Infergram. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}