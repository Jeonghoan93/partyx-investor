/** @type {import('tailwindcss').Config} */
import path from 'path'

module.exports = {
  corePlugins: {
    preflight: false
  },
  content: [path.join(__dirname, './src/**/*.(vue)')],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        cute: ['Fredoka', 'sans-serif']
      },
      colors: {
        gray: {
          1: '#8e8e93',
          2: '#636366',
          3: '#48484a',
          4: '#3a3a3c',
          5: '#2c2c2e',
          6: '#1c1c1e'
        },
        blue: '#0a84ff',
        green: '#30d158',
        indigo: '#5e5ce6',
        orange: '#ff9f0a',
        pink: '#ff375f',
        purple: '#bf5af2',
        red: '#ff453a',
        teal: '#64d2ff',
        yellow: '#ffd60a'
      }
    }
  }
}
