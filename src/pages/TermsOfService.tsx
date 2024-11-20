import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 animate-fade-in">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in-delay">
            Last updated: March 15, 2024
          </p>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Infergram's services, you agree to be bound by these Terms of Service
              and all applicable laws and regulations.
            </p>

            <h2>2. Use License</h2>
            <p>
              Infergram grants you a limited, non-exclusive, non-transferable license to use our services
              for your internal business purposes.
            </p>

            <h2>3. Service Availability</h2>
            <p>
              While we strive to provide uninterrupted service, we cannot guarantee 100% availability.
              Occasional maintenance and updates may affect service accessibility.
            </p>

            <h2>4. User Obligations</h2>
            <p>
              Users must:
            </p>
            <ul>
              <li>Maintain account security</li>
              <li>Comply with all applicable laws</li>
              <li>Respect intellectual property rights</li>
              <li>Use services responsibly</li>
            </ul>

            <h2>5. Contact</h2>
            <p>
              For questions about these Terms, please contact: legal@infergram.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}