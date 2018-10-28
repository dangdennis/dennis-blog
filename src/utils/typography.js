import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'

moragaTheme.headerFontFamily = [
  '-apple-system',
  'system-ui',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
]

moragaTheme.bodyFontFamily = [
  '-apple-system',
  'system-ui',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
]

moragaTheme.headerWeight = '400'

delete moragaTheme.googleFonts

const typography = new Typography(moragaTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
