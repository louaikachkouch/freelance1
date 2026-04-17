import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    cadence: '/month',
    description: 'For individuals and early-stage projects.',
    features: [
      '1,000 executions/month',
      '10 active workflows',
      'Community support',
      'Core integrations',
    ],
  },
  {
    name: 'Scale',
    price: '$79',
    cadence: '/month',
    description: 'For teams shipping automation at velocity.',
    highlighted: true,
    features: [
      '100,000 executions/month',
      'Unlimited workflows',
      'Priority support',
      'Advanced logic nodes',
      'Role-based access control',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    description: 'For regulated organizations with complex needs.',
    features: [
      'Unlimited executions',
      'Dedicated infrastructure options',
      'SAML SSO + SCIM',
      'Custom SLAs',
      'Security review support',
    ],
  },
];

function PricingPage() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-120px] top-20 w-[420px] h-[420px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute right-[-90px] bottom-0 w-[360px] h-[360px] bg-teal-500/15 rounded-full blur-[110px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            Flexible pricing for every stage
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-5">
            Choose a plan that fits your workflow scale
          </h1>
          <p className="text-lg text-muted-foreground">
            Start free, scale without migrating, and only pay for the capacity your
            team needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`rounded-2xl border p-8 bg-card shadow-lg ${
                plan.highlighted
                  ? 'border-primary/70 ring-1 ring-primary/30 md:-translate-y-3'
                  : 'border-border/60'
              }`}
            >
              <h2 className="text-2xl font-display font-bold mb-2">{plan.name}</h2>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-7">
                <span className="text-4xl font-display font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-1">{plan.cadence}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 mt-0.5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? 'solid' : 'outline'}
                className="w-full justify-center"
              >
                {plan.name === 'Enterprise' ? 'Talk to sales' : 'Start now'}
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPage;
