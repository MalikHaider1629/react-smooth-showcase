import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: 'React & TypeScript', level: 95 },
    { name: 'Node.js & Express', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Database Design', level: 88 },
    { name: 'Mobile Development', level: 80 },
    { name: 'DevOps & AWS', level: 75 },
  ];

  const services = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with modern technologies',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Leading development teams and mentoring developers',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience in creating
            digital solutions that make a difference. I love turning complex problems
            into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover-lift h-full">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-bar h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="skill-fill h-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;