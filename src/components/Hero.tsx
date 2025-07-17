import React, { useEffect, useState, useRef } from 'react';
import portraitImg from '../images/ChatGPT Image Jul 17, 2025, 11_56_03 AM.png';
import { animated, useSpring, useChain, useSpringRef } from '@react-spring/web';
import { ChevronDown, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Animation refs
  const backgroundRef = useSpringRef();
  const contentRef = useSpringRef();
  const imageRef = useSpringRef();
  const socialRef = useSpringRef();

  // Background animation
  const backgroundSpring = useSpring({
    ref: backgroundRef,
    from: { opacity: 0 },
    to: { opacity: isVisible ? 1 : 0 },
    config: { tension: 120, friction: 14 }
  });

  // Content animations
  const contentSpring = useSpring({
    ref: contentRef,
    from: { opacity: 0, transform: 'translateY(60px)' },
    to: { 
      opacity: isVisible ? 1 : 0, 
      transform: isVisible ? 'translateY(0px)' : 'translateY(60px)' 
    },
    config: { tension: 280, friction: 60 }
  });

  // Image animation
  const imageSpring = useSpring({
    ref: imageRef,
    from: { opacity: 0, transform: 'scale(0.8) translateY(40px)' },
    to: { 
      opacity: isVisible ? 1 : 0, 
      transform: isVisible ? 'scale(1) translateY(0px)' : 'scale(0.8) translateY(40px)' 
    },
    config: { tension: 200, friction: 25 }
  });

  // Social links animation
  const socialSpring = useSpring({
    ref: socialRef,
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { 
      opacity: isVisible ? 1 : 0, 
      transform: isVisible ? 'translateY(0px)' : 'translateY(30px)' 
    },
    config: { tension: 300, friction: 30 }
  });

  // Chain animations
  useChain([backgroundRef, contentRef, imageRef, socialRef], [0, 0.2, 0.4, 0.6]);

  // Mouse parallax effect
  const parallaxSpring = useSpring({
    transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`,
    config: { tension: 300, friction: 30 }
  });

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/amusankayode',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/amusankayode',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:kaygold2000@gmail.com',
      color: 'hover:text-cyan-400'
    },
    {
      name: 'Download CV',
      icon: Download,
      href: 'https://docs.google.com/document/d/1BZrB6PJ4sq-g1xtrvWXeXRUhZtfGafuhHGCXR4zDZzM/edit?usp=sharing',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <animated.div 
        style={backgroundSpring}
        className="absolute inset-0"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
        
        {/* Animated Orbs */}
        <animated.div
          style={parallaxSpring}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        ></animated.div>
        <animated.div
          style={{
            transform: `translate3d(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px, 0)`,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
        ></animated.div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </animated.div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <animated.div style={contentSpring} className="text-center lg:text-left">
            {/* Name & Title */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
                <span className="block">Amusan</span>
                <span className="block text-gradient">Kayode</span>
                <span className="block text-4xl md:text-5xl font-light text-gray-300">
                  Silvanus
                </span>
              </h1>
              
              <div className="text-lg md:text-xl text-gray-300 font-medium mb-6 space-y-1">
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-sm md:text-base">
                  {['MERN Stack Developer', 'ERP Engineer', 'WordPress Expert', 'DevOps Specialist'].map((title, index) => (
                    <span 
                      key={title}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-blue-300 backdrop-blur-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {title}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-10">
              <div className="card p-8 max-w-2xl mx-auto lg:mx-0">
                <p className="text-gray-300 leading-relaxed text-lg">
                  I'm a <span className="text-blue-400 font-semibold">cybersecurity graduate</span> with 
                  a strong foundation in customer support and networking, now thriving in the{' '}
                  <span className="text-cyan-400 font-semibold">DevOps world</span>. With{' '}
                  <span className="text-white font-semibold">2+ years in tech</span>, I've built robust 
                  ERP systems, high-performance WordPress sites, and full-stack applications for 
                  enterprises and public institutions.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary group"
              >
                <span>View My Work</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-secondary group"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
              <button className="btn btn-secondary group">
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links */}
            <animated.div style={socialSpring} className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-blue-500/50 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </a>
              ))}
            </animated.div>
          </animated.div>

          {/* Profile Image */}
          <animated.div style={imageSpring} className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative w-[25rem] h-[25rem] md:w-[30rem] md:h-[30rem]">
                {/* Gradient Border */}
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                {/* Image */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center overflow-hidden border-4 border-white/10">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                    <img
  src={portraitImg}
  alt="Kaygo Portrait"
  className="object-cover w-full h-full rounded-full "
/>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Tech Stack Indicators */}
                <div className="absolute -left-8 top-1/4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-slate-800/90 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center">
                    <span className="text-xs font-mono text-blue-400 font-bold">JS</span>
                  </div>
                </div>
                <div className="absolute -right-8 top-1/3 group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: '200ms' }}>
                  <div className="w-12 h-12 bg-slate-800/90 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center">
                    <span className="text-xs font-mono text-cyan-400 font-bold">TS</span>
                  </div>
                </div>
                <div className="absolute -left-6 bottom-1/4 group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: '400ms' }}>
                  <div className="w-12 h-12 bg-slate-800/90 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center">
                    <span className="text-xs font-mono text-green-400 font-bold">NODE</span>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <animated.div
        style={socialSpring}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
          </div>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </animated.div>
    </section>
  );
};

export default Hero;