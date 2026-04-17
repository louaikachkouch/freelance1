import { motion } from 'framer-motion';
import { stats } from '../../data/landingData';

function StatsSection() {
  return (
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
  );
}

export default StatsSection;
