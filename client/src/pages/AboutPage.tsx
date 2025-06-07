import { Target, Heart, Lightbulb, Award } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Arjun Mehta",
      role: "Founder & CEO", 
      emoji: "👨‍💼",
      description: "LinkedIn expert with 8+ years of experience helping professionals build powerful personal brands. Former Fortune 500 marketing executive with a passion for digital networking."
    },
    {
      name: "Priya Singh",
      role: "Head of Strategy",
      emoji: "👩‍💼", 
      description: "Content strategist with Fortune 500 experience, specializing in personal branding and thought leadership. Expert in creating compelling LinkedIn content that drives engagement."
    },
    {
      name: "Ravi Kumar", 
      role: "Growth Specialist",
      emoji: "👨‍💻",
      description: "Data-driven growth hacker who specializes in LinkedIn algorithm optimization and networking strategies. Proven track record of achieving 400%+ growth rates for clients."
    },
    {
      name: "Neha Patel",
      role: "Content Director",
      emoji: "👩‍🎨",
      description: "Creative writer and storyteller who crafts compelling narratives for LinkedIn profiles and content. Expert in turning professional experiences into engaging stories."
    }
  ];

  const companyValues = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Results-Driven",
      description: "We measure success by your success. Every strategy is designed to deliver measurable, meaningful results."
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Client-Centric", 
      description: "Your goals become our goals. We provide personalized attention and strategies tailored to your unique needs."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: "Innovation",
      description: "We stay ahead of LinkedIn's evolving landscape, constantly innovating our strategies and approaches."
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from strategy development to client communication."
    }
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a vision to transform LinkedIn presence" },
    { year: "2021", title: "1K+ Clients", description: "Reached our first major milestone" },
    { year: "2022", title: "Team Expansion", description: "Grew to a team of 15+ LinkedIn specialists" },
    { year: "2023", title: "10K+ Success Stories", description: "Celebrated 10,000 professionals transformed" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              About <span className="gradient-text">SahaAakar</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're a team of LinkedIn experts dedicated to helping professionals and businesses unlock the full potential of their LinkedIn presence. Since 2020, we've helped over 10,000 professionals transform their careers through strategic LinkedIn growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2020 with a simple mission: to democratize professional networking and help everyone leverage LinkedIn's power for career growth. What started as a small consulting practice has grown into a comprehensive LinkedIn growth agency.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our founders recognized that while LinkedIn is the world's largest professional network, most professionals weren't maximizing its potential. We set out to change that by providing expert guidance, proven strategies, and measurable results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we've helped thousands of professionals across industries transform their LinkedIn presence, with an average growth rate of 500% and a 95% success rate in achieving client goals.
              </p>
            </div>
            <div className="lg:pl-12">
              {/* Company timeline */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600">
              Passionate LinkedIn specialists dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{member.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-yellow-400">Impact</span>
            </h2>
            <p className="text-xl text-blue-100">
              Numbers that showcase our commitment to client success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">10,000+</div>
              <div className="text-lg text-blue-100">Profiles Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">500%</div>
              <div className="text-lg text-blue-100">Average Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-lg text-blue-100">Client Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">4+</div>
              <div className="text-lg text-blue-100">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
