import { motion } from 'framer-motion';
import { steps } from '../../data/landingData';

function StepsSection() {
  return (
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
  );
}

export default StepsSection;
