import React from 'react'

const themeContext = React.createContext({
  theme: 'pirate', // pirate or default
  toggleTheme: () => {},
})
export default themeContext
export { themeContext }
