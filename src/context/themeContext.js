import React from 'react'

const themeContext = React.createContext({
  theme: 'default',
  toggleTheme: () => {},
})
export default themeContext
export { themeContext }
