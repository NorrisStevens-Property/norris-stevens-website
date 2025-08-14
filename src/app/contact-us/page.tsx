'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactUs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="https://ext.same-assets.com/2579185083/1055600607.svg"
                alt="Norris & Stevens"
                width={200}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/services" className="text-gray-700 font-medium hover:text-[#226691] flex items-center">
                Services ▼
              </Link>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white shadow-lg border z-50">
                  <Link href="/services/commercial-sales-and-leasing" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">Commercial Sales & Leasing</Link>
                  <Link href="/services/commercial-property-management" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">Commercial Property Management</Link>
                  <Link href="/services/commercial-facility-management" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">Commercial Facility Management</Link>
                  <Link href="/services/multi-family-investment-sales" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">Multi-family Investment Sales</Link>
                  <Link href="/services/multi-family-property-management" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">Multi-family Property Management</Link>
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('properties')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/properties" className="text-gray-700 font-medium hover:text-[#226691] flex items-center">
                Properties ▼
              </Link>
              {activeDropdown === 'properties' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg border z-50">
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveSubDropdown('commercial')}
                    onMouseLeave={() => setActiveSubDropdown(null)}
                  >
                    <Link href="/properties" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691] flex items-center justify-between">
                      Commercial Properties →
                    </Link>
                    {activeSubDropdown === 'commercial' && (
                      <div className="absolute top-0 left-full ml-1 w-48 bg-white shadow-lg border z-50">
                        <Link href="/properties?type=lease" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">For Lease</Link>
                        <Link href="/properties?type=sale" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">For Sale</Link>
                      </div>
                    )}
                  </div>
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveSubDropdown('multifamily')}
                    onMouseLeave={() => setActiveSubDropdown(null)}
                  >
                    <Link href="/multifamily" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691] flex items-center justify-between">
                      Multifamily Properties →
                    </Link>
                    {activeSubDropdown === 'multifamily' && (
                      <div className="absolute top-0 left-full ml-1 w-48 bg-white shadow-lg border z-50">
                        <Link href="/multifamily" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">Apartments for Rent</Link>
                        <Link href="/multifamily?type=sale" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">Apartments for Sale</Link>
                      </div>
                    )}
                  </div>
                  <Link href="/recent-transactions" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">Recent Transactions</Link>
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/about-us" className="text-gray-700 font-medium hover:text-[#226691] flex items-center">
                About Us ▼
              </Link>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg border z-50">
                  <Link href="/our-people" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">Our People</Link>
                  <Link href="/careers" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">Careers</Link>
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/resources" className="text-gray-700 font-medium hover:text-[#226691] flex items-center">
                Resources ▼
              </Link>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg border z-50">
                  <Link href="/blog" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">Blog</Link>
                  <Link href="/market-reports" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">Market Reports</Link>
                  <Link href="/apartment-investors-journal" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">Apartment Investors Journal</Link>
                </div>
              )}
            </div>

            <Link href="/contact-us" className="text-gray-700 font-medium hover:text-[#226691]">
              Contact Us
            </Link>
          </nav>

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

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/services" className="block text-gray-700 font-medium hover:text-[#226691]">Services</Link>
              <Link href="/properties" className="block text-gray-700 font-medium hover:text-[#226691]">Properties</Link>
              <Link href="/about-us" className="block text-gray-700 font-medium hover:text-[#226691]">About Us</Link>
              <Link href="/resources" className="block text-gray-700 font-medium hover:text-[#226691]">Resources</Link>
              <Link href="/contact-us" className="block text-gray-700 font-medium hover:text-[#226691]">Contact Us</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/2579185083/3750125637.jpeg')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide">
            <span className="block font-bold">CONTACT US</span>
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light mb-6" style={{ color: '#226691' }}>
                GET IN TOUCH WITH OUR TEAM
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to discuss your commercial real estate needs? Our experienced team is here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-light mb-6" style={{ color: '#226691' }}>Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="commercial-sales">Commercial Sales & Leasing</option>
                      <option value="property-management">Property Management</option>
                      <option value="facility-management">Facility Management</option>
                      <option value="investment-sales">Investment Sales</option>
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your commercial real estate needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 text-white font-medium rounded-lg transition-colors duration-300"
                    style={{ backgroundColor: '#226691' }}
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-light mb-6" style={{ color: '#226691' }}>Contact Information</h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Email</h4>
                    <p className="text-gray-600">
                      <Link href="mailto:management@norrisstevensproperty.com" className="hover:text-blue-600">
                        management@norrisstevensproperty.com
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Phone</h4>
                    <p className="text-gray-600">
                      <Link href="tel:503-912-8490" className="hover:text-blue-600">
                        503-912-8490
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Business Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: By Appointment</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <Link href="https://www.facebook.com/norrisandstevens/?ref=aymt_homepage_panel" className="hover:opacity-75">
                        <Image src="https://ext.same-assets.com/2579185083/3033146840.svg" alt="Facebook" width={32} height={32} />
                      </Link>
                      <Link href="https://twitter.com/NorrisStevens" className="hover:opacity-75">
                        <Image src="https://ext.same-assets.com/2579185083/1395206.svg" alt="Twitter" width={32} height={32} />
                      </Link>
                      <Link href="https://www.instagram.com/norris_stevens_pdx/" className="hover:opacity-75">
                        <Image src="https://ext.same-assets.com/2579185083/663603499.svg" alt="Instagram" width={32} height={32} />
                      </Link>
                      <Link href="https://www.linkedin.com/company/norris-&-stevens-inc./" className="hover:opacity-75">
                        <Image src="https://ext.same-assets.com/2579185083/1220432129.svg" alt="LinkedIn" width={32} height={32} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: '#226691' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <address className="not-italic text-lg leading-relaxed">
                <Link href="mailto:management@norrisstevensproperty.com" className="hover:text-blue-200">
                  management@norrisstevensproperty.com
                </Link><br />
                Phone: <Link href="tel:503-912-8490" className="hover:text-blue-200">503-912-8490</Link>
              </address>

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

            <div className="grid grid-cols-1 gap-4">
              <Link href="/careers/" className="hover:text-blue-200">Careers</Link>
              <Link href="/properties" className="hover:text-blue-200">Commercial Property Listings</Link>
              <Link href="http://intranet.norris-stevens.com/" className="hover:text-blue-200">Corporate Intranet</Link>

              <Link href="https://www3.norris-stevens.com/" className="hover:text-blue-200">Docs Box</Link>
              <Link href="https://www.norris-stevens.com/privacy-policy/" className="hover:text-blue-200">Privacy Policy</Link>
            </div>
          </div>

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
