import React from 'react'
import { Provider } from 'react-redux'

import { Store } from '../redux/stores'

import { AirConditioners } from './AirConditioners'

export const App = () => (
  <Provider store={Store}>
    <div className="App">
      <div>
        <h1>Hot Summer</h1>
        <AirConditioners />
      </div>
    </div>
  </Provider>
)
