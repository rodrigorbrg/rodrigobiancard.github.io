module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animetedShadow: {
          '0%':  { 'box-shadow': '0 28px 60px #04e5e580' },
          '10%':  { 'box-shadow': '0 28px 60px #f3705580' },
          '20%':  { 'box-shadow': '0 28px 60px #ef4e7b80' },
          '30%':  { 'box-shadow': '0 28px 60px #a166ab80' },
          '40%': { 'box-shadow': '0 28px 60px #5073b880' },
          '50%': { 'box-shadow': '0 28px 60px #04e5e580' },
          '60%': { 'box-shadow': '0 28px 60px #07b39b80' },
          '70%': { 'box-shadow': '0 28px 60px #6fba8280' },
          '80%': { 'box-shadow': '0 28px 60px #5073b880' },
          '90%': { 'box-shadow': '0 28px 60px #1098ad80' },
          '100%': { 'box-shadow': '0 28px 60px #f3705580' },
        },
        colorAnimation: {
          '0%':  {background: '#04e5e5' },
          '10%': { background: '#f37055' },
          '20%': { background: '#ef4e7b' },
          '30%': { background: '#a166ab' },
          '40%': { background: '#5073b8' },
          '50%': { background: '#04e5e5' },
          '60%': { background: '#07b39b' },
          '70%': { background: '#6fba82' },
          '80%': { background: '#5073b8' },
          '90%': { background: '#1098ad' },
          '100,%': { background: '#f37055' },
        },
        gradientAnimation: {
          '0%': { 'background-position': '15% 0%' },
          '50%': { 'background-position': '85% 100%' },
          '100%': { 'background-position': '15% 0%' },
        },
      },
      animation: {
        'shadow-image':  'animetedShadow 10s ease-in-out 0s infinite normal none',
        'gradient-image':  'gradientAnimation 5s ease-in-out 0s infinite normal none',
        'gradient-slow': 'colorAnimation 10s ease 0s infinite alternate',
      },
      colors: {
        brand: {
          500: '#8257e6',
          300: '#996DFF'
        }
      }
    },
  },
  plugins: [],
}
