import { useState, useEffect } from 'react';
import { TrendingUp, Users, Eye, MessageCircle, Share2, BarChart3 } from 'lucide-react';

// Mock hooks for demonstration
const useAnimatedCounter = (target, duration, suffix = '') => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target, duration]);
  
  return count + suffix;
};

const useRouter = () => ({
  navigateTo: (route) => console.log(`Navigating to: ${route}`)
});

export default function HeroSection() {
  const { navigateTo } = useRouter();
  const profilesCount = useAnimatedCounter(100, 2000);
  const successRate = useAnimatedCounter(95, 2000, '%');
  
  // Animated metrics for the dashboard
  const profileViews = useAnimatedCounter(2847, 2500);
  const connections = useAnimatedCounter(1234, 2200);
  const postEngagement = useAnimatedCounter(89, 2800, '%');

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Grow Your LinkedIn</span><br />
              <span className="text-gray-800">Presence Like</span><br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Never Before</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your LinkedIn profile into a powerful personal brand that attracts opportunities, builds meaningful connections, and accelerates your career growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => navigateTo('register')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Growing Today
              </button>
            </div>

            {/* Animated Statistics */}
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              <div className="text-center animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{profilesCount}+</div>
                <div className="text-sm text-gray-600">Profiles Optimized</div>
              </div>
              <div className="text-center animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{successRate}</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* LinkedIn Analytics Dashboard */}
          <div className="animate-[fadeIn_1s_ease-out_0.6s_both] lg:pl-8">
            <div className="relative">
              {/* Main Dashboard */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
                {/* Gradient Background Accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">LinkedIn Analytics</h3>
                      <p className="text-sm text-gray-500">Last 30 days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">+245%</span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Profile Views</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-700">{profileViews.toLocaleString()}</div>
                    <div className="text-xs text-green-600 font-medium">↗ +89% from last month</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-600">New Connections</span>
                    </div>
                    <div className="text-2xl font-bold text-green-700">{connections.toLocaleString()}</div>
                    <div className="text-xs text-green-600 font-medium">↗ +156% from last month</div>
                  </div>
                </div>

                {/* Engagement Chart Simulation */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Post Engagement</span>
                    <span className="text-lg font-bold text-purple-600">{postEngagement}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-2000 ease-out"
                      style={{ width: `${postEngagement.replace('%', '')}%` }}
                    ></div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Recent Activity</h4>
                  
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">New post reached 1,2K+ views</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <Share2 className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">Profile shared by 23 people</p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Success Indicators */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-2xl shadow-lg animate-bounce">
                <TrendingUp className="w-6 h-6" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-2xl shadow-lg animate-pulse">
                <Users className="w-6 h-6" />
              </div>
              
              {/* Additional floating metric */}
              <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
                <span className="text-sm font-bold">89% ↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}