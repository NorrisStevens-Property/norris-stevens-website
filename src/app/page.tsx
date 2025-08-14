'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showCookies, setShowCookies] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Cookie Consent */}
      {showCookies && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 text-white p-6 rounded-lg max-w-md">
            <h3 className="font-bold mb-2">Cookies</h3>
            <p className="text-sm mb-4">
              To make this site work properly, we sometimes place small data files called cookies on your device.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCookies(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                ✓ Accept
              </button>
              <button className="border border-gray-500 text-white px-4 py-2 rounded hover:border-gray-400">
                Cookies Settings ⚙
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm relative z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="https://ext.same-assets.com/2579185083/1055600607.svg"
              alt="Norris & Stevens"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <Link href="/services" className="text-gray-700 font-medium hover:text-[#226691]">
                Services
              </Link>
            </div>
            <div className="relative group">
              <Link href="/properties" className="text-gray-700 font-medium hover:text-[#226691]">
                Properties
              </Link>
            </div>
            <Link href="/about" className="text-gray-700 font-medium hover:text-[#226691]">
              About Us
            </Link>
            <Link href="/resources" className="text-gray-700 font-medium hover:text-[#226691]">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-700 font-medium hover:text-[#226691]">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/services" className="block text-gray-700 hover:text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/properties" className="block text-gray-700 hover:text-blue-600 font-medium">
                Properties
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-blue-600 font-medium">
                About Us
              </Link>
              <Link href="/resources" className="block text-gray-700 hover:text-blue-600 font-medium">
                Resources
              </Link>
              <Link href="/contact" className="block text-gray-700 hover:text-blue-600 font-medium">
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/2579185083/4082757870.jpeg')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide">
            <span className="block text-xl md:text-2xl font-normal mb-2">CREATING VALUE IN</span>
            <span className="block font-bold">INVESTMENT REAL ESTATE</span>
          </h1>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl leading-relaxed font-light" style={{ color: '#226691' }}>
              Since 1966, Norris & Stevens has provided clients with representation and expertise in all
              aspects of Investment Real Estate throughout the Pacific Northwest. We specialize in
              Brokerage, Property and Facilities Management, Development, Consultation, and
              Receiverships for both Commercial Properties and Multi-family Apartment communities.
              Norris & Stevens assists families and Fortune 500 corporations alike in achieving their
              Real Estate investment goals while solving their unique problems. We are a locally-owned
              firm with National reach and representation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12" style={{ color: '#226691' }}>
            OUR SERVICES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Commercial Sales */}
            <Link href="/services/commercial-sales-and-leasing/" className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://ext.same-assets.com/2579185083/1013307180.jpeg')`
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                    <h3 className="text-xl font-bold mb-4">
                      COMMERCIAL<br />SALES
                    </h3>
                    <span className="border border-white px-4 py-2 text-sm font-medium group-hover:bg-white group-hover:text-black transition-all duration-300">
                      LEARN MORE &gt;&gt;
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Commercial Leasing */}
            <Link href="/services/commercial-sales-and-leasing/" className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://ext.same-assets.com/2579185083/1224326101.jpeg')`
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                    <h3 className="text-xl font-bold mb-4">
                      COMMERCIAL<br />LEASING
                    </h3>
                    <span className="border border-white px-4 py-2 text-sm font-medium group-hover:bg-white group-hover:text-black transition-all duration-300">
                      LEARN MORE &gt;&gt;
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Multi-family Investment Sales */}
            <Link href="/services/multi-family-investment-sales/" className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://ext.same-assets.com/2579185083/954529753.jpeg')`
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                    <h3 className="text-xl font-bold mb-4">
                      MULTI-FAMILY INVESTMENT<br />SALES
                    </h3>
                    <span className="border border-white px-4 py-2 text-sm font-medium group-hover:bg-white group-hover:text-black transition-all duration-300">
                      LEARN MORE &gt;&gt;
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Commercial Property Management */}
            <Link href="/services/commercial-property-management/" className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://ext.same-assets.com/2579185083/1410290918.jpeg')`
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                    <h3 className="text-xl font-bold mb-4">
                      COMMERCIAL PROPERTY<br />MANAGEMENT
                    </h3>
                    <span className="border border-white px-4 py-2 text-sm font-medium group-hover:bg-white group-hover:text-black transition-all duration-300">
                      LEARN MORE &gt;&gt;
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Commercial Facility Management */}
            <Link href="/services/commercial-facility-management/" className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://ext.same-assets.com/2579185083/3736687772.jpeg')`
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                    <h3 className="text-xl font-bold mb-4">
                      COMMERCIAL FACILITY<br />MANAGEMENT
                    </h3>
                    <span className="border border-white px-4 py-2 text-sm font-medium group-hover:bg-white group-hover:text-black transition-all duration-300">
                      LEARN MORE &gt;&gt;
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Multi-family Property Management */}
            <Link href="/services/multi-family-property-management/" className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://ext.same-assets.com/2579185083/1706328308.jpeg')`
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                    <h3 className="text-xl font-bold mb-4">
                      MULTI-FAMILY PROPERTY<br />MANAGEMENT
                    </h3>
                    <span className="border border-white px-4 py-2 text-sm font-medium group-hover:bg-white group-hover:text-black transition-all duration-300">
                      LEARN MORE &gt;&gt;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="relative py-24 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/2579185083/3750125637.jpeg')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="bg-gray-800 bg-opacity-80 p-12 rounded-lg max-w-md mx-auto">
            <h2 className="text-3xl font-light mb-4 tracking-wide">
              GETTING<br />STARTED
            </h2>
            <p className="text-lg mb-8">
              Put our sales and management<br />experience to work for you.
            </p>
            <Link href="/contact-us/"
                  className="border border-white px-8 py-3 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: '#226691' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <address className="not-italic text-lg leading-relaxed">
                <Link href="https://www.google.com/maps/place/Norris+%26+Stevens/@45.5170077,-122.6801647,17z/data=!3m1!4b1!4m5!3m4!1s0x54950a04fc3b1207:0xa3ff70ae738a8fe6!8m2!3d45.517004!4d-122.677976"
                      className="hover:text-blue-200">
                  900 SW 5th Avenue, 17th Floor<br />
                  Portland, OR 97204
                </Link><br />
                <Link href="mailto:info@norris-stevens.com" className="hover:text-blue-200">
                  info@norris-stevens.com
                </Link><br />
                Phone: <Link href="tel:503-223-3171" className="hover:text-blue-200">503.223.3171</Link><br />
                Fax: 503.228.2136
              </address>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-6">
                <Link href="https://www.facebook.com/norrisandstevens/?ref=aymt_homepage_panel" className="hover:opacity-75">
                  <Image src="https://ext.same-assets.com/2579185083/3033146840.svg" alt="Facebook" width={24} height={24} />
                </Link>
                <Link href="https://twitter.com/NorrisStevens" className="hover:opacity-75">
                  <Image src="https://ext.same-assets.com/2579185083/1395206.svg" alt="Twitter" width={24} height={24} />
                </Link>
                <Link href="https://www.instagram.com/norris_stevens_pdx/" className="hover:opacity-75">
                  <Image src="https://ext.same-assets.com/2579185083/663603499.svg" alt="Instagram" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/company/norris-&-stevens-inc./" className="hover:opacity-75">
                  <Image src="https://ext.same-assets.com/2579185083/1220432129.svg" alt="LinkedIn" width={24} height={24} />
                </Link>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-1 gap-4">
              <Link href="/careers/" className="hover:text-blue-200">Careers</Link>
              <Link href="/properties" className="hover:text-blue-200">Commercial Property Listings</Link>
              <Link href="http://intranet.norris-stevens.com/" className="hover:text-blue-200">Corporate Intranet</Link>
              <Link href="https://mail.office365.com" className="hover:text-blue-200">Corporate Email</Link>
              <Link href="https://www3.norris-stevens.com/" className="hover:text-blue-200">Docs Box</Link>
              <Link href="https://www.norris-stevens.com/privacy-policy/" className="hover:text-blue-200">Privacy Policy</Link>
            </div>
          </div>

          {/* Copyright and Logos */}
          <div className="border-t border-blue-500 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © 2024 Norris & Stevens, Inc. |
              <Link href="http://www.gravitatedesign.com/portland-web-design/?utm_source=ClientServicesSite&utm_medium=referral&utm_content=www.norris-stevens.com&utm_campaign=portland"
                    className="hover:text-blue-200"> Portland Web Design by Gravitate</Link>
            </p>

            <div className="flex items-center space-x-6">
              <Link href="https://www.tcnworldwide.com/" className="hover:opacity-75">
                <Image
                  src="https://ext.same-assets.com/2579185083/1268751420.svg"
                  alt="TCN Logo"
                  width={80}
                  height={40}
                />
              </Link>
              <Link href="https://www.irem.org/credentials/for-companies/amo" className="hover:opacity-75">
                <Image
                  src="https://ext.same-assets.com/2579185083/2006983126.svg"
                  alt="AMO"
                  width={80}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
