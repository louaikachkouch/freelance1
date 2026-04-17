import { motion } from 'framer-motion';
import { featureItems } from '../../data/landingData';

function FeaturesSection() {
  return (
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
  );
}

export default FeaturesSection;
