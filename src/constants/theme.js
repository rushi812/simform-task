import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          position: 'relative',
          color: '#4a4a4a',
          height: '100vh',
          backgroundColor: '#f5f5f5',
          fontFamily: 'Source Sans Pro, sans-serif',
          fontWeight: 600,
          overflowY: 'auto',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#49a389',
      dark: '#33725f'
    },
    secondary: {
      main: '#69EAC5'
    }
  }
})
export default theme
