import React from 'react';
import { Button } from '../components/Button';
import { AnimatedIcon } from '../components/AnimatedIcon';
import { Check, Star, Zap } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '49',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 10 team members',
        'Basic analytics dashboard',
        'Meeting engagement metrics',
        'Email support',
        '5 meetings per month',
      ],
      icon: Star,
    },
    {
      name: 'Professional',
      price: '99',
      description: 'Ideal for growing organizations',
      features: [
        'Up to 50 team members',
        'Advanced analytics dashboard',
        'Real-time engagement tracking',
        'Priority support',
        'Unlimited meetings',
        'Custom reporting',
      ],
      icon: Zap,
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited team members',
        'Full analytics suite',
        'Custom integrations',
        'Dedicated support',
        'Advanced security features',
        'Custom training',
        'SLA guarantees',
      ],
      icon: Star,
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 animate-fade-in">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in-delay">
            Choose the plan that best fits your organization's needs
          </p>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white p-8 rounded-2xl shadow-sm border-2 ${
                  plan.popular ? 'border-[#546cfc]' : 'border-gray-100'
                } relative group hover:border-[#546cfc] transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#546cfc] text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <AnimatedIcon
                  icon={plan.icon}
                  variant="solution"
                  className="w-12 h-12 mb-6"
                />
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-600">/month</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#546cfc]" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#546cfc] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us to discuss your specific requirements</p>
          <Button variant="secondary" className="px-8 py-3 text-lg font-semibold">
            Contact Sales
          </Button>
        </div>
      </section>
    </div>
  );
}