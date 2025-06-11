import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useRouter } from '../hooks/useRouter';

export default function Footer() {
  const { navigateTo } = useRouter();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-white">SahaAakar</span>
            </div>
            <p className="text-gray-300 mb-4">
              Transform your LinkedIn presence into a powerful personal brand that attracts opportunities and accelerates career growth.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/sakshi1008/"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a
                href=""
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a> */}
              <a
                href=""
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors"
                >
                  Profile Optimization
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors"
                >
                  Content Strategy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors"
                >
                  Network Growth
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors"
                >
                  Analytics & Insights
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors"
                >
                  Personal Branding
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors"
                >
                  Enterprise Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => navigateTo('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('blog')}
                  className="hover:text-white transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>connect.sahaakar@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 84460 05148</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>
                  Nashik, Maharashtra, <br />
                  India<br />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SahaAakar. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
