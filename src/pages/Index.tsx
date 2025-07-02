
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Moon, Sun, ArrowUp, Code, Smartphone, Database, Menu, X, ExternalLink, Mail, Zap, Target, CheckCircle, Users, HeartHandshake } from 'lucide-react';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      
      // Animate elements on scroll
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Code className="h-8 w-8 text-red-500" />,
      title: "Custom Web & Mobile App Development",
      description: "Tailored solutions built with cutting-edge technologies for web and mobile platforms."
    },
    {
      icon: <Zap className="h-8 w-8 text-red-500" />,
      title: "MVP Design & Development",
      description: "Rapid prototyping and MVP development to validate your ideas quickly and efficiently."
    },
    {
      icon: <Database className="h-8 w-8 text-red-500" />,
      title: "API Integrations & Backend Systems",
      description: "Robust backend solutions and seamless third-party integrations for scalable applications."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-red-500" />,
      title: "UX/UI Design",
      description: "User-centered design that creates intuitive and engaging digital experiences."
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: "Agile Project Management",
      description: "Transparent, iterative project management ensuring timely delivery and flexibility."
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-red-500" />,
      title: "Ongoing Maintenance & Support",
      description: "Continuous support and maintenance to keep your applications running smoothly."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="h-12 w-12 text-red-500" />,
      title: "Agile Methodology",
      description: "Rapid iteration cycles with continuous feedback and improvement for faster results."
    },
    {
      icon: <Users className="h-12 w-12 text-red-500" />,
      title: "Transparent Communication",
      description: "Collaborative approach with regular updates and open communication throughout the project."
    },
    {
      icon: <Target className="h-12 w-12 text-red-500" />,
      title: "Proven Experience",
      description: "Extensive experience across industries and technologies with a track record of success."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-red-500" />,
      title: "Quality Commitment",
      description: "Dedicated to delivering high-quality solutions on time with user satisfaction as priority."
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-700 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/cd2df292-dc5f-4f97-9869-2ac11fc35d93.png" 
              alt="Byte Piper Logo" 
              className="h-16 w-auto max-h-16"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-300 dark:text-gray-300 hover:text-red-400 dark:hover:text-red-400 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-300 dark:text-gray-300 hover:text-red-400 dark:hover:text-red-400 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-300 dark:text-gray-300 hover:text-red-400 dark:hover:text-red-400 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-300 dark:text-gray-300 hover:text-red-400 dark:hover:text-red-400 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hover:bg-gray-800 dark:hover:bg-gray-800 text-gray-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden hover:bg-gray-800 dark:hover:bg-gray-800 text-gray-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden bg-gray-900 dark:bg-gray-900 border-t border-gray-700 dark:border-gray-700 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="px-4 py-4 space-y-2">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left px-3 py-2 text-gray-300 dark:text-gray-300 hover:text-red-400 dark:hover:text-red-400 hover:bg-gray-800 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left px-3 py-2 text-gray-300 dark:text-gray-300 hover:text-red-400 dark:hover:text-red-400 hover:bg-gray-800 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left px-3 py-2 text-gray-300 dark:text-gray-300 hover:text-red-400 dark:hover:text-red-400 hover:bg-gray-800 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left px-3 py-2 text-gray-300 dark:text-gray-300 hover:text-red-400 dark:hover:text-red-400 hover:bg-gray-800 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-red-50 dark:from-gray-900 dark:to-gray-800 hero-pattern">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto fade-in-up">
            <Badge className="mb-6 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200 border-red-200 dark:border-red-800">
              Agile Software Development
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Agile Software Development That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Delivers
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              At Byte Piper, we build scalable, user-focused web and mobile solutions with speed, precision, and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')} 
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Let's Build Together
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('services')} 
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                See Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Byte Piper
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Byte Piper is an Agile software development agency focused on delivering high-quality, scalable digital solutions. 
              Our team works closely with clients through every iteration to ensure fast results, flexibility, and a deep focus on 
              user and business needs. We believe in transparent communication, rapid development cycles, and creating solutions 
              that truly make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive software development services to bring your ideas to life
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-hover border-0 shadow-md dark:bg-gray-700 dark:border-gray-600 fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Byte Piper
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine expertise, agility, and dedication to deliver exceptional results
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work With Us CTA */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600">
        <div className="container mx-auto px-4 text-center fade-in-up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our agile development approach.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-500 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://www.upwork.com/agencies/1906561169503906233/', '_blank')}
          >
            Work With Us <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Get In{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Touch
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12">
              Ready to transform your ideas into reality? Let's start the conversation.
            </p>
            
            <div className="space-y-6">
              <Card className="p-8 shadow-lg border-0 dark:bg-gray-700">
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      Let's Discuss Your Project
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      We're excited to learn about your project and explore how we can help you achieve your goals.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      onClick={() => window.open('mailto:omar.ataa@outlook.com', '_blank')}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Start Your Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/cd2df292-dc5f-4f97-9869-2ac11fc35d93.png" 
                alt="Byte Piper Logo" 
                className="h-20 w-auto max-h-20"
              />
            </div>
            
            <div className="text-gray-400 mb-4 md:mb-0 text-center">
              © {new Date().getFullYear()} Byte Piper. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('mailto:omar.ataa@outlook.com', '_blank')}
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Mail className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('https://www.upwork.com/agencies/1906561169503906233/', '_blank')}
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <Button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        size="icon"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Index;
