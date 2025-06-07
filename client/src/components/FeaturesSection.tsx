import { UserCheck, Edit3, Users, BarChart3, Star, Building } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <UserCheck className="w-6 h-6 text-white" />,
      title: "Profile Optimization",
      description: "Transform your LinkedIn profile into a powerful personal brand that attracts the right opportunities and connections.",
      points: [
        "Professional headline writing",
        "Compelling summary creation", 
        "Experience optimization"
      ]
    },
    {
      icon: <Edit3 className="w-6 h-6 text-white" />,
      title: "Content Strategy",
      description: "Develop and execute a content strategy that positions you as a thought leader in your industry.",
      points: [
        "Content calendar planning",
        "Engaging post creation",
        "Industry trend analysis"
      ]
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Network Growth",
      description: "Strategic networking approach to connect with industry leaders and potential collaborators.",
      points: [
        "Targeted connection strategies",
        "Personalized outreach messages",
        "Relationship nurturing"
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Analytics & Insights",
      description: "Track your LinkedIn performance with detailed analytics and actionable insights.",
      points: [
        "Performance tracking",
        "Engagement analysis",
        "Growth recommendations"
      ]
    },
    {
      icon: <Star className="w-6 h-6 text-white" />,
      title: "Personal Branding",
      description: "Build a strong personal brand that differentiates you from competitors and attracts opportunities.",
      points: [
        "Brand strategy development",
        "Visual identity creation",
        "Thought leadership positioning"
      ]
    },
    {
      icon: <Building className="w-6 h-6 text-white" />,
      title: "Enterprise Solutions",
      description: "Comprehensive LinkedIn strategies for teams and organizations to enhance their collective presence.",
      points: [
        "Team training programs",
        "Company page optimization",
        "Employee advocacy programs"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="gradient-text">SahaAakar</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive LinkedIn growth solutions that deliver measurable results for professionals and businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-2xl card-hover group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="text-sm text-gray-500 space-y-2">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
