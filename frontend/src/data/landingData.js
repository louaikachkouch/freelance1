import { Code2, Cpu, Layers, Lock, Workflow, Zap } from 'lucide-react';

export const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export const featureItems = [
  {
    title: 'Visual Node Builder',
    description:
      'Design complex logic flows intuitively with our drag-and-drop canvas. No code required, but full power available.',
    icon: Workflow,
  },
  {
    title: 'Instant Execution',
    description:
      'Built on a Rust-powered engine, your automations trigger in milliseconds. Experience zero-latency workflows.',
    icon: Zap,
  },
  {
    title: 'Deep Integrations',
    description:
      'Connect to over 500+ apps natively, or use our universal webhook and REST API nodes for infinite possibilities.',
    icon: Layers,
  },
  {
    title: 'Developer Ready',
    description:
      'Write custom JavaScript or Python scripts right inside your nodes when you need to go beyond standard actions.',
    icon: Code2,
  },
  {
    title: 'Enterprise Security',
    description:
      'SOC2 Type II certified, end-to-end encryption, and role-based access control out of the box.',
    icon: Lock,
  },
  {
    title: 'AI-Powered Parsing',
    description:
      'Extract structured data from unstructured emails, PDFs, and text automatically using native LLM nodes.',
    icon: Cpu,
  },
];

export const trustCompanies = [
  'Acme Corp',
  'Global Tech',
  'Nexus Industries',
  'Vertex Solutions',
  'Quantum Systems',
  'Aether Dynamics',
];

export const stats = [
  { value: '500+', label: 'Native integrations' },
  { value: '12ms', label: 'Average trigger latency' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '40k+', label: 'Teams worldwide' },
];

export const steps = [
  {
    number: '01',
    title: 'Connect your stack',
    description:
      'Authenticate securely with over 500+ pre-built integrations, or set up custom REST API connections in seconds.',
  },
  {
    number: '02',
    title: 'Map the flow',
    description:
      'Use our visual canvas to drag and drop triggers, logic branches, and actions. Add custom code nodes when needed.',
  },
  {
    number: '03',
    title: 'Deploy instantly',
    description:
      'Hit publish and watch your workflow execute in milliseconds. Monitor performance with real-time logs and alerts.',
  },
];
