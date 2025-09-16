import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Node.js, and Stripe. Features include user authentication, product management, shopping cart, payment processing, and order tracking.',
      longDescription: 'This comprehensive e-commerce solution was built for a client who needed a modern, scalable platform to sell their products online. The project involved building both the customer-facing storefront and an admin dashboard for managing products, orders, and analytics.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
      github: '#',
      live: '#',
      featured: true,
      status: 'Completed',
      duration: '4 months',
      team: '3 developers',
      highlights: [
        'Integrated Stripe payment processing',
        'Built responsive admin dashboard',
        'Implemented real-time inventory management',
        'SEO optimized product pages'
      ]
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.',
      longDescription: 'Designed to help teams stay organized and productive, this app features real-time collaboration, drag-and-drop task management, time tracking, and comprehensive project analytics.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
      tech: ['React', 'Firebase', 'TypeScript', 'Material-UI', 'Socket.io'],
      github: '#',
      live: '#',
      featured: true,
      status: 'Completed',
      duration: '3 months',
      team: '2 developers',
      highlights: [
        'Real-time collaborative editing',
        'Drag-and-drop task organization',
        'Team performance analytics',
        'Mobile-responsive design'
      ]
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with detailed forecasts, interactive maps, and location-based weather alerts.',
      longDescription: 'This weather app provides comprehensive weather information with beautiful visualizations, including current conditions, hourly and weekly forecasts, weather maps, and severe weather alerts.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop',
      tech: ['Vue.js', 'D3.js', 'OpenWeather API', 'Tailwind CSS', 'Chart.js'],
      github: '#',
      live: '#',
      featured: false,
      status: 'Completed',
      duration: '2 months',
      team: 'Solo project',
      highlights: [
        'Interactive weather maps',
        'Location-based alerts',
        'Beautiful data visualizations',
        'PWA capabilities'
      ]
    },
    {
      title: 'Social Media Analytics',
      description: 'An analytics dashboard for social media managers to track performance across multiple platforms.',
      longDescription: 'This tool helps social media managers track engagement, analyze audience demographics, and optimize their content strategy across Twitter, Instagram, Facebook, and LinkedIn.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis'],
      github: '#',
      live: '#',
      featured: false,
      status: 'In Development',
      duration: '5 months',
      team: '4 developers',
      highlights: [
        'Multi-platform integration',
        'Advanced analytics and insights',
        'Automated reporting',
        'Custom dashboard widgets'
      ]
    },
    {
      title: 'Learning Management System',
      description: 'A comprehensive LMS for online education with course creation, student progress tracking, and interactive assessments.',
      longDescription: 'Built for educational institutions, this LMS provides tools for creating courses, managing students, tracking progress, and conducting assessments with support for multimedia content.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3', 'Stripe'],
      github: '#',
      live: '#',
      featured: true,
      status: 'Completed',
      duration: '6 months',
      team: '5 developers',
      highlights: [
        'Video streaming with AWS',
        'Interactive quiz system',
        'Progress tracking and analytics',
        'Certificate generation'
      ]
    },
    {
      title: 'Restaurant Management System',
      description: 'A complete restaurant management solution with POS, inventory management, and customer relationship tools.',
      longDescription: 'This system streamlines restaurant operations with features for order management, inventory tracking, staff scheduling, and customer loyalty programs.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      github: '#',
      live: '#',
      featured: false,
      status: 'Completed',
      duration: '4 months',
      team: '3 developers',
      highlights: [
        'Cross-platform mobile app',
        'Real-time order management',
        'Inventory automation',
        'Customer loyalty system'
      ]
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                My <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A showcase of the applications and solutions I've built, from e-commerce platforms
                to collaborative tools and everything in between.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground">
                My most impactful and technically challenging projects
              </p>
            </motion.div>

            <div className="space-y-16">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <Card className="overflow-hidden hover-lift">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                      <Badge variant={project.status === 'Completed' ? 'default' : 'outline'}>
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.longDescription}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {project.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        {project.team}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Key Highlights</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {project.highlights.map((highlight, i) => (
                          <li key={i}>• {highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button variant="outline">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                      <Button>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Other Projects
              </h2>
              <p className="text-lg text-muted-foreground">
                Additional projects that showcase my range of skills
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover-lift h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant={project.status === 'Completed' ? 'default' : 'outline'}>
                          {project.status}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                            +{project.tech.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="flex space-x-3">
                        <Button variant="outline" size="sm">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                        <Button size="sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
