import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 animate-fade-in">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in-delay">
            Last updated: March 15, 2024
          </p>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Introduction</h2>
            <p>
              At Infergram, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our virtual meeting analytics platform.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including but not limited to:
            </p>
            <ul>
              <li>Account information (name, email, company)</li>
              <li>Meeting analytics data</li>
              <li>User interaction metrics</li>
              <li>Technical information about your devices</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the collected information for various purposes, including:
            </p>
            <ul>
              <li>Providing and improving our services</li>
              <li>Analyzing meeting effectiveness</li>
              <li>Generating engagement insights</li>
              <li>Enhancing platform security</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to maintain the security
              of your personal information.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              privacy@infergram.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}