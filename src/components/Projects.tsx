import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring, useInView } from '@react-spring/web';
import { ExternalLink, ArrowRight, Code, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const projects = [
    {
      id: 'health-gov-ng',
      title: 'Health.gov.ng',
      subtitle: 'Government Health Portal',
      description: 'Official government health portal providing comprehensive health information and services to Nigerian citizens with advanced security and scalability.',
      image: '/src/images/healthhomepage.png',
      tech: ['WordPress', 'PHP', 'MySQL', 'Security'],
      role: 'Lead Developer',
      url: 'https://health.gov.ng',
      category: 'Government',
      year: '2024',
      team: '5 developers',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'tosol-impact',
      title: 'Tosol Impact',
      subtitle: 'Non-Profit Platform',
      description: 'Comprehensive platform for sustainable development initiatives with donor management, impact tracking, and community engagement features.',
      image: '/src/images/tosolhomepage.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      role: 'Full-Stack Developer',
      url: 'https://tosolimpact.org',
      category: 'Non-Profit',
      year: '2024',
      team: '3 developers',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      id: 'tikvah-sanctuary',
      title: 'Tikvah Sanctuary',
      subtitle: 'Community Platform',
      description: 'Spiritual community platform with event management, donation systems, member portal, and real-time communication features.',
      image: '/src/images/tikvahhomepage.png',
      tech: ['WordPress', 'WooCommerce', 'Custom Themes'],
      role: 'WordPress Developer',
      url: 'https://tikvahsanctuary.org',
      category: 'Community',
      year: '2023',
      team: '2 developers',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 'emeforex',
      title: 'Emeforex',
      subtitle: 'Trading Platform',
      description: 'Advanced financial trading platform with real-time market data, sophisticated charting tools, and high-frequency trading capabilities.',
      image: '/src/images/emeforex1.png',
      tech: ['React', 'TypeScript', 'WebSocket', 'Charts'],
      role: 'Frontend Lead',
      url: 'https://emeforex.com',
      category: 'Finance',
      year: '2023',
      team: '6 developers',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      id: 'capital-emeforex',
      title: 'Capital Emeforex',
      subtitle: 'Investment Management',
      description: 'Enterprise investment management platform with advanced analytics, risk assessment, and portfolio optimization for institutional clients.',
      image: '/src/images/capitalemeforex1.png',
      tech: ['Next.js', 'PostgreSQL', 'Docker', 'AWS'],
      role: 'Full-Stack Developer',
      url: 'https://capital.emeforex.com',
      category: 'Finance',
      year: '2023',
      team: '8 developers',
      gradient: 'from-indigo-600 to-blue-600'
    }
  ];

  const sectionSpring = useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0px)' : 'translateY(60px)',
    config: { tension: 280, friction: 60 }
  });

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <animated.div style={sectionSpring}>
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-medium text-sm">Featured Work</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Selected <span className="text-gradient">Projects</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of high-impact projects spanning government platforms, 
              enterprise solutions, and innovative web applications that serve millions of users.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isHovered={hoveredProject === project.id}
                onHover={setHoveredProject}
              />
            ))}
          </div>
        </animated.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: any;
  index: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isHovered, onHover }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  const isEven = index % 2 === 0;

  const cardSpring = useSpring({
    opacity: cardInView ? 1 : 0,
    transform: cardInView 
      ? 'translateY(0px)' 
      : `translateY(${isEven ? '60px' : '-60px'})`,
    config: { tension: 280, friction: 60 },
    delay: index * 200
  });

  const hoverSpring = useSpring({
    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
    config: { tension: 300, friction: 25 }
  });

  return (
    <animated.div
      ref={cardRef}
      style={cardSpring}
      className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
    >
      {/* Project Image */}
      <animated.div
        style={hoverSpring}
        className={`relative group ${!isEven ? 'lg:col-start-2' : ''}`}
        onMouseEnter={() => onHover(project.id)}
        onMouseLeave={() => onHover(null)}
      >
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-10`}></div>
          
          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-20"></div>
          
          {/* Tech Stack Pills */}
          <div className="absolute bottom-6 left-6 right-6 z-30">
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
                  +{project.tech.length - 3} more
                </span>
              )}
            </div>
          </div>
          
          {/* External Link */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-30 group/link"
          >
            <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </animated.div>

      {/* Project Content */}
      <div className={`space-y-8 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        {/* Category & Year */}
        <div className="flex items-center space-x-4">
          <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
            {project.category}
          </span>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{project.year}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Users className="w-4 h-4" />
            <span>{project.team}</span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xl text-blue-400 font-medium">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed">
          {project.description}
        </p>

        {/* Role */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">Role:</span>
          <span className="text-white font-semibold">{project.role}</span>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={`/project/${project.id}`}
            className="btn btn-primary group"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary group"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Visit Live Site</span>
          </a>
        </div>
      </div>
    </animated.div>
  );
};

export default Projects;