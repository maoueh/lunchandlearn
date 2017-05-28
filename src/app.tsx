import React from 'react'
import { View } from 'react-native'
import TalksCalendarPresenter from './screens/TalksCalendarPresenter'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from './reducers'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(logger)(createStore)
const store = createStoreWithMiddleware(reducers)

export class App extends React.Component<React.Props<View>, {}> {
  render() {
    return (
      <Provider store={store}>
        <TalksCalendarPresenter />
      </Provider>
    )
  }
}