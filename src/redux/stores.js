import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { Reducers } from './reducers'

const configureStore = () => {
  const middlewares = [thunk]

  const store = createStore(Reducers, applyMiddleware(...middlewares))

  return store
}

export const Store = configureStore(Reducers)
