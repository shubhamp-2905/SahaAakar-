import { UserCheck, Edit3, Users, BarChart3, Star, Building, Check } from 'lucide-react';
import { useRouter } from '../hooks/useRouter';

export default function ServicesPage() {
  const { navigateTo } = useRouter();
  
  const services = [
    {
      icon: <UserCheck className="w-6 h-6 text-white" />,
      title: "🚀 Profile Optimization",
      description: "Rewrite your bio, headline, and entire profile to make it recruiter-ready and connection-worthy.",
      features: [
        "Professional headline rewrite",
        "Compelling bio creation", 
        "Experience section enhancement",
        "Skills optimization",
        "Photo & banner design"
      ],
      price: "₹499",
      period: "One-time",
      buttonText: "Get Started"
    },
    {
      icon: <Edit3 className="w-6 h-6 text-white" />,
      title: "🎨 Visual Branding", 
      description: "Custom banners and color themes that make your profile pop — even at a glance.",
      features: [
        "Custom banner design",
        "Color theme creation",
        "Visual identity guidelines",
        "Profile photo optimization",
        "Brand consistency check"
      ],
      price: "₹749",
      period: "Monthly",
      buttonText: "Get Started"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "✍️ Ghostwritten Posts",
      description: "Don't know what to post? We'll write content that reflects you, gets reach, and builds credibility.",
      features: [
        "4-12 custom posts per month",
        "Industry-relevant content", 
        "Engagement-optimized writing",
        "Content calendar planning",
        "Performance tracking"
      ],
      price: "₹999",
      period: "Monthly",
      buttonText: "Get Started"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "📈 Growth Strategies",
      description: "Connection building, engagement plans, and everything you need to grow — minus the guesswork.",
      features: [
        "Connection strategy",
        "Engagement optimization",
        "Network growth tactics",
        "Analytics & insights", 
        "Weekly progress reports"
      ],
      price: "Included",
      period: "With all plans",
      buttonText: "Get Started"
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Analysis",
      description: "We analyze your current LinkedIn presence, goals, and industry to create a personalized strategy."
    },
    {
      number: "2", 
      title: "Strategy Development",
      description: "Our experts develop a comprehensive LinkedIn growth strategy tailored to your specific objectives."
    },
    {
      number: "3",
      title: "Implementation", 
      description: "We execute the strategy with precision, optimizing your profile and implementing growth tactics."
    },
    {
      number: "4",
      title: "Monitor & Optimize",
      description: "We continuously monitor results and optimize strategies to ensure sustained growth and success."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              🔧 Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We don't just edit LinkedIn profiles — we elevate them. Whether you're looking to land internships, connect with the right crowd, or build a standout digital identity, SahaAakar's got your back. Here's how we help you grow:
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 hover:shadow-xl hover:bg-white p-8 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="mb-6 text-gray-600">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-800">
                    What's Included:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <div className="text-3xl font-bold mb-4 gradient-text">
                    {service.price}
                  </div>
                  <div className="text-sm mb-4 text-gray-500">
                    {service.period}
                  </div>
                  <button 
                    onClick={() => navigateTo('register')}
                    className="w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-lg"
                  >
                    {service.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600">
              A proven 4-step approach to LinkedIn success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
