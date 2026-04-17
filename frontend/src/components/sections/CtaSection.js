import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

function CtaSection() {
  return (
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
  );
}

export default CtaSection;
