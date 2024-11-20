import React from 'react';
import { Button } from '../components/Button';
import { AnimatedIcon } from '../components/AnimatedIcon';
import { TrendingUp, Clock, DollarSign, Users, Brain, Target } from 'lucide-react';

export default function Benefits() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 animate-fade-in">
            Transform Your Virtual Meetings
          </h1>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in-delay">
            Discover how Infergram can revolutionize your virtual meetings and boost team productivity.
          </p>

          <div className="max-w-3xl mx-auto mb-16 animate-fade-in-delay-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200&h=600"
                alt="Team collaboration in virtual meeting"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#546cfc]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={TrendingUp} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Increased Productivity</h3>
              <p className="text-gray-600">Optimize meeting effectiveness and reduce wasted time with data-driven insights.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Clock} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Time Savings</h3>
              <p className="text-gray-600">Reduce meeting duration while maintaining or improving effectiveness.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={DollarSign} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Cost Reduction</h3>
              <p className="text-gray-600">Minimize resource waste and optimize meeting investments.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Users} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Better Engagement</h3>
              <p className="text-gray-600">Keep participants actively involved with engagement tracking and optimization.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Brain} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Enhanced Learning</h3>
              <p className="text-gray-600">Improve knowledge retention through optimized virtual training sessions.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Target} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
              <p className="text-gray-600">Track and quantify meeting success with detailed analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#546cfc] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience the Benefits</h2>
          <p className="text-xl mb-8 opacity-90">Join organizations already transforming their virtual meetings.</p>
          <Button variant="secondary" className="px-8 py-3 text-lg font-semibold">
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
}