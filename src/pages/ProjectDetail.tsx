import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Code } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = {
    'health-gov-ng': {
      title: 'Health.gov.ng',
      description: 'Official government health portal providing comprehensive health information and services to Nigerian citizens.',
      longDescription: 'The Health.gov.ng project represents a comprehensive digital transformation initiative for the Nigerian health sector. This platform serves as the central hub for health information, policy updates, and citizen services. The project involved creating a scalable, secure, and user-friendly platform that can handle high traffic volumes while maintaining optimal performance and accessibility standards.',
      image: '/src/images/healthhomepage.png',
      tech: ['WordPress', 'PHP', 'MySQL', 'Custom Plugins', 'REST API', 'Security Hardening'],
      role: 'Lead Developer',
      url: 'https://health.gov.ng',
      category: 'Government',
      duration: '6 months',
      team: '5 developers',
      gallery: [
        '/src/images/health1.jpeg',
        '/src/images/health2.png',
        '/src/images/health3.png',
        '/src/images/healthhomepage.png'
      ],
      challenges: [
        'Implementing robust security measures for government-grade compliance',
        'Optimizing performance for high traffic volumes',
        'Creating multilingual support for diverse user base',
        'Integrating with existing government systems and databases'
      ],
      outcomes: [
        'Improved citizen access to health information by 300%',
        'Reduced response time for health services by 50%',
        'Enhanced security with zero security incidents',
        'Achieved 99.9% uptime since launch'
      ]
    },
    'tosol-impact': {
      title: 'Tosol Impact',
      description: 'Non-profit organization platform focused on sustainable development and community impact initiatives.',
      longDescription: 'Tosol Impact is a comprehensive platform designed to amplify the reach and effectiveness of non-profit organizations. The platform includes features for project management, donor engagement, impact tracking, and community building. Built with modern web technologies to ensure scalability and user engagement.',
      image: '/src/images/tosolhomepage.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'Stripe API'],
      role: 'Full-Stack Developer',
      url: 'https://tosolimpact.org',
      category: 'Non-Profit',
      duration: '4 months',
      team: '3 developers',
      gallery: [
        '/src/images/tosolhomepage1.png',
        '/src/images/tosolhomepage2.png',
        '/src/images/tosolhomepage3.png',
        '/src/images/tosolhomepage4.png'
      ],
      challenges: [
        'Creating an intuitive donation flow',
        'Building real-time impact tracking',
        'Implementing social features for community engagement',
        'Ensuring mobile-first responsive design'
      ],
      outcomes: [
        'Increased donations by 250% within first quarter',
        'Improved volunteer engagement by 180%',
        'Enhanced project visibility and impact measurement',
        'Streamlined organizational operations'
      ]
    },
    'tikvah-sanctuary': {
      title: 'Tikvah Sanctuary',
      description: 'Spiritual community platform with event management, donation systems, and member portal.',
      longDescription: 'Tikvah Sanctuary represents a modern approach to spiritual community management. The platform integrates worship services, community events, member management, and donation systems into a cohesive digital experience. Special attention was given to creating an inclusive and accessible design that serves diverse community needs.',
      image: '/src/images/tikvahhomepage.png',
      tech: ['WordPress', 'WooCommerce', 'Custom Themes', 'Payment Gateways', 'Event Management'],
      role: 'WordPress Developer',
      url: 'https://tikvahsanctuary.org',
      category: 'Community',
      duration: '3 months',
      team: '2 developers',
      gallery: [
        '/src/images/tikvahhomepage.png',
        '/src/images/tikvahhomepage1.png',
        '/src/images/tikvahhomepage2.png',
        '/src/images/tikvahhomepage3.png'
      ],
      challenges: [
        'Creating seamless event registration system',
        'Implementing secure donation processing',
        'Building member portal with role-based access',
        'Ensuring accessibility compliance'
      ],
      outcomes: [
        'Increased event attendance by 150%',
        'Streamlined donation process with 40% increase',
        'Enhanced member engagement and communication',
        'Improved operational efficiency'
      ]
    },
    'emeforex': {
      title: 'Emeforex',
      description: 'Financial trading platform with real-time market data, portfolio management, and trading tools.',
      longDescription: 'Emeforex is a sophisticated financial trading platform that provides real-time market data, advanced charting tools, and portfolio management capabilities. The platform is designed to handle high-frequency trading data while maintaining excellent user experience and security standards.',
      image: '/src/images/emeforex1.png',
      tech: ['React', 'TypeScript', 'WebSocket', 'Node.js', 'Redis', 'Chart.js'],
      role: 'Frontend Lead',
      url: 'https://emeforex.com',
      category: 'Finance',
      duration: '8 months',
      team: '6 developers',
      gallery: [
        '/src/images/emeforex1.png',
        '/src/images/emeforex2.png',
        '/src/images/emeforex3.png',
        '/src/images/emeforex4.png'
      ],
      challenges: [
        'Implementing real-time data streaming',
        'Creating advanced charting components',
        'Ensuring platform security and compliance',
        'Optimizing performance for high-frequency data'
      ],
      outcomes: [
        'Processed over 1M transactions daily',
        'Achieved sub-second response times',
        'Maintained 99.99% uptime',
        'Enhanced user trading experience'
      ]
    },
    'capital-emeforex': {
      title: 'Capital Emeforex',
      description: 'Investment management platform with advanced analytics, risk assessment, and portfolio optimization.',
      longDescription: 'Capital Emeforex is an advanced investment management platform that provides sophisticated analytics, risk assessment tools, and portfolio optimization features. The platform serves institutional investors and wealth managers with enterprise-grade functionality and security.',
      image: '/src/images/capitalemeforex1.png',
      tech: ['Next.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'D3.js'],
      role: 'Full-Stack Developer',
      url: 'https://capital.emeforex.com',
      category: 'Finance',
      duration: '10 months',
      team: '8 developers',
      gallery: [
        '/src/images/capitalemeforex1.png',
        '/src/images/capitalemeforex2.png',
        '/src/images/capitalemeforex3.png',
        '/src/images/capitalemeforex4.png'
      ],
      challenges: [
        'Building complex analytics dashboard',
        'Implementing advanced risk models',
        'Creating scalable microservices architecture',
        'Ensuring regulatory compliance'
      ],
      outcomes: [
        'Managed $100M+ in assets',
        'Reduced risk assessment time by 70%',
        'Improved portfolio performance by 25%',
        'Enhanced client reporting capabilities'
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 mb-6">{project.description}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{project.team}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4" />
                  <span>{project.role}</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-6 lg:mt-0">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Live</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-12"
            >
              {/* Project Overview */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
                <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Technology Stack */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-6">Technology Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.tech.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-slate-700/50 rounded-lg p-4 text-center border border-slate-600/50"
                    >
                      <span className="text-blue-400 font-semibold">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-6">Challenges & Solutions</h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-6">Results & Impact</h2>
                <ul className="space-y-4">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
            >
              <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-gray-400">Category</span>
                  <p className="text-white font-semibold">{project.category}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Duration</span>
                  <p className="text-white font-semibold">{project.duration}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Team Size</span>
                  <p className="text-white font-semibold">{project.team}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">My Role</span>
                  <p className="text-white font-semibold">{project.role}</p>
                </div>
              </div>
            </motion.div>

            {/* Project Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
            >
              <h3 className="text-xl font-bold text-white mb-4">Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;