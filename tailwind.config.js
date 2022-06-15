/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      backgroundImage: {
        "Header": "url('../img/Header_bg.png')"
      },
      colors: {
        'button-color': "#FF353C",
        'menu-color': '#383A49',
        'Numbers': '#109FCB',
        'LighGray': "#797E9D",
        
      },
      boxShadow: {
        'buttonShadow': "0px 7px 13px rgba(255, 53, 60, 0.25)",
        'textShadow': "0px 4px 20px rgba(0, 0, 0, 0.2)",
      },
      gridTemplateColumns: {
        'contentSize-2': "repeat(2, max-content)",
        'contentSize-4': "repeat(4, max-content)",
        'contentSize-5': "repeat(5, max-content)",
      },
      borderColor: {
        'menuBorder': '#E9EEF1',
      },
      width: {
        'Card': '13.342rem'
      },
      height: {
        'Card': "17.501rem"
      },

    
    },
  },
  plugins: [],
}
