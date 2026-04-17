import { ArrowRight, BarChart3, Shield, Zap } from 'lucide-react';
import Button from '../ui/Button';

function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center pt-20 pb-16 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute top-40 right-20 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight">
            Work flows at the speed of <br className="hidden md:bloc" />
            <span className="text-gradient">precision engineering</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            The automation platform designed for modern teams. Eliminate busywork,
            connect your tools, and orchestrate perfect processes with uncompromising
            elegance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Start Building Free <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Book a Demo
            </Button>
          </div>
        </div>

        <div className="mt-20 relative mx-auto max-w-5xl hidden md:block">
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
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
