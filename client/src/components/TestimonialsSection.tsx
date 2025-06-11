import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aaditya Kulkarni",
      role: "Software Engineering Student", 
      initials: "AK",
      text: "SahaAakar helped me land my dream internship! My profile went from basic to professional, and recruiters started reaching out within weeks.",
      bgColor: "from-blue-600 to-blue-800"
    },
    {
      name: "Shruti Sharma",
      role: "Marketing Graduate",
      initials: "SS", 
      text: "I was struggling to get noticed by companies. After SahaAakar optimized my profile, I got interview calls from 3 top companies in just one month!",
      bgColor: "from-purple-600 to-purple-800"
    },
    {
      name: "Rohan Mehta",
      role: "Business Student",
      initials: "RM",
      text: "The content they created for me was amazing. My posts started getting hundreds of likes and comments. It really helped build my personal brand.",
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
