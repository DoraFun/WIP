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
        'Button-Gray': "#797E9D",
        'BorderGray': "#D6D6D6",
        'link': "#109FCB",
        'Dark-gray': "#666666",
        
      },
      boxShadow: {
        'buttonShadow': "0px 7px 13px rgba(255, 53, 60, 0.25)",
        'textShadow': "0px 4px 20px rgba(0, 0, 0, 0.2)",
        'buttonShadow-2': "0px 7px 13px rgba(0, 0, 0, 0.25)",
        'button-shadow-3': "0px 3px 40px rgba(0, 0, 0, 0.11)"
      },
      gridTemplateColumns: {
        'contentSize-2': "repeat(2, max-content)",
        'contentSize-4': "repeat(4, max-content)",
        'contentSize-3': "repeat(3, max-content)",
        'contentSize-5': "repeat(5, max-content)",
        'contentSize-full': "repeat(99, max-content)",
      },
      gridTemplateRows: {
        'contentSize-3': "repeat(3, max-content)",
        'contentSize-2': "repeat(2, max-content)",
        '8': "repeat(8, minmax(0,1fr)) ",
        'contentSize-8': "repeat(8, max-content) ",
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
