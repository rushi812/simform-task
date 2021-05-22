import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createPromise } from 'redux-promise-middleware'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './constants/theme'
import Routes from './routes/Routes'
import rootReducer from './store/rootReducer'

import NavbarContainer from './modules/navbar/NavbarContainer'
import './App.css'

const store = createStore(
  rootReducer,
  compose(
    composeWithDevTools(
      applyMiddleware(
        thunk,
        createPromise({ promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'] })
      )
    )
  )
)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavbarContainer />
          <div>
            <Routes />
          </div>
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default App
