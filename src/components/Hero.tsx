import React from 'react';
import { Button } from './Button';
import { Clock, Users, Brain, AlertCircle, BarChart, LineChart, PieChart, TrendingDown, School, UserCheck, DollarSign, Target } from 'lucide-react';
import { AnimatedIcon } from './AnimatedIcon';

export function Hero() {
  return (
    <header className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 animate-fade-in">
          Transform Virtual Meetings with User Engagement Analytics Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-12 animate-fade-in-delay">
          Measure, analyze and understand audience engagement in virtual meetings with advanced interaction feedback analytics and AI-enabled recommendations.
        </p>

        <div className="max-w-3xl mx-auto mb-16 animate-fade-in-delay-2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&q=80&w=1200&h=600"
              alt="Hybrid meeting with virtual participants on screen"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#546cfc]/20 to-transparent"></div>
          </div>
        </div>

        <div className="flex justify-center mb-20">
          <Button variant="primary" className="px-8 py-3">
            Sign Up For Demo
          </Button>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Virtual Meeting Statistics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Presentation style, content choices and meeting strategy are essential. Without proper planning, execution and audience intelligence, organizations risk significant productivity losses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6 group">
              <div className="flex items-center gap-3">
                <AnimatedIcon icon={Clock} variant="stats" className="w-8 h-8" />
                <h3 className="text-lg font-semibold">Meeting Load</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <AnimatedIcon icon={AlertCircle} variant="stats" className="w-8 h-8 shrink-0" />
                  <span className="text-gray-600">As of 2023, approximately 55 million US meetings were held each week.</span>
                </li>
                <li className="flex gap-3">
                  <AnimatedIcon icon={PieChart} variant="stats" className="w-8 h-8 shrink-0" />
                  <span className="text-gray-600">36.2 million US employees will work remotely by 2025.</span>
                </li>
                <li className="flex gap-3">
                  <AnimatedIcon icon={Users} variant="stats" className="w-8 h-8 shrink-0" />
                  <span className="text-gray-600">Video conferencing technology is used by 77% of remote workers.</span>
                </li>
                <li className="flex gap-3">
                  <AnimatedIcon icon={BarChart} variant="stats" className="w-8 h-8 shrink-0" />
                  <span className="text-gray-600">Zoom fatigue ranks as the second largest remote work challenge, surpassing onboarding, culture and productivity.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6 group">
              <div className="flex items-center gap-3">
                <AnimatedIcon icon={Brain} variant="stats" className="w-8 h-8" />
                <h3 className="text-lg font-semibold">Productivity</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <AnimatedIcon icon={TrendingDown} variant="stats" className="w-8 h-8 shrink-0" />
                  <span className="text-gray-600">At least eight meetings are attended by the typical employee each week.</span>
                </li>
                <li className="flex gap-3">
                  <AnimatedIcon icon={AlertCircle} variant="stats" className="w-8 h-8 shrink-0" />
                  <span className="text-gray-600">35% of workers report 2-5 weekly meeting hours are unproductive.</span>
                </li>
                <li className="flex gap-3">
                  <AnimatedIcon icon={Clock} variant="stats" className="w-8 h-8 shrink-0" />
                  <span className="text-gray-600">In at least 41% of meetings, employees multitask.</span>
                </li>
                <li className="flex gap-3">
                  <AnimatedIcon icon={DollarSign} variant="stats" className="w-8 h-8 shrink-0" />
                  <span className="text-gray-600">24 billion hours lost annually to unproductive meetings.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6 group">
              <div className="flex items-center gap-3">
                <AnimatedIcon icon={School} variant="stats" className="w-8 h-8" />
                <h3 className="text-lg font-semibold">Training Impact</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <AnimatedIcon icon={Target} variant="stats" className="w-8 h-8 shrink-0" />
                  <span className="text-gray-600">70% of corporate training is instructor-led. 51% of employees prefer live instructor-led training.</span>
                </li>
                <li className="flex gap-3">
                  <AnimatedIcon icon={LineChart} variant="stats" className="w-8 h-8 shrink-0" />
                  <span className="text-gray-600">72% of employers say that online learning increases their competitive edge in their market.</span>
                </li>
                <li className="flex gap-3">
                  <AnimatedIcon icon={Users} variant="stats" className="w-8 h-8 shrink-0" />
                  <span className="text-gray-600">77% of companies provide a selection of online learning or training for employees and new team members.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}