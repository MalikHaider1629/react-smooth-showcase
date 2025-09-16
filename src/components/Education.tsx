import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'Stanford University',
      year: '2018-2020',
      description: 'Specialized in Machine Learning and Software Engineering',
      gpa: '3.9/4.0',
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'UC Berkeley',
      year: '2014-2018',
      description: 'Focus on Web Development and Database Systems',
      gpa: '3.7/4.0',
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      badge: '🏆',
    },
    {
      name: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      year: '2022',
      badge: '☁️',
    },
    {
      name: 'React Native Certified',
      issuer: 'Meta',
      year: '2021',
      badge: '📱',
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'CNCF',
      year: '2023',
      badge: '⚙️',
    },
  ];

  return (
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
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications that have shaped
            my technical expertise.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Education</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-xl font-semibold">{edu.degree}</h4>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.year}
                        </div>
                      </div>
                      <p className="text-primary font-medium mb-2">{edu.school}</p>
                      <p className="text-muted-foreground mb-2">{edu.description}</p>
                      <p className="text-sm font-medium">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover-lift text-center h-full">
                  <div className="text-4xl mb-4">{cert.badge}</div>
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-center text-xs text-muted-foreground">
                    <Award className="h-3 w-3 mr-1" />
                    {cert.year}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;