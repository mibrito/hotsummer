const axios = require('axios')
const ROUTE = `https://painel.dcc.ufmg.br/midea/detail/207`

axios({
  url: `${ROUTE}`,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    // 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'Accept-Language':	'en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7'
  }
})
.then((response) => {
  console.log(response.data.device.envir_temp);
})
.catch(err => {
  console.error(err);
})
