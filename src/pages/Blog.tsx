import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'The Future of Virtual Meetings: AI-Driven Engagement',
      excerpt: 'Discover how artificial intelligence is revolutionizing virtual meetings and improving participant engagement.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600&h=400',
      date: 'Mar 15, 2024',
      readTime: '5 min read',
      author: 'Sarah Johnson',
    },
    {
      title: 'Maximizing Remote Team Productivity Through Better Meetings',
      excerpt: 'Learn effective strategies for running productive virtual meetings that keep remote teams engaged and aligned.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600&h=400',
      date: 'Mar 12, 2024',
      readTime: '4 min read',
      author: 'Michael Chen',
    },
    {
      title: 'The Psychology Behind Virtual Meeting Engagement',
      excerpt: 'Understanding the psychological factors that influence participation and attention in online meetings.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=400',
      date: 'Mar 10, 2024',
      readTime: '6 min read',
      author: 'Dr. Emily Parker',
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 animate-fade-in">
            Latest Insights & Updates
          </h1>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in-delay">
            Expert perspectives on virtual meetings, engagement analytics, and remote collaboration
          </p>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-2xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-[#546cfc] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}