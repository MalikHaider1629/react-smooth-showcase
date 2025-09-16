import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Code, Users, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import avatarImage from '@/assets/avatar.jpg';

const AboutPage = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express.js', 'Django', 'GraphQL'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase'] },
    { category: 'DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'] },
  ];

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      period: '2021 - Present',
      description: 'Leading development of scalable web applications serving 1M+ users.',
      achievements: [
        'Increased performance by 40% through code optimization',
        'Led team of 5 developers on multiple projects',
        'Implemented microservices architecture'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2019 - 2021',
      description: 'Built the company\'s main product from scratch using React and Node.js.',
      achievements: [
        'Developed MVP that secured $2M in funding',
        'Built CI/CD pipeline reducing deployment time by 60%',
        'Mentored junior developers'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'WebAgency Pro',
      period: '2018 - 2019',
      description: 'Created responsive websites and web applications for various clients.',
      achievements: [
        'Delivered 15+ client projects on time',
        'Improved client satisfaction scores by 25%',
        'Specialized in React and modern CSS frameworks'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 animate-glow">
                  <img
                    src={avatarImage}
                    alt="Alex Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-left">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    About <span className="gradient-text">Alex Johnson</span>
                  </h1>
                  <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      San Francisco, CA
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      5+ Years Experience
                    </div>
                    <div className="flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      Full Stack Developer
                    </div>
                  </div>
                  <Button className="hover-lift">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating
                digital solutions that make a real impact. I specialize in modern web technologies
                and love turning complex problems into simple, elegant solutions. When I'm not coding,
                you'll find me exploring new technologies, contributing to open source, or hiking
                the beautiful trails around San Francisco.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
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
                Technical Skills
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here are the technologies and tools I work with to bring ideas to life.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover-lift h-full">
                    <h3 className="font-bold text-lg mb-4 text-primary">
                      {skillGroup.category}
                    </h3>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <div
                          key={skill}
                          className="px-3 py-1 bg-muted rounded-md text-sm"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
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
                Work Experience
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My professional journey and the impact I've made along the way.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {job.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1 ml-6">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
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

export default AboutPage;