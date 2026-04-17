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

export default Button;
