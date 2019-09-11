import React from 'react'
import { connect } from 'react-redux'

import { doClick } from '../redux/actions'

export const CountClick = connect(
  ({ clicks }) => ({ clicks }),
  { onClick: doClick }
)(({ clicks, onClick }) => (
  <div>
    <p>{clicks}</p>
    <button onClick={onClick} type="button">
      click me
    </button>
  </div>
))
