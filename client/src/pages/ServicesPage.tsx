import { UserCheck, Edit3, Users, BarChart3, Star, Building, Check } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <UserCheck className="w-6 h-6 text-white" />,
      title: "Profile Optimization",
      description: "Transform your LinkedIn profile into a powerful personal brand that attracts opportunities and connections.",
      features: [
        "Professional headline optimization",
        "Compelling summary creation", 
        "Experience section enhancement",
        "Skills & endorsements strategy",
        "Photo & banner optimization"
      ],
      price: "₹4,999",
      period: "One-time payment",
      buttonText: "Get Started"
    },
    {
      icon: <Edit3 className="w-6 h-6 text-white" />,
      title: "Content Strategy", 
      description: "Develop and execute a content strategy that positions you as a thought leader in your industry.",
      features: [
        "Weekly content creation (4 posts)",
        "Content calendar planning",
        "Industry trend analysis",
        "Engagement optimization",
        "Performance tracking"
      ],
      price: "₹7,999",
      period: "Per month",
      buttonText: "Get Started"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Network Growth",
      description: "Strategic networking approach to connect with industry leaders and potential collaborators.",
      features: [
        "Targeted connection strategies",
        "Personalized outreach messages", 
        "Relationship nurturing",
        "Industry event recommendations",
        "Weekly progress reports"
      ],
      price: "₹6,999",
      period: "Per month",
      buttonText: "Get Started"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Analytics & Insights",
      description: "Track your LinkedIn performance with detailed analytics and actionable insights.",
      features: [
        "Performance tracking dashboard",
        "Engagement analysis",
        "Growth recommendations",
        "Competitor analysis", 
        "Monthly reports"
      ],
      price: "₹3,999",
      period: "Per month",
      buttonText: "Get Started"
    },
    {
      icon: <Star className="w-6 h-6 text-white" />,
      title: "Personal Branding",
      description: "Build a strong personal brand that differentiates you from competitors and attracts opportunities.",
      features: [
        "Brand strategy development",
        "Visual identity creation",
        "Thought leadership positioning",
        "Content theme development",
        "Brand voice definition"
      ],
      price: "₹12,999", 
      period: "3-month package",
      buttonText: "Get Started"
    },
    {
      icon: <Building className="w-6 h-6 text-white" />,
      title: "Enterprise Solutions",
      description: "Comprehensive LinkedIn strategies for teams and organizations to enhance their collective presence.",
      features: [
        "Team training programs",
        "Company page optimization",
        "Employee advocacy programs",
        "Dedicated account manager",
        "Custom reporting dashboard"
      ],
      price: "Custom",
      period: "Contact for pricing",
      buttonText: "Contact Sales",
      isEnterprise: true
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive LinkedIn growth solutions designed to elevate your professional presence and achieve your career goals. From profile optimization to enterprise-level strategies, we have the expertise to transform your LinkedIn success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  service.isEnterprise 
                    ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white hover:shadow-2xl'
                    : 'bg-gray-50 hover:shadow-xl hover:bg-white'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                  service.isEnterprise ? 'bg-white/20' : 'bg-gradient-to-r from-blue-600 to-blue-800'
                }`}>
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${service.isEnterprise ? 'text-white' : 'text-gray-800'}`}>
                  {service.title}
                </h3>
                <p className={`mb-6 ${service.isEnterprise ? 'text-blue-100' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 ${service.isEnterprise ? 'text-white' : 'text-gray-800'}`}>
                    What's Included:
                  </h4>
                  <ul className={`space-y-2 text-sm ${service.isEnterprise ? 'text-blue-100' : 'text-gray-600'}`}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className={`w-4 h-4 ${service.isEnterprise ? 'text-green-400' : 'text-green-500'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`border-t pt-6 ${service.isEnterprise ? 'border-white/20' : 'border-gray-100'}`}>
                  <div className={`text-3xl font-bold mb-4 ${service.isEnterprise ? 'text-white' : 'gradient-text'}`}>
                    {service.price}
                  </div>
                  <div className={`text-sm mb-4 ${service.isEnterprise ? 'text-blue-200' : 'text-gray-500'}`}>
                    {service.period}
                  </div>
                  <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    service.isEnterprise 
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-lg'
                  }`}>
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
