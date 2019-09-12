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
    dispatch(begin(id))
    try {
      console.log('fetch')
      const response = await axios({
        url: `${ROUTE}/${id}`,
        mode: 'no-cors',
        headers: {
          // 'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
          'Accept-Language':	'en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7',
          'Origin': undefined
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
