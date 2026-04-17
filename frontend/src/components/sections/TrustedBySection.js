import { motion } from 'framer-motion';
import { trustCompanies } from '../../data/landingData';

function TrustedBySection() {
  return (
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
  );
}

export default TrustedBySection;
