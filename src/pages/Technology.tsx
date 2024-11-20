import React from 'react';
import { Button } from '../components/Button';
import { AnimatedIcon } from '../components/AnimatedIcon';
import { Brain, Cpu, Lock, Network, Shield, Zap } from 'lucide-react';

export default function Technology() {
  return (
    <div className="min-h-screen">
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 animate-fade-in">
            Our Technology Stack
          </h1>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in-delay">
            Advanced AI and machine learning powering real-time engagement analytics
          </p>

          <div className="max-w-3xl mx-auto mb-16 animate-fade-in-delay-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=600"
                alt="Advanced technology visualization"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#546cfc]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Core Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Brain} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Advanced AI</h3>
              <p className="text-gray-600">State-of-the-art machine learning models for real-time behavior analysis.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Cpu} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Edge Computing</h3>
              <p className="text-gray-600">Low-latency processing for instant engagement insights.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Network} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Neural Networks</h3>
              <p className="text-gray-600">Deep learning models trained on vast meeting interaction datasets.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Shield} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-gray-600">End-to-end encryption and compliance with global privacy standards.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Lock} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Data Privacy</h3>
              <p className="text-gray-600">Advanced anonymization and data protection protocols.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Zap} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Real-Time Processing</h3>
              <p className="text-gray-600">Instant analysis and feedback for live meeting optimization.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#546cfc] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience Our Technology</h2>
          <p className="text-xl mb-8 opacity-90">See how our advanced AI can transform your virtual meetings.</p>
          <Button variant="secondary" className="px-8 py-3 text-lg font-semibold">
            Schedule Demo
          </Button>
        </div>
      </section>
    </div>
  );
}