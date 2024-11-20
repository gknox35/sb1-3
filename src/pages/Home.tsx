import React from 'react';
import { Hero } from '../components/Hero';
import { Button } from '../components/Button';
import { AnimatedIcon } from '../components/AnimatedIcon';
import { BarChart3, Brain, LineChart, Users, Video, Zap, Presentation, UserCheck, MessageSquareShare, TrendingUp, Target, FileStack, DollarSign, Clock, AlertCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />

      <div className="flex justify-center mb-16">
        <Button variant="primary" className="px-8 py-3">
          Learn About Our Technology
        </Button>
      </div>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The Challenges of Virtual Meetings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Video} variant="problem" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Zoom Fatigue</h3>
              <p className="text-gray-600">Virtual sessions often experience low engagement, with attendees showing signs of distraction and fatigue, resulting in poor learning outcomes.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Clock} variant="problem" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Time Waste</h3>
              <p className="text-gray-600">Inefficient meetings lead to countless hours of lost productivity, impacting both individual and organizational performance.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Users} variant="problem" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Poor Participation</h3>
              <p className="text-gray-600">Lack of engagement metrics makes it difficult to identify and address participation issues in real-time.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={AlertCircle} variant="problem" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Limited Feedback</h3>
              <p className="text-gray-600">Traditional virtual meetings provide no meaningful data on audience engagement or content effectiveness.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={DollarSign} variant="problem" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Resource Drain</h3>
              <p className="text-gray-600">Organizations invest heavily in virtual meetings without clear metrics to measure return on investment.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={FileStack} variant="problem" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Data Gaps</h3>
              <p className="text-gray-600">Lack of analytics makes it impossible to optimize content delivery and meeting effectiveness over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Solution</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Brain} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Behavioral Analytics</h3>
              <p className="text-gray-600">Track biometric and physiological data including eye movements, emotions, gestures and language in real-time.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={BarChart3} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Real-Time Insights</h3>
              <p className="text-gray-600">Get instant feedback on engagement levels and participant interaction patterns during meetings.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={LineChart} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Performance Tracking</h3>
              <p className="text-gray-600">Monitor and analyze meeting effectiveness with comprehensive analytics dashboards.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Presentation} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Content Optimization</h3>
              <p className="text-gray-600">Data-driven recommendations to improve presentation content and delivery methods.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={UserCheck} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Engagement Scoring</h3>
              <p className="text-gray-600">Quantitative metrics to measure and improve participant engagement over time.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={MessageSquareShare} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Interactive Features</h3>
              <p className="text-gray-600">Smart tools to boost participation and facilitate meaningful interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#546cfc] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Virtual Meetings?</h2>
          <p className="text-xl mb-8 opacity-90">Join leading organizations using Infergram to boost engagement and productivity.</p>
          <Button variant="secondary" className="px-8 py-3 text-lg font-semibold">
            Sign Up For The Demo
          </Button>
        </div>
      </section>
    </>
  );
}