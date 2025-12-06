"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, MapPin } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold" style={{ color: "#CCFF00" }}> NITHUB</span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-700 hover:text-lime-400 transition-colors font-medium">
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-lime-400 transition-colors font-medium">
              Pricing
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-lime-400 transition-colors font-medium">
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-lime-400 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Desktop Login Button */}
         <Link
  href="/auth"
  className="px-6 py-2 text-gray-900 font-medium mr-2 inline-block rounded-lg"
  style={{ backgroundColor: "#CCFF00" }}>
  Login
</Link>

<Link
  href="/auth"
  className="px-6 py-2 text-gray-900 rounded-lg font-medium inline-block"
  style={{ backgroundColor: "#CCFF00" }}>
  Sign Up
</Link>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600">
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="#features"
              className="block text-gray-700 hover:text-lime-400 font-medium">
              Features
            </Link>
            <Link
              href="#pricing"
              className="block text-gray-700 hover:text-lime-400 font-medium">
              Pricing
            </Link>
            <Link
              href="#about"
              className="block text-gray-700 hover:text-lime-400 font-medium">
              About
            </Link>
            <Link
              href="#contact"
              className="block text-gray-700 hover:text-lime-400 font-medium">
              Contact
            </Link>
            <div className="pt-3 border-t border-gray-200 space-y-2">
              <Link
                href="/auth"
                className="block w-full px-6 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors text-center">
                Login
              </Link>
              <Link
                href="/auth"
                className="block w-full px-6 py-2 bg-lime-400 text-white rounded-lg hover:bg-lime-700 transition-colors font-medium text-center">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
