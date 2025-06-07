import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer", 
      initials: "RS",
      text: "SahaAakar transformed my LinkedIn presence completely. Within 3 months, I received 5 job offers and increased my network by 400%. Their content strategy is simply outstanding!",
      bgColor: "from-blue-600 to-blue-800"
    },
    {
      name: "Anita Patel",
      role: "Marketing Director",
      initials: "AP", 
      text: "As a marketing director, I needed to establish thought leadership. SahaAakar's team helped me become a recognized voice in the industry. My posts now get thousands of views!",
      bgColor: "from-purple-600 to-purple-800"
    },
    {
      name: "Vikram Kapoor",
      role: "Business Consultant",
      initials: "VK",
      text: "The ROI from SahaAakar's services is incredible. I've generated over ₹50 lakhs in business directly from LinkedIn connections. Their approach is data-driven and effective.",
      bgColor: "from-green-600 to-green-800"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real results from real professionals who transformed their LinkedIn presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.bgColor} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
