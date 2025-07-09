import React, { useState } from 'react';
import { 
  MessageCircle, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  Star,
  Smartphone,
  Globe,
  Zap,
  Shield,
  X,
  Play
} from 'lucide-react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    clinicName: '',
    contactMethod: 'email'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request:', formData);
    alert('Thank you! We\'ll contact you within 24 hours to schedule your personalized demo.');
    setFormData({ name: '', email: '', clinicName: '', contactMethod: 'email' });
    setShowModal(false);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/Public/Flowmatic.png" alt="AutoClinic Pro" className="h-8 w-8" />
              <span className="text-xl font-bold text-slate-800">AutoClinic Pro</span>
            </div>
            <button 
              onClick={openModal}
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
            >
              🎥 Watch Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Never Miss Another Patient Enquiry
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              AutoClinic Pro automatically responds to Instagram DMs and website chats 24/7, 
              books appointments instantly, and converts more leads into patients — even when your clinic is closed.
            </p>
            <button 
              onClick={openModal}
              className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
            >
              <Play className="h-5 w-5" />
              <span>🎥 Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Are You Losing Patients Every Day?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Most clinics struggle with these common problems that cost them patients and revenue
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Missed Instagram DMs</h3>
              <p className="text-slate-600 text-lg">
                Potential patients message you on Instagram but get no response for hours or days, 
                so they book with competitors instead.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">After-Hours Enquiries</h3>
              <p className="text-slate-600 text-lg">
                Your website gets visitors at night and weekends, but there's no one to answer 
                questions or book appointments.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Admin Overload</h3>
              <p className="text-slate-600 text-lg">
                Your staff spend hours answering the same questions about prices, availability, 
                and services instead of focusing on patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              How AutoClinic Pro Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get up and running in 3 simple steps — no technical knowledge required
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Quick Setup</h3>
              <p className="text-slate-600 text-lg">
                We connect AutoClinic Pro to your Instagram and website in under 30 minutes. 
                No coding or technical setup required.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Smart Training</h3>
              <p className="text-slate-600 text-lg">
                Our AI learns about your services, prices, and availability to provide 
                accurate, helpful responses that sound natural.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Instant Results</h3>
              <p className="text-slate-600 text-lg">
                Start converting more leads immediately. Your assistant works 24/7, 
                booking appointments and answering questions instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Everything You Need to Convert More Patients
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Powerful features designed specifically for healthcare practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <MessageCircle className="h-8 w-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Automated Replies</h3>
              <p className="text-slate-600">Respond to Instagram DMs and website chats within seconds, 24/7</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <Calendar className="h-8 w-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Direct Booking Links</h3>
              <p className="text-slate-600">Send patients straight to your booking system with one click</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <Shield className="h-8 w-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Branded Experience</h3>
              <p className="text-slate-600">Responses match your clinic's tone and branding perfectly</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <Users className="h-8 w-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lead Capture</h3>
              <p className="text-slate-600">Automatically collect contact details from interested patients</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <Smartphone className="h-8 w-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-Platform Support</h3>
              <p className="text-slate-600">Works on Instagram, your website, and other messaging platforms</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <Zap className="h-8 w-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Handoff</h3>
              <p className="text-slate-600">Seamlessly transfers complex queries to your team when needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl lg:text-3xl text-slate-700 mb-8 leading-relaxed">
              "AutoClinic Pro has transformed our patient booking process. We're now capturing 
              leads that would have been lost before, and our staff can focus on patient care 
              instead of answering the same questions all day."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">Dr. Sarah Mitchell</div>
                <div className="text-slate-600">Brighton Dental Practice</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Stop Losing Patients?
          </h2>
          <p className="text-xl lg:text-2xl mb-8 opacity-90">
            See exactly how AutoClinic Pro can transform your practice with a personalized demo
          </p>
          <button 
            onClick={openModal}
            className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
          >
            <Play className="h-5 w-5" />
            <span>🎥 Watch Demo</span>
          </button>
          <p className="text-sm mt-4 opacity-75">
            Free demo • No commitment • See results in 24 hours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/Public/Flowmatic.png" alt="AutoClinic Pro" className="h-8 w-8" />
              <span className="text-xl font-bold">AutoClinic Pro</span>
            </div>
            <div className="text-slate-400">
              © 2024 AutoClinic Pro. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Your Demo</h3>
              <p className="text-slate-600">We'll contact you within 24 hours to schedule your personalized demo</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="clinicName" className="block text-sm font-medium text-slate-700 mb-1">Clinic Name</label>
                <input
                  type="text"
                  id="clinicName"
                  name="clinicName"
                  value={formData.clinicName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  placeholder="Your clinic name"
                />
              </div>

              <div>
                <label htmlFor="contactMethod" className="block text-sm font-medium text-slate-700 mb-1">Preferred Contact Method</label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                >
                  <option value="email">Email</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Request Demo
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;