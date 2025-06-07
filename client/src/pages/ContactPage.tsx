import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Instagram, ChevronDown } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    acceptTerms: false
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    if (!formData.acceptTerms) {
      alert('Please accept the Privacy Policy and Terms of Service.');
      return;
    }
    
    // Form submission logic would go here
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      acceptTerms: false
    });
  };

  const faqs = [
    {
      question: "How quickly will I see results from LinkedIn optimization?",
      answer: "Most clients see noticeable improvements within 2-4 weeks, including increased profile views, connection requests, and engagement. Significant results typically appear within 30-60 days of implementing our strategies."
    },
    {
      question: "Do you guarantee specific results?",
      answer: "While we can't guarantee specific numbers due to varying factors, we have a 95% success rate in helping clients achieve their LinkedIn goals. We offer result-oriented strategies backed by data and experience."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, our monthly subscriptions can be cancelled anytime with 30 days notice. We also offer flexible payment options and can pause services if needed."
    },
    {
      question: "Do you work with all industries?",
      answer: "Yes, we have experience across various industries including tech, finance, healthcare, consulting, real estate, and more. Our strategies are customized based on industry-specific best practices."
    },
    {
      question: "What makes SahaAakar different from other LinkedIn agencies?",
      answer: "Our data-driven approach, personalized strategies, and proven track record set us apart. We focus on authentic growth, provide detailed analytics, and offer ongoing support to ensure sustainable results."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your LinkedIn presence? Let's discuss your goals and create a customized strategy that delivers results. Our team is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="profile-optimization">Profile Optimization</option>
                    <option value="content-strategy">Content Strategy</option>
                    <option value="network-growth">Network Growth</option>
                    <option value="analytics-insights">Analytics & Insights</option>
                    <option value="personal-branding">Personal Branding</option>
                    <option value="enterprise-solutions">Enterprise Solutions</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your goals and how we can help..."
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <label htmlFor="acceptTerms" className="text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>{' '}
                    and{' '}
                    <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you succeed. Reach out through any of these channels and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email Us</h3>
                    <p className="text-gray-600">hello@sahaAakar.com</p>
                    <p className="text-gray-600">support@sahaAakar.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Call Us</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Business Center,<br />
                      Sector 15, Gurgaon,<br />
                      Haryana 122001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="font-bold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-lg font-bold text-gray-800">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="mt-4 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
