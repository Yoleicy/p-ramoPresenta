module.exports = {
    content: [
      "./src/**/*.{html,ts}", // <- importante para Angular
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  @keyframes carousel-autoplay {
    0% { transform: translateX(0); }
    25% { transform: translateX(-25%); }
    50% { transform: translateX(-50%); }
    75% { transform: translateX(-75%); }
    100% { transform: translateX(0); }
  }
  
  .animate-carousel-autoplay {
    animation: carousel-autoplay 20s infinite;
  }
    