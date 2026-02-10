/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        // TU PALETA EXACTA
        "tuscan-sun": {
          50: "#fff7e5",
          100: "#ffeecc",
          200: "#ffdd99",
          300: "#ffcc66",
          400: "#ffbb33",
          500: "#ffaa00", // Color principal - Energía
          600: "#cc8800",
          700: "#996600",
          800: "#664400",
          900: "#332200",
          950: "#241800",
        },
        "amber-glow": {
          50: "#fff3e5",
          100: "#ffe7cc",
          200: "#ffcf99",
          300: "#ffb866",
          400: "#ffa033",
          500: "#ff8800", // Color secundario
          600: "#cc6d00",
          700: "#995200",
          800: "#663600",
          900: "#331b00",
          950: "#241300",
        },
        "golden-orange": {
          50: "#fef6e7",
          100: "#fdedce",
          200: "#fbdc9d",
          300: "#f9ca6c",
          400: "#f7b83b",
          500: "#f5a70a", // Color terciario
          600: "#c48508",
          700: "#936406",
          800: "#624304",
          900: "#312102",
          950: "#221701",
        },
        onyx: {
          50: "#f3f1f2",
          100: "#e7e4e5",
          200: "#d0c8cb",
          300: "#b8adb1",
          400: "#a09297",
          500: "#88777d", // Color neutro principal
          600: "#6d5f64",
          700: "#52474b",
          800: "#372f32",
          900: "#1b1819",
          950: "#131111",
        },
        // Variables CSS para ShadCN - basadas en TU paleta
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-in": "slide-in 0.3s ease-out",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(255, 170, 0, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(255, 170, 0, 0.6)",
          },
        },
        "slide-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
