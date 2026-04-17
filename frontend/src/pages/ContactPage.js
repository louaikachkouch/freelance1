import { motion } from 'framer-motion';
import { Mail, MapPin, PhoneCall } from 'lucide-react';
import Button from '../components/ui/Button';

const contactWays = [
  {
    icon: Mail,
    title: 'Email us',
    value: 'hello@novaflow.io',
    note: 'Typical response time: under 2 hours',
  },
  {
    icon: PhoneCall,
    title: 'Call support',
    value: '+1 (415) 555-0182',
    note: 'Mon-Fri, 8am-6pm PT',
  },
  {
    icon: MapPin,
    title: 'HQ',
    value: '415 Mission St, San Francisco, CA',
    note: 'Visits by appointment only',
  },
];

function ContactPage() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-10 w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[120px]" />
        <div className="absolute right-[10%] bottom-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-5">
            Let&apos;s design your automation architecture
          </h1>
          <p className="text-lg text-muted-foreground">
            Tell us about your process bottlenecks and we&apos;ll map the fastest path to
            production-grade workflows.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <label className="flex flex-col gap-2 text-sm font-medium">
                First name
                <input
                  type="text"
                  className="h-11 rounded-lg border border-border/60 bg-background px-3 outline-none focus:border-primary/60"
                  placeholder="Ada"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium">
                Last name
                <input
                  type="text"
                  className="h-11 rounded-lg border border-border/60 bg-background px-3 outline-none focus:border-primary/60"
                  placeholder="Lovelace"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium mb-4">
              Work email
              <input
                type="email"
                className="h-11 rounded-lg border border-border/60 bg-background px-3 outline-none focus:border-primary/60"
                placeholder="you@company.com"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium mb-6">
              What should we automate first?
              <textarea
                rows={5}
                className="rounded-lg border border-border/60 bg-background px-3 py-2 outline-none focus:border-primary/60 resize-none"
                placeholder="Describe your current workflow, tools, and desired outcomes..."
              />
            </label>

            <Button size="lg" className="w-full md:w-auto">
              Send message
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactWays.map((item) => (
              <article
                key={item.title}
                className="bg-card border border-border/60 rounded-2xl p-5 shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display text-xl font-bold mb-1">{item.title}</h2>
                <p className="text-foreground mb-1">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.note}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
