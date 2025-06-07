import { useState } from 'react';
import { Search, User, Calendar, Clock } from 'lucide-react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'linkedin-tips', label: 'LinkedIn Tips' },
    { id: 'personal-branding', label: 'Personal Branding' },
    { id: 'networking', label: 'Networking' },
    { id: 'content-strategy', label: 'Content Strategy' },
    { id: 'career-growth', label: 'Career Growth' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "5 Advanced LinkedIn Networking Strategies That Actually Work",
      excerpt: "Move beyond basic connection requests with these proven networking strategies that build meaningful professional relationships.",
      author: "Priya Singh",
      authorInitials: "PS",
      date: "Dec 12, 2023",
      readTime: "5 min read",
      category: "networking",
      categoryLabel: "Networking",
      categoryColor: "bg-green-100 text-green-800"
    },
    {
      id: 2,
      title: "How to Create LinkedIn Content That Gets 10x More Engagement",
      excerpt: "Learn the content formats, posting strategies, and engagement tactics that top LinkedIn creators use to maximize their reach.",
      author: "Neha Patel", 
      authorInitials: "NP",
      date: "Dec 10, 2023",
      readTime: "7 min read",
      category: "content-strategy",
      categoryLabel: "Content Strategy",
      categoryColor: "bg-purple-100 text-purple-800"
    },
    {
      id: 3,
      title: "Building Your Personal Brand on LinkedIn: A Step-by-Step Guide",
      excerpt: "Transform your LinkedIn presence into a powerful personal brand that attracts opportunities and establishes you as an industry leader.",
      author: "Arjun Mehta",
      authorInitials: "AM", 
      date: "Dec 8, 2023",
      readTime: "6 min read",
      category: "personal-branding",
      categoryLabel: "Personal Branding",
      categoryColor: "bg-orange-100 text-orange-800"
    },
    {
      id: 4,
      title: "LinkedIn Analytics Decoded: Metrics That Actually Matter for Growth",
      excerpt: "Cut through the noise and focus on the LinkedIn metrics that truly indicate growth and help you optimize your strategy for better results.",
      author: "Ravi Kumar",
      authorInitials: "RK",
      date: "Dec 5, 2023", 
      readTime: "4 min read",
      category: "linkedin-tips",
      categoryLabel: "LinkedIn Tips",
      categoryColor: "bg-blue-100 text-blue-800"
    },
    {
      id: 5,
      title: "From Invisible to Influential: The LinkedIn Transformation Journey",
      excerpt: "Real case studies of professionals who went from having minimal LinkedIn presence to becoming influential voices in their industries.",
      author: "Priya Singh",
      authorInitials: "PS",
      date: "Dec 3, 2023",
      readTime: "9 min read", 
      category: "career-growth",
      categoryLabel: "Career Growth",
      categoryColor: "bg-indigo-100 text-indigo-800"
    },
    {
      id: 6,
      title: "LinkedIn for Teams: Building a Cohesive Company Presence", 
      excerpt: "Learn how to coordinate your team's LinkedIn activities to create a powerful, unified company presence that amplifies everyone's individual efforts.",
      author: "Ravi Kumar",
      authorInitials: "RK",
      date: "Dec 1, 2023",
      readTime: "6 min read",
      category: "linkedin-tips",
      categoryLabel: "LinkedIn Tips", 
      categoryColor: "bg-red-100 text-red-800"
    }
  ];

  const featuredPost = {
    title: "The Ultimate Guide to LinkedIn Profile Optimization in 2024",
    excerpt: "Discover the latest LinkedIn profile optimization strategies that are driving results in 2024. From algorithm changes to new features, learn how to make your profile stand out in a competitive landscape.",
    author: "Arjun Mehta",
    authorInitials: "AM",
    role: "CEO & Founder", 
    date: "Dec 15, 2023",
    readTime: "8 min read",
    category: "LinkedIn Tips"
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              LinkedIn Growth <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert insights, proven strategies, and actionable tips to accelerate your LinkedIn success. Stay updated with the latest trends and best practices in professional networking.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Featured <span className="gradient-text">Article</span>
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                  alt="LinkedIn optimization guide" 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm">Featured</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{featuredPost.authorInitials}</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{featuredPost.author}</div>
                      <div className="text-sm text-gray-500">{featuredPost.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">{featuredPost.date}</div>
                    <div className="text-sm text-gray-500">{featuredPost.readTime}</div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={`https://images.unsplash.com/photo-${1550000000000 + post.id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400`}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${post.categoryColor}`}>
                      {post.categoryLabel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{post.authorInitials}</span>
                      </div>
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
