'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
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
                  <Link href="/services/commercial-sales-and-leasing" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">
                    Commercial Sales & Leasing
                  </Link>
                  <Link href="/services/commercial-property-management" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">
                    Commercial Property Management
                  </Link>
                  <Link href="/services/commercial-facility-management" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">
                    Commercial Facility Management
                  </Link>
                  <Link href="/services/multi-family-investment-sales" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">
                    Multi-family Investment Sales
                  </Link>
                  <Link href="/services/multi-family-property-management" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">
                    Multi-family Property Management
                  </Link>
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
                        <Link href="/properties?type=lease" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">
                          For Lease
                        </Link>
                        <Link href="/properties?type=sale" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">
                          For Sale
                        </Link>
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
                        <Link href="/multifamily" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">
                          Apartments for Rent
                        </Link>
                        <Link href="/multifamily?type=sale" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">
                          Apartments for Sale
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link href="/recent-transactions" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">
                    Recent Transactions
                  </Link>
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
                  <Link href="/our-people" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">
                    Our People
                  </Link>
                  <Link href="/careers" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">
                    Careers
                  </Link>
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
                  <Link href="/blog" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">
                    Blog
                  </Link>
                  <Link href="/market-reports" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">
                    Market Reports
                  </Link>
                  <Link href="/apartment-investors-journal" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#226691]">
                    Apartment Investors Journal
                  </Link>
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
            backgroundImage: `url('https://ext.same-assets.com/2579185083/4082757870.jpeg')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide">
            <span className="block font-bold">ABOUT US</span>
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light mb-6" style={{ color: '#226691' }}>
                LEADING COMMERCIAL REAL ESTATE IN THE PACIFIC NORTHWEST
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Since 1966, Norris & Stevens has been a trusted partner in commercial real estate throughout Oregon and Southwest Washington.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#226691' }}>Our History</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  For nearly 60 years, Norris & Stevens has provided clients with representation and expertise in all aspects of Investment Real Estate throughout the Pacific Northwest. We specialize in Brokerage, Property and Facilities Management, Development, Consultation, and Receiverships for both Commercial Properties and Multi-family Apartment communities.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Norris & Stevens assists families and Fortune 500 corporations alike in achieving their Real Estate investment goals while solving their unique problems. We are a locally-owned firm with National reach and representation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#226691' }}>Our Mission</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To provide exceptional commercial real estate services that exceed our clients' expectations while building long-term relationships based on trust, expertise, and results.
                </p>

                <h3 className="text-2xl font-light mb-4" style={{ color: '#226691' }}>Our Values</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Professional Excellence</li>
                  <li>• Client-First Approach</li>
                  <li>• Market Expertise</li>
                  <li>• Integrity & Trust</li>
                  <li>• Innovation & Growth</li>
                </ul>
              </div>
            </div>

            {/* Professional Affiliations */}
            <div className="text-center mb-16">
              <h3 className="text-2xl font-light mb-8" style={{ color: '#226691' }}>Professional Affiliations</h3>
              <div className="flex justify-center items-center space-x-12">
                <div className="text-center">
                  <Image
                    src="https://ext.same-assets.com/2579185083/1268751420.svg"
                    alt="TCN Worldwide"
                    width={120}
                    height={60}
                    className="mx-auto mb-4"
                  />
                  <p className="text-sm text-gray-600">TCN Worldwide<br />Real Estate Services</p>
                </div>
                <div className="text-center">
                  <Image
                    src="https://ext.same-assets.com/2579185083/2006983126.svg"
                    alt="AMO"
                    width={120}
                    height={60}
                    className="mx-auto mb-4"
                  />
                  <p className="text-sm text-gray-600">Accredited Management<br />Organization</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-light mb-4" style={{ color: '#226691' }}>
                READY TO WORK WITH US?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Contact our experienced team to discuss your commercial real estate needs.
              </p>
              <div className="space-x-4">
                <Link
                  href="/contact-us"
                  className="border border-gray-800 px-8 py-3 text-lg font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                  CONTACT US
                </Link>
                <Link
                  href="/our-people"
                  className="border border-gray-800 px-8 py-3 text-lg font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                  MEET OUR TEAM
                </Link>
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
              <Link href="https://mail.office365.com" className="hover:text-blue-200">Corporate Email</Link>
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
