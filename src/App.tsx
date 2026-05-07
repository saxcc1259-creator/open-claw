import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream selection:bg-gold/30">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-navy focus:text-white focus:border-2 focus:border-gold focus:rounded-sm focus:font-bold focus:shadow-2xl"
      >
        Skip to Content
      </a>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex flex-col">
              <span className="text-navy font-bold text-lg md:text-xl tracking-tight">JC REALTY & INVESTMENT CO.</span>
              <span className="text-gold text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase">John Cho | License #00825802</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-navy/80 hover:text-navy transition-colors font-medium">About</a>
              <a href="#services" className="text-navy/80 hover:text-navy transition-colors font-medium">Services</a>
              <a href="#areas" className="text-navy/80 hover:text-navy transition-colors font-medium">Areas</a>
              <a href="tel:2137614298" className="bg-navy text-white px-5 py-2.5 rounded-sm hover:bg-navy/90 transition-all font-semibold flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (213) 761-4298
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-navy p-2"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          id="mobile-menu"
          className={`md:hidden bg-white border-b border-gold/10 px-4 space-y-4 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 py-6 opacity-100 visible' : 'max-h-0 py-0 opacity-0 invisible'
          }`}
        >
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-navy/80 hover:text-navy font-medium text-lg">About</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-navy/80 hover:text-navy font-medium text-lg">Services</a>
          <a href="#areas" onClick={() => setIsMenuOpen(false)} className="block text-navy/80 hover:text-navy font-medium text-lg">Areas</a>
          <a href="tel:2137614298" className="flex items-center text-gold font-bold text-lg pt-2">
            <Phone className="w-5 h-5 mr-2" />
            (213) 761-4298
          </a>
        </div>
      </nav>

      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy/40 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Home in Los Angeles"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
              Your <span className="text-gold font-normal italic">Los Angeles</span> <br />
              Real Estate Expert
            </h1>
            <p className="text-xl md:text-2xl font-light mb-10 text-white/90 leading-relaxed">
              Specializing in Mid-City, Arlington Heights, Miracle Mile, and Wilshire Highlands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:2137614298"
                className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-sm font-bold text-lg transition-all text-center shadow-lg"
              >
                Get a Free Consultation
              </a>
              <a
                href="#services"
                className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all text-center"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 border-t-2 border-l-2 border-gold -z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Architecture"
                className="relative z-10 w-full h-[600px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-navy text-white p-8 z-20 shadow-xl">
                <p className="text-4xl font-serif font-bold text-gold">24+</p>
                <p className="text-sm uppercase tracking-widest font-semibold">Years Experience</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-gold uppercase tracking-[0.3em] font-semibold text-sm">About John Cho</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-navy leading-tight">
                  Experienced. Professional. <br />Dedicated to Your Success.
                </h3>
              </div>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  With over 24 years of dedicated service in the Los Angeles real estate market, John Cho has built a reputation for excellence, integrity, and unparalleled market knowledge.
                </p>
                <p>
                  Representing both buyers and sellers, John specializes in a wide range of properties, from cozy residential homes to complex multi-family investment opportunities. His deep roots in the community provide clients with a distinct advantage in navigating the competitive LA landscape.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 border-t border-gold/20 pt-8">
                <div>
                  <h4 className="font-bold text-navy mb-2">Residential</h4>
                  <p className="text-sm text-slate-500">Expert guidance for first-time buyers and families.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Multi-Family</h4>
                  <p className="text-sm text-slate-500">Specialized knowledge in investment & income properties.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-gold uppercase tracking-[0.3em] font-semibold text-sm mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-navy">Tailored Real Estate Services</h3>
            <div className="w-24 h-1 bg-gold mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Buying", desc: "Personalized search and expert negotiation to find your perfect home." },
              { title: "Selling", desc: "Strategic marketing and pricing to ensure you get top dollar for your property." },
              { title: "Investment Properties", desc: "Data-driven insights to help you build and grow your real estate portfolio." },
              { title: "Multi-Family Homes", desc: "Specialized expertise in duplexes, triplexes, and larger residential income properties." }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-10 shadow-sm border border-gold/5 hover:border-gold/20 transition-all group">
                <div className="w-12 h-12 bg-navy text-gold flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-navy transition-colors">
                  <span className="font-serif text-xl font-bold">{idx + 1}</span>
                </div>
                <h4 className="text-xl font-serif text-navy mb-4 font-bold">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served Section */}
      <section id="areas" className="py-24 bg-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-gold uppercase tracking-[0.3em] font-semibold text-sm mb-4">Coverage</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-8">Serving the Heart of Los Angeles</h3>
              <p className="text-white/70 text-lg mb-12 leading-relaxed">
                Expert knowledge and representation across Mid-City and surrounding iconic Los Angeles neighborhoods.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Mid-City",
                  "Arlington Heights",
                  "Miracle Mile",
                  "Wilshire Highlands",
                  "Los Angeles County"
                ].map((area, idx) => (
                  <div key={idx} className="flex items-center space-x-4 border-l border-gold/30 pl-6 py-2">
                    <div className="w-2 h-2 bg-gold rotate-45"></div>
                    <span className="text-xl font-light">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[600px]">
              <div className="absolute inset-0 border border-gold/20 translate-x-4 translate-y-4"></div>
              <img
                src="https://images.unsplash.com/photo-1512418490979-92798ccc13a0?auto=format&fit=crop&q=80&w=1000"
                alt="Los Angeles Skyline"
                className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-gold uppercase tracking-[0.3em] font-semibold text-sm mb-4">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-navy mb-8">Ready to Start Your Journey?</h3>
            <p className="text-slate-600 text-xl mb-12 leading-relaxed">
              Whether you're looking to buy, sell, or invest, John Cho is here to provide the expert guidance you need.
            </p>

            <div className="bg-cream border border-gold/20 p-12 shadow-sm rounded-sm">
              <p className="text-navy font-serif text-3xl md:text-4xl font-bold mb-4">(213) 761-4298</p>
              <p className="text-gold uppercase tracking-widest font-semibold text-sm mb-8">Call or text to schedule a consultation</p>
              <a
                href="tel:2137614298"
                className="inline-block bg-navy text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-navy/90 transition-all shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy py-16 text-white border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-serif font-bold mb-2">JC REALTY & INVESTMENT CO.</h4>
              <p className="text-gold/80 text-sm tracking-widest mb-4">JOHN CHO | LICENSE #00825802</p>
              <p className="text-white/60 leading-relaxed max-w-sm">
                Professional real estate services specializing in residential and multi-family properties across Los Angeles.
              </p>
            </div>
            <div className="md:text-right space-y-4">
              <p className="text-white/60 uppercase tracking-widest text-xs">Headquarters</p>
              <p className="text-lg">Los Angeles, CA</p>
              <div className="pt-4 flex md:justify-end space-x-6">
                <a href="#about" className="text-white/60 hover:text-white transition-colors">About</a>
                <a href="#services" className="text-white/60 hover:text-white transition-colors">Services</a>
                <a href="#areas" className="text-white/60 hover:text-white transition-colors">Areas</a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} JC Realty & Investment Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
