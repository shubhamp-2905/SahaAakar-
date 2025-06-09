import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { useRouter } from '../hooks/useRouter';

export default function HeroSection() {
  const { navigateTo } = useRouter();
  const profilesCount = useAnimatedCounter(100, 2000);
  const successRate = useAnimatedCounter(95, 2000, '%');

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Grow Your LinkedIn</span><br />
              <span className="text-gray-800">Presence Like</span><br />
              <span className="gradient-text">Never Before</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your LinkedIn profile into a powerful personal brand that attracts opportunities, builds meaningful connections, and accelerates your career growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => navigateTo('register')}
                className="btn-primary"
              >
                Start Growing Today
              </button>
            </div>

            {/* Animated Statistics */}
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              <div className="text-center animate-counter" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold gradient-text">{profilesCount}+</div>
                <div className="text-sm text-gray-600">Profiles Optimized</div>
              </div>
              <div className="text-center animate-counter" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold gradient-text">{successRate}</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* LinkedIn Profile Mockup */}
          <div className="animate-slide-up lg:pl-8">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:rotate-1 transition-transform duration-500 animate-float">
                {/* Professional LinkedIn profile mockup */}
                <div className="w-full h-32 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg mb-4"></div>
                <div className="flex items-start gap-4 -mt-16 relative z-10">
                  <div className="w-20 h-20 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center">
                    <span className="text-2xl">👨‍💼</span>
                  </div>
                  <div className="flex-1 pt-12">
                    <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded mb-4 w-1/2"></div>
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span className="text-sm text-green-600 font-medium">+245% Growth</span>
                    </div>
                    <div className="text-sm text-gray-500">This Month</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-bounce">
                <span className="text-xl">👥</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                <span className="text-xl">📊</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
