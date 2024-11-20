import React from 'react';
import { Button } from '../components/Button';
import { AnimatedIcon } from '../components/AnimatedIcon';
import { Brain, Eye, Gauge, LineChart, BarChart, PieChart, Users, Video, MessageSquare } from 'lucide-react';

export default function Product() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 animate-fade-in">
            Advanced Analytics for Virtual Meetings
          </h1>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in-delay">
            Powerful tools to measure, analyze, and optimize virtual meeting engagement in real-time.
          </p>

          <div className="max-w-3xl mx-auto mb-16 animate-fade-in-delay-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200&h=600"
                alt="Analytics dashboard visualization"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#546cfc]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Brain} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">AI-Powered Analytics</h3>
              <p className="text-gray-600">Advanced machine learning algorithms analyze participant behavior and engagement patterns.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Eye} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Real-Time Monitoring</h3>
              <p className="text-gray-600">Track engagement metrics and participant attention levels as they happen.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Gauge} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Performance Metrics</h3>
              <p className="text-gray-600">Comprehensive dashboards showing key performance indicators and trends.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={LineChart} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Trend Analysis</h3>
              <p className="text-gray-600">Identify patterns and insights across multiple meetings and time periods.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={Users} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Participant Insights</h3>
              <p className="text-gray-600">Detailed analytics on individual and group participation levels.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm group">
              <AnimatedIcon icon={MessageSquare} variant="solution" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Engagement Scoring</h3>
              <p className="text-gray-600">Quantitative metrics for measuring meeting effectiveness and participant engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#546cfc] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Transform your virtual meetings with powerful analytics.</p>
          <Button variant="secondary" className="px-8 py-3 text-lg font-semibold">
            Request Demo
          </Button>
        </div>
      </section>
    </div>
  );
}