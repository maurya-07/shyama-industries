import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ShieldCheck, Award, Users, ArrowRight, Star } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Products data
  const productList = [
    {
      title: "Safety Helmet",
      desc: "High-impact protection with adjustable fit and ventilation system.",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQzyqYQdYyWfAwNZbac1UlA8Z9gj9eHirFmY5eQ55tylxsC5EsvH8yZaTIVvn2kzPsnSUnAhTAdHLjIX_qlF9B7FC2J2NNhY4MiOcFnoh8fvlSwl7G1TEjc",
      rating: 4.8,
      category: "Head Protection"
    },
    {
      title: "Hi-Vis Safety Vest",
      desc: "Fluorescent vest with reflective strips for maximum visibility.",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTqEhYOOR0iP8_JhzGP_RTwyo6zYYHLR00Rb8C1rAJvwe9BecJE-dFronLXtHiajMMuUAAwzIZ_wnj7FY2Cncd_T7MCAjPJDGJOt4CkR5qoXWdmvWfjj_Eu",
      rating: 4.6,
      category: "Visibility"
    },
    {
      title: "Steel Toe Boots",
      desc: "Durable work boots with steel toe protection and slip resistance.",
      image: "https://hi-tec.com/cdn/shop/products/CADE7INWORKBOOT_CH80044M_T_1_352aad81-cd1d-4c89-819d-163204b29036.jpg?v=1676301995&width=2700",
      rating: 4.9,
      category: "Foot Protection"
    },
    {
      title: "Respirator Mask",
      desc: "N95 filtration system for protection against dust and particles.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpzao-_yzVM2fZpS90FN_kaq1xvYGQhRr7vw&s",
      rating: 4.7,
      category: "Respiratory"
    },
    {
      title: "Work Gloves",
      desc: "Cut-resistant gloves with enhanced grip and dexterity.",
      image: "https://firmgrip.com/cdn/shop/files/65242_Main_Product.jpg?v=1725372908",
      rating: 4.5,
      category: "Hand Protection"
    },
    {
      title: "Safety Harness",
      desc: "Full-body harness for fall protection and height safety.",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/7/TR/KU/QS/32410977/plastic-blue-rope-500x500.jpg",
      rating: 4.8,
      category: "Fall Protection"
    }
  ];

  // Stats data
  const stats = [
    { icon: ShieldCheck, number: "10,000+", label: "Sites Protected" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Star, number: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4' : 'bg-black/60 backdrop-blur-md py-4'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-8 h-8 text-orange-400" />
              <span className="text-2xl font-bold text-white">ShyamaIndustry</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-orange-400 font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-orange-400 font-medium transition-colors">About</a>
              <a href="#products" className="text-gray-300 hover:text-orange-400 font-medium transition-colors">Products</a>
              <a href="#contact" className="text-gray-300 hover:text-orange-400 font-medium transition-colors">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Contact Button */}
              <button className="hidden sm:flex items-center space-x-2 bg-green-500/80 backdrop-blur-sm hover:bg-green-500 text-white px-4 py-2 rounded-lg font-medium transition-all border border-green-500/30">
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>

              {/* Mobile menu button */}
              <button onClick={toggleMenu} className="md:hidden p-2 rounded-lg hover:bg-white/10 backdrop-blur-sm">
                {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-white/10 bg-black/60 backdrop-blur-xl rounded-lg">
              <nav className="flex flex-col space-y-3 px-4">
                <a href="#home" onClick={closeMenu} className="text-gray-300 hover:text-orange-400 font-medium">Home</a>
                <a href="#about" onClick={closeMenu} className="text-gray-300 hover:text-orange-400 font-medium">About</a>
                <a href="#products" onClick={closeMenu} className="text-gray-300 hover:text-orange-400 font-medium">Products</a>
                <a href="#contact" onClick={closeMenu} className="text-gray-300 hover:text-orange-400 font-medium">Contact</a>
                <button className="flex items-center space-x-2 bg-green-500/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium w-fit border border-green-500/30">
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Mobile: Image first, Desktop: Text first */}
            <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Protect Your Site with
                  <span className="text-orange-400"> Confidence</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Premium safety equipment and protection tools ensuring your construction site meets the highest international standards.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="flex items-center justify-center space-x-2 bg-orange-500/90 backdrop-blur-sm hover:bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all border border-orange-500/30 shadow-lg">
                  <Phone className="w-5 h-5" />
                  <span>Get Quote</span>
                </button>
                <button className="flex items-center justify-center space-x-2 border-2 border-white/20 hover:border-orange-500/50 bg-white/5 backdrop-blur-sm text-gray-300 hover:text-orange-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all">
                  <span>View Products</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile: Image first, Desktop: Image second */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
                <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 backdrop-blur-xl border border-orange-500/20 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Construction Safety"
                    className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 bg-orange-500/90 backdrop-blur-sm text-white p-3 rounded-full shadow-lg border border-orange-500/30">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-xl text-orange-400 p-3 rounded-full shadow-lg border border-orange-500/30">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-black/40 backdrop-blur-xl border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="About Us"
                  className="rounded-xl shadow-xl w-full h-96 object-cover"
                />
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="text-orange-400 font-semibold text-lg">About ShyamaIndustry</div>
                <h2 className="text-4xl font-bold text-white">
                  15+ Years of Safety Excellence
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We are committed to providing world-class safety tools and equipment for construction sites.
                  With years of experience and expert knowledge, we ensure that your site remains safe,
                  efficient, and compliant with modern safety standards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h3 className="text-xl font-semibold text-white">Quality Assured</h3>
                  <p className="text-gray-400">All products meet international safety standards</p>
                </div>
                <div className="space-y-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h3 className="text-xl font-semibold text-white">Expert Support</h3>
                  <p className="text-gray-400">24/7 technical assistance and consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive range of safety equipment designed to protect workers and ensure site compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productList.map((product, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden hover:shadow-2xl hover:bg-white/15 transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-orange-500/30">
                    {product.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{product.desc}</p>
                  <button className="w-full bg-orange-500/90 backdrop-blur-sm hover:bg-orange-500 text-white py-3 rounded-lg font-medium transition-all border border-orange-500/30">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-lg sm:text-xl text-gray-300 px-4">Ready to enhance your site safety? Contact us today.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-orange-500/30">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Location</h4>
                      <p className="text-sm sm:text-base text-gray-300">GB Road, Noida, INDIA</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/30">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <p className="text-sm sm:text-base text-gray-300">+91 999 888 777</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <p className="text-sm sm:text-base text-gray-300 break-all">shyamaindustries@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full">
              <div className="map h-64 sm:h-80 lg:h-82 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-xl p-2">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.124915012361!2d85.31642107525286!3d27.708955976199906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190e9b3eec5f%3A0x58ae4d47734fe5b0!2sKathmandu%20Durbar%20Square!5e0!3m2!1sen!2snp!4v1717331443991!5m2!1sen!2snp"
                  loading="lazy"
                  className="w-full h-full rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <ShieldCheck className="w-8 h-8 text-orange-400" />
                <span className="text-2xl font-bold text-white">ShyamaIndustry</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Leading provider of construction safety equipment and solutions.
                Protecting workers and ensuring site compliance since 2008.
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">About</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-orange-400 transition-colors">Products</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Products */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
              <ul className="space-y-2">
                <li><span className="text-gray-400">Safety Helmets</span></li>
                <li><span className="text-gray-400">Work Boots</span></li>
                <li><span className="text-gray-400">Protective Gear</span></li>
                <li><span className="text-gray-400">Safety Equipment</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="text-center text-gray-400">
              <p>© {new Date().getFullYear()} ShyamaIndustry. Made by <strong className="text-orange-400">Vishal Maurya</strong></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;