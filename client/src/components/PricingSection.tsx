import { Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "₹4,999",
      period: "One-time",
      description: "Perfect for individuals starting their LinkedIn journey",
      features: [
        "Complete profile optimization",
        "Professional headline & summary",
        "Experience section enhancement", 
        "Skills & endorsements strategy",
        "Basic networking guidance"
      ],
      buttonText: "Get Started",
      isPopular: false
    },
    {
      name: "Professional", 
      price: "₹7,999",
      period: "per month",
      description: "Comprehensive growth solution for professionals",
      features: [
        "Everything in Starter",
        "Weekly content creation",
        "Advanced networking strategy",
        "Performance analytics", 
        "Monthly strategy calls",
        "Priority support"
      ],
      buttonText: "Get Started",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact for pricing", 
      description: "Complete solution for teams and organizations",
      features: [
        "Everything in Professional",
        "Team training programs",
        "Company page optimization",
        "Employee advocacy programs",
        "Dedicated account manager",
        "Custom reporting dashboard"
      ],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Choose Your <span className="gradient-text">Growth Plan</span>
          </h2>
          <p className="text-xl text-gray-600">
            Flexible pricing options designed to fit your goals and budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 relative ${
                plan.isPopular 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white hover:shadow-2xl' 
                  : 'bg-gray-50 hover:shadow-xl hover:bg-white'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-gray-800'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-4 ${plan.isPopular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className={`text-4xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'gradient-text'}`}>
                  {plan.price}
                </div>
                <div className={`text-sm ${plan.isPopular ? 'text-blue-200' : 'text-gray-500'}`}>
                  {plan.period}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.isPopular ? 'text-green-400' : 'text-green-500'}`} />
                    <span className={plan.isPopular ? 'text-blue-100' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                  plan.isPopular 
                    ? 'bg-white text-blue-600 hover:bg-blue-50' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-lg'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
