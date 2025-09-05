/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* dark-gray */
        input: "var(--color-input)", /* elevated-dark-gray */
        ring: "var(--color-ring)", /* tactical-amber */
        background: "var(--color-background)", /* deep-charcoal */
        foreground: "var(--color-foreground)", /* light-gray */
        primary: {
          DEFAULT: "var(--color-primary)", /* tactical-amber */
          foreground: "var(--color-primary-foreground)", /* deep-charcoal */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* cyan-blue */
          foreground: "var(--color-secondary-foreground)", /* deep-charcoal */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* controlled-red */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* muted-gray */
          foreground: "var(--color-muted-foreground)", /* medium-gray */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* lime-green */
          foreground: "var(--color-accent-foreground)", /* deep-charcoal */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* elevated-dark-gray */
          foreground: "var(--color-popover-foreground)", /* light-gray */
        },
        card: {
          DEFAULT: "var(--color-card)", /* elevated-dark-gray */
          foreground: "var(--color-card-foreground)", /* light-gray */
        },
        success: {
          DEFAULT: "var(--color-success)", /* bright-green */
          foreground: "var(--color-success-foreground)", /* deep-charcoal */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* gold-yellow */
          foreground: "var(--color-warning-foreground)", /* deep-charcoal */
        },
        error: {
          DEFAULT: "var(--color-error)", /* controlled-red */
          foreground: "var(--color-error-foreground)", /* white */
        },
        surface: "var(--color-surface)", /* elevated-dark-gray */
        'text-primary': "var(--color-text-primary)", /* light-gray */
        'text-secondary': "var(--color-text-secondary)", /* medium-gray */
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-from-top": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 140, 0, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(255, 140, 0, 0.6)" },
        },
        "targeting-sweep": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-in-from-bottom": "slide-in-from-bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-in-from-left": "slide-in-from-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-in-from-right": "slide-in-from-right 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "targeting-sweep": "targeting-sweep 3s linear infinite",
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-amber': '0 0 20px rgba(255, 140, 0, 0.3)',
        'glow-cyan': '0 0 20px rgba(0, 191, 255, 0.3)',
        'glow-green': '0 0 20px rgba(0, 255, 65, 0.3)',
        'glow-amber-intense': '0 0 30px rgba(255, 140, 0, 0.6)',
        'glow-cyan-intense': '0 0 30px rgba(0, 191, 255, 0.6)',
        'glow-green-intense': '0 0 30px rgba(0, 255, 65, 0.6)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
