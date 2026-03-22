import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Package, Info, BookOpen, ArrowRight, Star, StarHalf, ThumbsUp, LineChart, BarChart, Users, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.3}px)`,
    transition: 'transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)',
  };

  const reverseParallaxStyle = {
    transform: `translateY(-${scrollY * 0.1}px)`,
    transition: 'transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)',
  };

  const handleGetStarted = () => {
    toast.success("Welcome to YieldMind!", {
      description: "Let's optimize your DeFi investments together."
    });
  };

  const handleNavigation = (path: string, label: string) => {
    toast.success(`Navigating to ${label}`, {
      description: "Loading content..."
    });
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "DeFi Investor",
      comment: "YieldMind has transformed how I manage my DeFi investments. The AI recommendations are spot-on!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      name: "Michael Chen",
      role: "Crypto Trader",
      comment: "The portfolio optimization features are incredible. I've seen a 25% increase in my yields.",
      rating: 4.5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    {
      name: "Emma Davis",
      role: "Finance Analyst",
      comment: "Best DeFi management platform I've used. The interface is intuitive and the AI is powerful.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
    }
  ];

  const businessMetrics = [
    {
      value: "$1.8B+",
      label: "Total Volume",
      icon: <BarChart className="h-6 w-6 text-defi-accent" />
    },
    {
      value: "50,000+",
      label: "Active Users",
      icon: <Users className="h-6 w-6 text-defi-accent" />
    },
    {
      value: "18.7%",
      label: "Avg. Returns",
      icon: <LineChart className="h-6 w-6 text-defi-accent" />
    },
    {
      value: "24/7",
      label: "AI Monitoring",
      icon: <Gauge className="h-6 w-6 text-defi-accent" />
    }
  ];

  const dashboardFeatures = [
    {
      title: "Portfolio Management",
      description: "Track and manage all your DeFi investments in one unified dashboard with real-time data.",
      image: "/lovable-uploads/1e6c6aef-56b6-4f72-97a1-db58fd689fd6.png"
    },
    {
      title: "Yield Optimization",
      description: "Our AI analyzes market conditions to recommend the highest-yielding strategies for your assets.",
      image: "/lovable-uploads/1e6c6aef-56b6-4f72-97a1-db58fd689fd6.png"
    },
    {
      title: "Risk Assessment",
      description: "Advanced analytics that help you understand exposure and mitigate potential risks.",
      image: "/lovable-uploads/1e6c6aef-56b6-4f72-97a1-db58fd689fd6.png"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#000B1D] text-white">
      <div className="relative">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e142c] via-[#000B1D] to-[#091223] opacity-80"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 5 + 1}px`,
                height: `${Math.random() * 5 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <nav className="w-full px-6 py-5 lg:px-8 border-b border-white/5 backdrop-blur-md fixed top-0 z-50 transition-all duration-300" style={{ backgroundColor: scrollY > 50 ? 'rgba(0, 11, 29, 0.95)' : 'transparent' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#4361EE] via-[#e1e1ff] to-[#89a5ff] bg-clip-text text-transparent transition-all duration-500 hover:from-[#89a5ff] hover:to-[#4361EE]">YIELDMIND</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/product" 
              onClick={() => handleNavigation('/product', 'Product')}
              className="text-white/80 hover:text-white flex items-center gap-2 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              <Package className="w-4 h-4" />
              Product
            </Link>
            <Link 
              to="/about"
              onClick={() => handleNavigation('/about', 'About')}
              className="text-white/80 hover:text-white flex items-center gap-2 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              <Info className="w-4 h-4" />
              About
            </Link>
            <Link 
              to="/blog"
              onClick={() => handleNavigation('/blog', 'Blog')}
              className="text-white/80 hover:text-white flex items-center gap-2 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              <BookOpen className="w-4 h-4" />
              Blog
            </Link>
            <Button 
              variant="secondary" 
              className="bg-[#001538] text-white hover:bg-[#001d4d] border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(67,97,238,0.3)]"
              asChild
            >
              <Link to="/dashboard">Sign in</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 mt-20 relative" ref={heroRef}>
        <div 
          className={`grid lg:grid-cols-2 gap-12 items-center ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
          style={{ 
            transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div 
            className="transform transition-all duration-1000" 
            style={{ 
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              transitionDelay: '0.2s'
            }}
          >
            <div className="inline-block mb-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#4361EE]/20 to-[#4361EE]/5 border border-[#4361EE]/10 text-sm backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <span className="bg-gradient-to-r from-[#fff] to-[#89a5ff] bg-clip-text text-transparent">Next Generation DeFi Platform</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-[#4361EE] via-[#e1e1ff] to-[#89a5ff] bg-clip-text text-transparent animate-gradient">
                AI-powered
              </span>
              <span className="block bg-gradient-to-r from-[#4361EE] via-[#e1e1ff] to-[#89a5ff] bg-clip-text text-transparent animate-gradient" style={{ animationDelay: '0.3s' }}>
                DeFi agent
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-xl leading-relaxed hover:text-white transition-colors">
              Optimize your decentralized finance strategies and maximize returns with intelligent investment recommendations.
            </p>
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-[#4361EE] to-[#6286FF] text-white hover:from-[#3a56d4] hover:to-[#5a7eff] text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_5px_30px_rgba(67,97,238,0.5)] relative overflow-hidden group"
              asChild
            >
              <Link to="/dashboard" className="relative z-10">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#5471ff] to-[#4361EE] rounded-md -z-10 group-hover:opacity-0 transition-opacity duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#4361EE] to-[#324dbd] rounded-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Get started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          <div 
            className="relative hidden lg:block" 
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '0.4s'
            }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4361EE]/30 to-[#6286FF]/30 rounded-lg blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#000B1D] to-transparent z-10 w-32 left-0" />
            <img 
              src="/lovable-uploads/1e6c6aef-56b6-4f72-97a1-db58fd689fd6.png" 
              alt="YieldMind Dashboard Preview" 
              className="rounded-lg shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#4361EE]/20 relative z-0"
            />
            
            {/* Floating elements */}
            <div 
              className="absolute -right-12 top-1/4 w-24 h-24 bg-[#4361EE]/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: '7s' }}
            ></div>
            <div 
              className="absolute -left-16 bottom-1/3 w-32 h-32 bg-[#4361EE]/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: '10s', animationDelay: '1s' }}
            ></div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce"></div>
          </div>
          <span className="text-white/50 text-sm mt-2">Scroll</span>
        </div>
      </div>

      {/* Business Metrics Section */}
      <div className="relative py-20 bg-gradient-to-b from-[#000B1D] to-[#00142e]">
        <div className="max-w-7xl mx-auto">
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 lg:px-8"
            style={reverseParallaxStyle}
          >
            {businessMetrics.map((metric, index) => (
              <div 
                key={metric.label} 
                className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#4361EE]/10 relative group overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4361EE]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-3">
                    {metric.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {metric.value}
                  </div>
                  <div className="text-white/70">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard Features Section */}
      <div className="py-24 bg-[#00142e] relative overflow-hidden">
        {/* Background elements */}
        <div 
          className="absolute w-96 h-96 bg-[#4361EE]/5 rounded-full blur-3xl top-1/4 -right-48"
          style={{ ...parallaxStyle, animationDuration: '15s' }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-[#4361EE]/10 rounded-full blur-3xl bottom-1/4 -left-32"
          style={{ ...reverseParallaxStyle, animationDuration: '10s' }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div 
            className="text-center mb-16"
            style={reverseParallaxStyle}
          >
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-[#4361EE]/20 to-[#4361EE]/5 border border-[#4361EE]/10 text-sm backdrop-blur-sm">
              <span className="bg-gradient-to-r from-[#fff] to-[#89a5ff] bg-clip-text text-transparent">Dashboard Features</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Powerful Investment Tools
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experience the full potential of our AI-driven platform with these powerful tools
            </p>
          </div>

          <Carousel 
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {dashboardFeatures.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#4361EE]/20 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#4361EE]/10 overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="overflow-hidden rounded-t-lg">
                        <img 
                          src={feature.image} 
                          alt={feature.title} 
                          className="w-full h-48 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#89a5ff] transition-colors duration-300">{feature.title}</h3>
                        <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/10 hover:bg-white/20 border-0" />
            <CarouselNext className="right-2 bg-white/10 hover:bg-white/20 border-0" />
          </Carousel>
        </div>
      </div>

      <div className="relative py-24 bg-gradient-to-b from-[#00142e] to-[#000B1D] overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4361EE]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#4361EE]/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-[#4361EE]/20 to-[#4361EE]/5 border border-[#4361EE]/10 text-sm backdrop-blur-sm">
              <span className="bg-gradient-to-r from-[#fff] to-[#89a5ff] bg-clip-text text-transparent">Testimonials</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <p className="text-xl text-white/80">
              Join thousands of satisfied users optimizing their DeFi investments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-white/10 hover:to-transparent hover:border-[#4361EE]/30 hover:shadow-xl hover:shadow-[#4361EE]/5 relative group overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4361EE]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4361EE]/50 to-[#6286FF]/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border border-white/20 relative"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-[#89a5ff] transition-colors duration-300">{testimonial.name}</h3>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                    {testimonial.rating % 1 !== 0 && (
                      <StarHalf className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                  <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">{testimonial.comment}</p>
                  <div className="mt-4 flex items-center gap-2 text-white/60">
                    <ThumbsUp className="w-4 h-4" />
                    <span>Verified User</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-white/5 bg-[#000B1D]/80 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI2MDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-defi-accent">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-white/60 hover:text-white transition-all duration-300 inline-block hover:translate-x-1 transform"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = '0 0 8px rgba(67, 97, 238, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >Features</Link></li>
                <li><Link to="/pricing" className="text-white/60 hover:text-white transition-all duration-300 inline-block hover:translate-x-1 transform" 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = '0 0 8px rgba(67, 97, 238, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >Pricing</Link></li>
                <li><Link to="/updates" className="text-white/60 hover:text-white transition-all duration-300 inline-block hover:translate-x-1 transform"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = '0 0 8px rgba(67, 97, 238, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >Updates</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-defi-accent">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-white/60 hover:text-white transition-all duration-300 inline-block hover:translate-x-1 transform"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = '0 0 8px rgba(67, 97, 238, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >About</Link></li>
                <li><Link to="/blog" className="text-white/60 hover:text-white transition-all duration-300 inline-block hover:translate-x-1 transform"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = '0 0 8px rgba(67, 97, 238, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >Blog</Link></li>
                <li><Link to="/careers" className="text-white/60 hover:text-white transition-all duration-300 inline-block hover:translate-x-1 transform"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = '0 0 8px rgba(67, 97, 238, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-defi-accent">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-white/60 hover:text-white transition-all duration-300 inline-block hover:translate-x-1 transform"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = '0 0 8px rgba(67, 97, 238, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >Help</Link></li>
                <li><Link to="/documentation" className="text-white/60 hover:text-white transition-all duration-300 inline-block hover:translate-x-1 transform"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = '0 0 8px rgba(67, 97, 238, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >Documentation</Link></li>
                <li><Link to="/status" className="text-white/60 hover:text-white transition-all duration-300 inline-block hover:translate-x-1 transform"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = '0 0 8px rgba(67, 97, 238, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >Status</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-defi-accent">Follow us</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/60 hover:text-white transition-all duration-300 inline-block hover:translate-x-1 transform"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textShadow = '0 0 8px rgba(67, 97, 238, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/60 hover:text-white transition-all duration-300 inline-block hover:translate-x-1 transform"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textShadow = '0 0 8px rgba(67, 97, 238, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-white/60">
            © 2024 YieldMind. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* CSS Keyframes - Remove the 'jsx' property which caused the error */}
      <style>
        {`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        `}
      </style>
    </div>
  );
};

export default Landing;
