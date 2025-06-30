
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Moon, Sun, ArrowUp, Code, Smartphone, Database, Palette, Users, HeartHandshake, Zap, Target, CheckCircle, ExternalLink } from 'lucide-react';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Custom Web & Mobile App Development",
      description: "Tailored solutions built with cutting-edge technologies for web and mobile platforms."
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "MVP Design & Development",
      description: "Rapid prototyping and MVP development to validate your ideas quickly and efficiently."
    },
    {
      icon: <Database className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "API Integrations & Backend Systems",
      description: "Robust backend solutions and seamless third-party integrations for scalable applications."
    },
    {
      icon: <Palette className="h-8 w-8 text-pink-600 dark:text-pink-400" />,
      title: "UX/UI Design",
      description: "User-centered design that creates intuitive and engaging digital experiences."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600 dark:text-orange-400" />,
      title: "Agile Project Management",
      description: "Transparent, iterative project management ensuring timely delivery and flexibility."
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-red-600 dark:text-red-400" />,
      title: "Ongoing Maintenance & Support",
      description: "Continuous support and maintenance to keep your applications running smoothly."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: "Agile Methodology",
      description: "Rapid iteration cycles with continuous feedback and improvement for faster results."
    },
    {
      icon: <Users className="h-12 w-12 text-green-600 dark:text-green-400" />,
      title: "Transparent Communication",
      description: "Collaborative approach with regular updates and open communication throughout the project."
    },
    {
      icon: <Target className="h-12 w-12 text-purple-600 dark:text-purple-400" />,
      title: "Proven Experience",
      description: "Extensive experience across industries and technologies with a track record of success."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-orange-600 dark:text-orange-400" />,
      title: "Quality Commitment",
      description: "Dedicated to delivering high-quality solutions on time with user satisfaction as priority."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Byte Piper</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="ml-4"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Agile Software Development
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Agile Software Development That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Delivers</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              At Byte Piper, we build scalable, user-focused web and mobile solutions with speed, precision, and care.
            </p>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let's Build Together
            </Button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Byte Piper</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive software development services to bring your ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md dark:bg-gray-700">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Byte Piper</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine expertise, agility, and dedication to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
                <div className="mb-6 flex justify-center">{item.icon}</div>
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our agile development approach.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://upwork.com', '_blank')}
          >
            Work With Us <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
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
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full"
                      onClick={() => window.open('mailto:hello@bytepiper.com', '_blank')}
                    >
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
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Byte Piper</span>
            </div>
            
            <div className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Byte Piper. All rights reserved.
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
