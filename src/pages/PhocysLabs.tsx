import React from 'react';
import { Button } from '../components/Button';
import { AnimatedIcon } from '../components/AnimatedIcon';
import { Lightbulb, Rocket, Users, Code } from 'lucide-react';

export default function PhocysLabs() {
  return (
    <div className="min-h-screen">
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 animate-fade-in">
            Phocys Labs
          </h1>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in-delay">
            Innovating the future of virtual collaboration
          </p>

          <div className="max-w-3xl mx-auto mb-16 animate-fade-in-delay-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200&h=600"
                alt="Innovation lab environment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#546cfc]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Mission</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Lightbulb} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">Pushing the boundaries of virtual collaboration technology through continuous research and development.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Rocket} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Future-Ready</h3>
              <p className="text-gray-600">Building next-generation solutions for tomorrow's virtual communication challenges.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Users} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-600">Working with industry leaders to develop breakthrough technologies.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Code} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Open Innovation</h3>
              <p className="text-gray-600">Contributing to the open-source community and fostering collaborative development.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#546cfc] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Join Our Innovation Journey</h2>
          <p className="text-xl mb-8 opacity-90">Partner with us to shape the future of virtual meetings.</p>
          <Button variant="secondary" className="px-8 py-3 text-lg font-semibold">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}