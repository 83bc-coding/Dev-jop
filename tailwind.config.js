/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {  
     screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  colors:{
    transparent: 'transparent',
    current: 'currentColor',
    "bodyL":"#f4f6f8",
    "bodyD":"#121721",
    "cardD":"#19202d",
    "cardL":"#fff",
    "blue":'#5964e0',
    'blackText':'#19202D',
    'blackDescription':'#6e8098',
    'bgBut':'#6e8098',
    'borderR':'rgba(110, 128, 152, 0.2)',
    'info':'#9daec2',
    'nameJ':'#121721',
    'state':'#5964e0',
    'log':'hsl(36, 87%, 49%)'
  },
    container: {
    center: true,
  },
    extend: {      backgroundImage: {
      'hero-pattern': "url('./src/assets/image/bg-pattern-header.ea1134f14277d29c5f40360a34f4af0a.svg')",
      'texture': "url('/src/assets/image/bg-pattern-header.f3307602ee5e7c6b4f50428cf0794a8c.svg')",
      'Logo1': "url('/src/assets/logos/officelite.svg')",
    }},
  },
  plugins: [],
}

