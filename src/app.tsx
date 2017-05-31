import React from 'react'
import { View } from 'react-native'
import { Tabs } from './navigation/router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)
const store = createStoreWithMiddleware(reducers)

export class App extends React.Component<React.Props<View>, {}> {
  render() {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    )
  }
}