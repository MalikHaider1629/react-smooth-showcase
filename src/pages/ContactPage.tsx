import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send me an email anytime',
      value: 'alex@example.com',
      href: 'mailto:alex@example.com',
      availability: 'I usually respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Call me for urgent matters',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      availability: 'Available Mon-Fri, 9 AM - 6 PM PST'
    },
    {
      icon: MessageSquare,
      title: 'LinkedIn',
      description: 'Connect with me professionally',
      value: 'linkedin.com/in/alexjohnson',
      href: '#',
      availability: 'Active daily'
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a consultation',
      value: 'calendly.com/alexjohnson',
      href: '#',
      availability: '30-minute slots available'
    }
  ];

  const faqs = [
    {
      question: 'What types of projects do you work on?',
      answer: 'I specialize in full-stack web applications, e-commerce platforms, SaaS products, and mobile apps. I work with both startups and established companies.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity, but most projects range from 2-6 months. I provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes! I work with clients globally and am experienced in remote collaboration across different time zones.'
    },
    {
      question: 'What is included in your development services?',
      answer: 'My services include planning, design, development, testing, deployment, and post-launch support. I also provide documentation and training.'
    }
  ];

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
                Let's Work <span className="gradient-text">Together</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Ready to bring your ideas to life? I'm here to help you build
                amazing digital experiences that make a real impact.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Usually responds in 24 hours
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Based in San Francisco, CA
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
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
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose your preferred way to reach out
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover-lift h-full text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {method.description}
                    </p>
                    <a
                      href={method.href}
                      className="text-primary hover:underline font-medium block mb-2"
                    >
                      {method.value}
                    </a>
                    <p className="text-xs text-muted-foreground">
                      {method.availability}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
          <ContactForm />
        </section>

        {/* FAQ Section */}
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
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about working together
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover-lift h-full">
                    <h3 className="font-semibold mb-3">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-muted-foreground mb-4">
                Still have questions? Don't hesitate to reach out!
              </p>
              <Button className="hover-lift">
                <Mail className="mr-2 h-4 w-4" />
                Send me a message
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;