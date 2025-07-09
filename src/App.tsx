import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Users, 
  Database, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Zap,
  TrendingUp,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your interest! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold gradient-text">Flowmatic AI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">Contact</button>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 glow-effect"
            >
              Book a Call
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className={`relative z-10 text-center max-w-6xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="animate-float mb-8">
            <Bot className="h-20 w-20 mx-auto text-cyan-400 animate-pulse-glow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="block gradient-text">AI Automation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Streamline operations, boost conversions, and scale effortlessly with our cutting-edge AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 glow-effect flex items-center justify-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="border-2 border-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Services</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">Fresh</div>
              <div className="text-gray-400">Innovative Approach</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">100%</div>
              <div className="text-gray-400">Commitment to Quality</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">Custom</div>
              <div className="text-gray-400">Tailored Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI automation services designed to revolutionize your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition-all duration-300 hover:glow-effect group">
              <Bot className="h-12 w-12 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">AI Chat Agents</h3>
              <p className="text-gray-400 mb-6">Intelligent conversational AI that handles customer inquiries 24/7 with human-like responses</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Natural Language Processing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Multi-platform Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Custom Training</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-400 transition-all duration-300 hover:glow-effect group">
              <Users className="h-12 w-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Lead Generation</h3>
              <p className="text-gray-400 mb-6">AI-powered lead qualification and nurturing systems that convert prospects into customers</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Automated Prospecting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Lead Scoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Personalized Outreach</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-pink-400 transition-all duration-300 hover:glow-effect group">
              <Database className="h-12 w-12 text-pink-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">CRM Integration</h3>
              <p className="text-gray-400 mb-6">Seamless integration with your existing CRM systems for enhanced data management</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Data Synchronization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Workflow Automation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Analytics Dashboard</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-yellow-400 transition-all duration-300 hover:glow-effect group">
              <Globe className="h-12 w-12 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Website Development</h3>
              <p className="text-gray-400 mb-6">Modern, responsive websites optimized for conversions and AI integration</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>SEO Optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>AI-Ready Architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">Flowmatic AI</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We deliver results that matter to your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-br from-cyan-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Lightning Fast</h3>
              <p className="text-gray-400">Deploy AI solutions in days, not months. Get up and running quickly with our proven frameworks.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Proven Results</h3>
              <p className="text-gray-400">Our clients see an average 3x ROI within the first 6 months of implementation.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-gradient-to-br from-pink-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Enterprise Security</h3>
              <p className="text-gray-400">Bank-level security protocols ensure your data and customer information stays protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Book a free consultation and discover how AI automation can revolutionize your operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                  <p className="text-gray-400">We'll get back to you within 24 hours with a customized solution plan.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
                  <p className="text-gray-400">30-minute strategy session to identify automation opportunities in your business.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Star className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                  <p className="text-gray-400">Tailored AI automation strategies designed specifically for your industry and goals.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your automation needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 glow-effect flex items-center justify-center space-x-2"
                >
                  <span>Book Your Free Consultation</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Bot className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold gradient-text">Flowmatic AI</span>
              </div>
              <p className="text-gray-400">
                Transforming businesses through intelligent AI automation solutions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>AI Chat Agents</li>
                <li>Lead Generation</li>
                <li>CRM Integration</li>
                <li>Website Development</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>rob.f@flowmaticaisolution.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>United Kingdom</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Flowmatic AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;