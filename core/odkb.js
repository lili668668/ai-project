require('rootpath')()
const crawler = require('request-promise')

const url = 'http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=f4a75ba9-7721-4363-884d-c3820b0b917c'

const all_od = () => {
  return new Promise((resolve, reject)) 
}

crawler(url)
  .then( html => {

  })
  .catch


