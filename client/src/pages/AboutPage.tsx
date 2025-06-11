import { Target, Heart, Lightbulb, Award, Users, TrendingUp, Star } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sakshi Kadam",
      role: "Founder & Personal Branding Strategist", 
      emoji: "👩‍💼",
      description: "The brain behind SahaAakar. Sakshi handles everything from content strategy to brand voice, helping students and professionals build a standout presence on LinkedIn. She brings a strong vision and personal touch to every project."
    },
    {
      name: "Shubham Paikrao",
      role: " Co-founder & Creative Head",
      emoji: "👨‍💼", 
      description: "Shubham leads the design front at SahaAakar. From profile banners to brand kits, he crafts clean, striking visuals that align with your personality. His creativity makes our clients' first impression unforgettable."
    },
    {
      name: "Neha Pawar", 
      role: "Client Communication & Account Manager",
      emoji: "👨‍💻",
      description: "Neha manages client interactions and ensures smooth coordination across all projects. From onboarding to delivery, she keeps everything organized and clients informed. She's the friendly face behind every successful handoff."
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

  const impactStats = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      number: "50+",
      label: "Profiles Transformed",
      description: "Students & professionals empowered"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
      number: "200%",
      label: "Average Growth",
      description: "Profile views & engagement boost"
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-600" />,
      number: "95%",
      label: "Success Rate",
      description: "Client satisfaction guaranteed"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              🚀 About <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">SahaAakar</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Let's be real — your LinkedIn shouldn't look like a boring resume. At SahaAakar, we help students and early pros turn their profiles into opportunity magnets. From writing scroll-stopping headlines to designing banners that actually make people click — we make your online presence unforgettable. Because in today's world, your profile is your pitch — and we make sure it hits the mark.
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
                ✨ Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                It all started with a simple realization — most students and young professionals have great potential, but their LinkedIn profiles just don't show it.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We were in the same shoes once — confused about how to stand out, tired of watching others get noticed for opportunities we were equally capable of. So, we built SahaAakar — a space where personal branding becomes simple, smart, and authentic.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From helping friends rewrite their bios to now crafting digital identities that open doors — our journey is proof that with the right presence, anyone can grow. We're not just a branding agency. We're your creative team, your strategist, and your biggest cheerleader — all rolled into one.
              </p>
            </div>
            <div className="lg:pl-12">
              {/* Mission Statement Card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To bridge the gap between talent and opportunity by transforming how young professionals present themselves in the digital world. We believe everyone deserves to be seen, heard, and recognized for their unique potential.
                  </p>
                </div>
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
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600">
              Passionate LinkedIn specialists dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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
              Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Values</span>
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-600">
              Real results that speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {impactStats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-700 mb-2">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Additional Impact Highlights */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white border border-blue-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2">🎯 Fresh Perspective</h3>
              <p className="text-gray-600">Bringing innovative approaches to LinkedIn optimization with a focus on Gen-Z and millennial professionals</p>
            </div>
            <div className="bg-white border border-green-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2">🚀 Quick Results</h3>
              <p className="text-gray-600">Most clients see noticeable improvements in profile engagement within the first 2 weeks</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}