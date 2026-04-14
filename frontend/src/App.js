import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Code2,
  Cpu,
  Hexagon,
  Layers,
  Lock,
  Menu,
  Shield,
  Workflow,
  X,
  Zap,
} from 'lucide-react';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

const featureItems = [
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

const trustCompanies = [
  'Acme Corp',
  'Global Tech',
  'Nexus Industries',
  'Vertex Solutions',
  'Quantum Systems',
  'Aether Dynamics',
];

const stats = [
  { value: '500+', label: 'Native integrations' },
  { value: '12ms', label: 'Average trigger latency' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '40k+', label: 'Teams worldwide' },
];

const steps = [
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

function Button({ children, variant = 'solid', size = 'md', className = '' }) {
  const sizeClasses =
    size === 'lg' ? 'h-12 px-8 text-base' : 'h-10 px-4 text-sm';

  const variantClasses =
    variant === 'outline'
      ? 'border border-border/70 bg-transparent text-foreground hover:bg-secondary/50'
      : variant === 'ghost'
      ? 'border border-transparent bg-transparent text-foreground hover:bg-secondary/60'
      : 'border-0 bg-gradient-primary text-white hover:opacity-90';

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
              <Hexagon size={20} className="fill-white/20" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Novaflow</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="font-medium">
                Log in
              </Button>
              <Button>Get Started</Button>
            </div>
          </nav>

          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-background border-b border-border/50 shadow-xl md:hidden p-4 flex flex-col gap-4"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center pt-20 pb-16 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
            <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
            <div className="absolute top-40 right-20 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-8 text-sm font-medium"
              >
                <span className="flex h-2 w-2 rounded-full bg-primary" />
                Introducing Novaflow 2.0
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight"
              >
                Work flows at the speed of <br className="hidden md:block" />
                <span className="text-gradient">precision engineering</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
              >
                The automation platform designed for modern teams. Eliminate busywork,
                connect your tools, and orchestrate perfect processes with uncompromising
                elegance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button size="lg" className="w-full sm:w-auto">
                  Start Building Free <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Book a Demo
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-20 relative mx-auto max-w-5xl hidden md:block"
            >
              <div className="rounded-2xl border border-border/50 bg-card shadow-2xl overflow-hidden backdrop-blur-sm">
                <div className="h-10 border-b border-border/50 flex items-center px-4 gap-2 bg-secondary/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                </div>
                <div className="p-8 aspect-video bg-gradient-to-br from-background to-secondary/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 p-8 opacity-20">
                    {Array.from({ length: 72 }).map((_, i) => (
                      <div key={i} className="border border-border/40 rounded-sm" />
                    ))}
                  </div>
                  <div className="z-10 flex gap-8">
                    <div className="w-64 h-80 bg-card border border-border/60 rounded-xl p-6 shadow-xl flex flex-col gap-4">
                      <div className="h-4 w-1/2 bg-muted rounded" />
                      <div className="h-2 w-3/4 bg-muted/50 rounded" />
                      <div className="flex-1 rounded-lg bg-secondary/50 mt-4 flex items-center justify-center">
                        <Zap className="text-primary/50 w-8 h-8" />
                      </div>
                    </div>
                    <div className="w-64 h-80 bg-card border border-border/60 rounded-xl p-6 shadow-xl flex flex-col gap-4 -translate-y-8">
                      <div className="h-4 w-1/2 bg-muted rounded" />
                      <div className="h-2 w-3/4 bg-muted/50 rounded" />
                      <div className="flex-1 rounded-lg bg-secondary/50 mt-4 flex items-center justify-center">
                        <BarChart3 className="text-teal-400/50 w-8 h-8" />
                      </div>
                    </div>
                    <div className="w-64 h-80 bg-card border border-border/60 rounded-xl p-6 shadow-xl flex flex-col gap-4">
                      <div className="h-4 w-1/2 bg-muted rounded" />
                      <div className="h-2 w-3/4 bg-muted/50 rounded" />
                      <div className="flex-1 rounded-lg bg-secondary/50 mt-4 flex items-center justify-center">
                        <Shield className="text-indigo-400/50 w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 border-y border-border/50 bg-secondary/10 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-center text-sm font-medium text-muted-foreground mb-8">
              Trusted by engineering teams at innovative companies
            </p>
            <div className="flex justify-center flex-wrap gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {trustCompanies.map((company, i) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-xl md:text-2xl font-display font-bold text-muted-foreground"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-y border-border/50 bg-secondary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y-2 md:divide-y-0 md:divide-x divide-border/40">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center px-6 py-4 md:py-0"
                >
                  <span className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-24 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Capabilities
              </h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Engineered for the demanding.
              </h3>
              <p className="text-lg text-muted-foreground">
                We stripped away the clutter to build a platform that focuses purely on
                power, reliability, and developer-grade ergonomics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureItems.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold font-display mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                From idea to execution in minutes
              </h2>
              <p className="text-lg text-muted-foreground">
                We have eliminated the friction between conceiving a process and
                automating it.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-border/50" />

              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="relative bg-card border border-border/50 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg"
                >
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xl font-bold text-primary mb-6 relative z-10">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold font-display mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/4 top-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[130px] opacity-60" />
            <div className="absolute right-1/4 bottom-0 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[100px] opacity-60" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Ready to eliminate the busywork?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
                Join over 40,000 teams who have already automated their most repetitive
                processes with Novaflow. Start free - no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto px-10">
                  Get started for free <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-10">
                  Schedule a demo
                </Button>
              </div>
              <p id="contact" className="mt-6 text-sm text-muted-foreground">
                Free plan includes 1,000 executions/month | No credit card needed | Cancel
                anytime
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="pb-8 text-center text-sm text-muted-foreground">
        Copyright {new Date().getFullYear()} Novaflow. Crafted for speed.
      </footer>
    </div>
  );
}

export default App;
