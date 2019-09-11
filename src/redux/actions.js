import axios from 'axios'

const ROUTE = `https://painel.dcc.ufmg.br/midea/detail`

export const CLICK_UPDATE_VALUE = 'CLICK_UPDATE_VALUE'

export const FETCH_TEMP_BEGIN = 'FETCH_TEMP_BEGIN'
export const FETCH_TEMP_FAILURE = 'FETCH_TEMP_FAILURE'
export const FETCH_TEMP_SUCCESS = 'FETCH_TEMP_SUCCESS'

export const doClick = value => {
  return {
    type: CLICK_UPDATE_VALUE
  }
}

export const fetchTemp = function(id) {
  return async (dispatch, getState) => {
    console.log('fetch')
    dispatch(begin(id))
    try {
      const response = await axios({
        url: `${ROUTE}/${id}`,
        method: 'get',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })

      console.log(response)

      return dispatch(success(response.data))
    } catch (error) {
      return dispatch(failure(error))
    }
  }
}

const begin = (...args) => ({
  type: FETCH_TEMP_BEGIN,
  payload: args
})

const success = objects => ({
  type: FETCH_TEMP_SUCCESS,
  payload: objects
})

const failure = error => ({
  type: FETCH_TEMP_FAILURE,
  payload: { error }
})
