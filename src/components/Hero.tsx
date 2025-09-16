import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import avatarImage from '@/assets/avatar.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 animate-glow">
              <img
                src={avatarImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Alex Johnson</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Full Stack Developer & UI/UX Designer passionate about creating
          innovative digital experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button className="hover-lift">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline" className="hover-lift">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button variant="outline" className="hover-lift">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="animate-bounce cursor-pointer"
          onClick={scrollToAbout}
        >
          <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;