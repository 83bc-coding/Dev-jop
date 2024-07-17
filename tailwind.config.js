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
    "bodyD":"#19202d",
    "cardD":"#6e8098",
    "cardL":"#fff",
    "blue":'#5964e0',
    'blackText':'#19202D',
    'blackDescription':'#6e8098',
    'bgBut':'#6e8098'
  },
    container: {
    center: true,
  },
    extend: {},
  },
  plugins: [],
}

