
import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, description: 'React, TypeScript, Next.js, Tailwind CSS' },
    { name: 'UI/UX Design', icon: Palette, description: 'Figma, Adobe Creative Suite, Prototyping' },
    { name: 'Backend Development', icon: Zap, description: 'Node.js, Python, PostgreSQL, APIs' },
    { name: 'Collaboration', icon: Users, description: 'Agile, Git, Code Reviews, Mentoring' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital experiences that make a difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-4">
              Started as a curious computer science student, I've grown into a full-stack developer who loves 
              building products that solve real problems. My journey has taken me through startups and 
              established companies, where I've learned the importance of user-centered design and clean, 
              maintainable code.
            </p>
            <p className="text-gray-600 mb-6">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or mentoring aspiring developers. I believe in the power of technology to create positive change.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'Figma'].map((tech) => (
                <span key={tech} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-purple-100">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-purple-100">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">20+</div>
                  <div className="text-purple-100">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-purple-100">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h4>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
