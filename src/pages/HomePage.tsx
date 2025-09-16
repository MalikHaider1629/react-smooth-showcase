import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import ContactForm from '@/components/ContactForm';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <ContactForm />
    </div>
  );
};

export default HomePage;