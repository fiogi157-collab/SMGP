import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#93c5fd",
        accent: "#60a5fa",
        background: "#f9fafb",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.1)"
      },
      backdropBlur: {
        xs: "2px"
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: []
}
export default config
