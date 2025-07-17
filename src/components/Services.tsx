import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, Smartphone, Cloud, Settings } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      description: 'Building modern, scalable web applications using the MERN stack with responsive design and optimized performance.',
      features: ['React.js & Next.js', 'Node.js & Express', 'MongoDB & PostgreSQL', 'RESTful APIs']
    },
    {
      icon: Database,
      title: 'Enterprise ERP Systems',
      description: 'Implementing robust ERP solutions with Frappe/ERPNext for streamlined business operations and data management.',
      features: ['Frappe Framework', 'ERPNext Customization', 'Business Process Automation', 'Data Analytics']
    },
    {
      icon: Settings,
      title: 'WordPress Development',
      description: 'Creating custom WordPress themes, plugins, and CMS solutions for businesses and organizations.',
      features: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'Performance Optimization']
    },
    {
      icon: Cloud,
      title: 'Nextcloud Deployment',
      description: 'Setting up secure, self-hosted collaboration platforms for teams and organizations.',
      features: ['File Sharing', 'Calendar Integration', 'Document Collaboration', 'Security Configuration']
    },
    {
      icon: Smartphone,
      title: 'Custom App Development',
      description: 'Developing tailored web and mobile applications to meet specific business requirements.',
      features: ['Progressive Web Apps', 'API Integration', 'User Experience Design', 'Cross-Platform Solutions']
    },
    {
      icon: Server,
      title: 'DevOps & Server Management',
      description: 'Managing server infrastructure, CI/CD pipelines, and ensuring optimal application deployment.',
      features: ['Docker & Kubernetes', 'CI/CD Pipelines', 'Cloud Infrastructure', 'Monitoring & Logging']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Do</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Comprehensive technology solutions from full-stack development to enterprise 
            systems and DevOps infrastructure management.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-200">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;