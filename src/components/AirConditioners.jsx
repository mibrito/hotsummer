import React from 'react'
import { connect } from 'react-redux'

import { fetchTemp } from '../redux/actions'

export const AirConditioners = connect(
  ({ acs }) => ({ acs }),
  { fetchTemp }
)(({ acs, fetchTemp }) => {
  // useEffect(() => {
  //   fetchTemp(206)
  // }, [])

  return (
    <div>
      <button onClick={() => fetchTemp(206)}>click me</button>
    </div>
  )
})

// const AirConditioner = connect(
//   null,
//   { fetchTemp }
// )(({ acId, acInfo, fetchTemp }) => {
//   useEffect(() => {
//     fetchTemp(acId)
//   }, [acId])

//   console.log(acInfo)
//   return <div />
// })
